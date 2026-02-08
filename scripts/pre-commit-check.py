#!/usr/bin/env python3
"""Run repository pre-commit checks.

Checks:
- Internal markdown links are valid (file + optional #anchor).
- Docs embeds do not commit localhost prototype iframe sources.

Usage:
    ./scripts/pre-commit-check.py
"""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

_LINK_RE = re.compile(r"\[.*?\]\(([^)]+)\)")
_HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)")
_FENCE_RE = re.compile(r"^(`{3,}|~{3,})")
_INLINE_CODE_RE = re.compile(r"`[^`]+`")
_IFRAME_SRC_RE = re.compile(
    r"<iframe\b[^>]*\bsrc\s*=\s*([\"'])(?P<src>[^\"']+)\1",
    flags=re.IGNORECASE,
)

_LOCALHOST_HOSTS = ("localhost", "127.0.0.1", "0.0.0.0")


def repo_root() -> Path:
    result = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        capture_output=True,
        text=True,
        check=True,
    )
    return Path(result.stdout.strip())


def find_md_files(root: Path) -> list[Path]:
    """Return all markdown files excluding generated/vendor directories."""
    excluded_dirs = {".git", ".claude", "node_modules"}
    return sorted(
        path
        for path in root.rglob("*.md")
        if path.is_file() and not any(part in excluded_dirs for part in path.parts)
    )


def extract_links(filepath: Path):
    """Yield (line_number, raw_target) for each internal markdown link."""
    in_fence = False
    for line_number, line in enumerate(filepath.read_text().splitlines(), start=1):
        if _FENCE_RE.match(line.strip()):
            in_fence = not in_fence
            continue

        if in_fence:
            continue

        cleaned = _INLINE_CODE_RE.sub("", line)
        for target in _LINK_RE.findall(cleaned):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            yield line_number, target


def resolve_link(source: Path, target: str, docs_root: Path) -> Path:
    """Resolve a link target to an absolute file path."""
    file_part, _, _anchor = target.partition("#")

    if file_part == "/" or file_part == "":
        if file_part == "/":
            return docs_root / "README.md"
        return source

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
        match = _HEADING_RE.match(line)
        if match:
            slugs.add(heading_to_slug(match.group(2)))
    return slugs


def validate_internal_links(root: Path) -> list[str]:
    """Return link validation errors."""
    docs_root = root / "docs"
    errors: list[str] = []
    files = find_md_files(root)
    anchor_cache: dict[Path, set[str]] = {}

    for filepath in files:
        for line_number, target in extract_links(filepath):
            resolved = resolve_link(filepath, target, docs_root)
            _, _, anchor = target.partition("#")

            if not resolved.is_file():
                rel = filepath.relative_to(root)
                errors.append(f"{rel}:{line_number} -> {target} (file not found)")
                continue

            if anchor:
                anchors = anchor_cache.setdefault(resolved, file_anchors(resolved))
                if anchor not in anchors:
                    rel = filepath.relative_to(root)
                    errors.append(
                        f"{rel}:{line_number} -> {target} (anchor '#{anchor}' not found)"
                    )

    return errors


def docs_embed_files(root: Path) -> list[Path]:
    """Return docs files where iframe embed sources may appear."""
    docs_dir = root / "docs"
    if not docs_dir.is_dir():
        return []

    excluded_files = {docs_dir / "_media" / "prototype.html"}
    files: list[Path] = []

    for path in docs_dir.rglob("*"):
        if not path.is_file() or path in excluded_files:
            continue
        if path.suffix.lower() in {".md", ".html"}:
            files.append(path)

    return sorted(files)


def line_number_for_offset(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def is_localhost_url(value: str) -> bool:
    lowered = value.lower()
    return any(host in lowered for host in _LOCALHOST_HOSTS)


def validate_iframe_prototype_sources(root: Path) -> list[str]:
    """Reject localhost prototype iframe sources in docs files."""
    errors: list[str] = []

    for path in docs_embed_files(root):
        content = path.read_text()
        for match in _IFRAME_SRC_RE.finditer(content):
            src = match.group("src")
            lowered = src.lower()
            if "prototype.html" not in lowered:
                continue
            if not is_localhost_url(src):
                continue
            line_number = line_number_for_offset(content, match.start())
            rel = path.relative_to(root)
            errors.append(
                f"{rel}:{line_number} -> iframe src '{src}' (localhost prototype URL is not allowed)"
            )

    return errors


def print_section(title: str, items: list[str]) -> None:
    print(f"\n{title}:")
    for item in items:
        print(f"  - {item}")


def main() -> int:
    root = repo_root()

    link_errors = validate_internal_links(root)
    iframe_errors = validate_iframe_prototype_sources(root)

    if link_errors or iframe_errors:
        print("Pre-commit checks failed.")
        if link_errors:
            print_section("Broken internal links", link_errors)
        if iframe_errors:
            print_section("Invalid prototype iframe sources", iframe_errors)

        total = len(link_errors) + len(iframe_errors)
        print(f"\nFound {total} issue(s).")
        return 1

    md_count = len(find_md_files(root))
    embed_count = len(docs_embed_files(root))
    print(
        "Pre-commit checks passed "
        f"(links in {md_count} markdown files, iframe scan in {embed_count} docs files)."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
