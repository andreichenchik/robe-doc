#!/usr/bin/env python3
"""Validate internal markdown links across the repository.

Finds all .md files, extracts [text](target) links, and checks that
each target file (and optional #anchor) exists. Exits with code 1
if any broken links are found.

Usage:
    python3 scripts/check-links.py
"""

import re
import subprocess
import sys
from pathlib import Path

_LINK_RE = re.compile(r"\[.*?\]\(([^)]+)\)")
_HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)")
_FENCE_RE = re.compile(r"^(`{3,}|~{3,})")
_INLINE_CODE_RE = re.compile(r"`[^`]+`")


def repo_root() -> Path:
    result = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        capture_output=True, text=True, check=True,
    )
    return Path(result.stdout.strip())


def find_md_files(root: Path) -> list[Path]:
    """Return all .md files, excluding .git and .claude directories."""
    excluded = {".git", ".claude"}
    return sorted(
        p for p in root.rglob("*.md")
        if not any(part in excluded for part in p.parts)
    )


def extract_links(filepath: Path):
    """Yield (line_number, raw_target) for each internal markdown link."""
    in_fence = False
    for line_num, line in enumerate(filepath.read_text().splitlines(), start=1):
        if _FENCE_RE.match(line.strip()):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        # Remove inline code spans so example links aren't checked
        cleaned = _INLINE_CODE_RE.sub("", line)
        for target in _LINK_RE.findall(cleaned):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            yield line_num, target


def resolve_link(source: Path, target: str, docs_root: Path) -> Path:
    """Resolve a link target to an absolute file path."""
    file_part, _, _anchor = target.partition("#")

    if file_part == "/" or file_part == "":
        # Bare anchor or Docsify root
        if file_part == "/":
            return docs_root / "README.md"
        return source  # bare #anchor → same file

    if file_part.startswith("/"):
        return (docs_root / file_part.lstrip("/")).resolve()

    return (source.parent / file_part).resolve()


def heading_to_slug(text: str) -> str:
    """Convert heading text to a Docsify/GitHub-style anchor slug."""
    slug = text.strip().lower()
    slug = re.sub(r"[^a-z0-9 -]", "", slug)
    slug = slug.replace(" ", "-")
    slug = re.sub(r"-{2,}", "-", slug)
    return slug.strip("-")


def file_anchors(filepath: Path) -> set[str]:
    """Return all heading-derived anchor slugs in a markdown file."""
    slugs: set[str] = set()
    for line in filepath.read_text().splitlines():
        m = _HEADING_RE.match(line)
        if m:
            slugs.add(heading_to_slug(m.group(2)))
    return slugs


def main() -> int:
    root = repo_root()
    docs_root = root / "docs"
    errors: list[str] = []
    files = find_md_files(root)

    for filepath in files:
        for line_num, target in extract_links(filepath):
            resolved = resolve_link(filepath, target, docs_root)

            _, _, anchor = target.partition("#")

            if not resolved.is_file():
                rel = filepath.relative_to(root)
                errors.append(f"  {rel}:{line_num}  ->  {target}  (file not found)")
                continue

            if anchor and anchor not in file_anchors(resolved):
                rel = filepath.relative_to(root)
                errors.append(
                    f"  {rel}:{line_num}  ->  {target}  (anchor '#{anchor}' not found)"
                )

    if errors:
        print("Broken links found:\n")
        print("\n".join(errors))
        print(f"\nFound {len(errors)} broken link(s) across {len(files)} files.")
        return 1

    print(f"All links valid across {len(files)} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
