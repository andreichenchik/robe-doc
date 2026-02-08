#!/usr/bin/env python3
"""Run docs + prototype dev flow in one process.

Flow:
1. Start Vite dev server for `prototype/`.
2. Detect dev URL and temporarily rewrite docs iframe sources from
   `./_media/prototype.html` to `<vite-url>/prototype.html`.
3. Start Docsify server.
4. On exit, restore all touched files and stop Vite.
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
import threading
import time
from pathlib import Path

PROTOTYPE_TOKEN = "./_media/prototype.html"
URL_RE = re.compile(r"http://[^\s]+")


def repo_root() -> Path:
    result = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        capture_output=True,
        text=True,
        check=True,
    )
    return Path(result.stdout.strip())


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run docs + prototype dev flow.")
    parser.add_argument(
        "--vite-port",
        type=int,
        default=int(os.environ.get("VITE_PORT", "5173")),
        help="Port for Vite dev server (default: env VITE_PORT or 5173).",
    )
    parser.add_argument(
        "--docs-port",
        type=int,
        default=int(os.environ.get("DOCS_PORT", "3000")),
        help="Port for Docsify server (default: env DOCS_PORT or 3000).",
    )
    return parser.parse_args()


class ViteRunner:
    def __init__(self, root: Path, port: int):
        self.root = root
        self.port = port
        self.proc: subprocess.Popen[str] | None = None
        self.url: str | None = None
        self._reader_thread: threading.Thread | None = None
        self._recent_logs: list[str] = []

    def start(self) -> str:
        cmd = [
            "bun",
            "x",
            "vite",
            "--host",
            "localhost",
            "--port",
            str(self.port),
            "--strictPort",
        ]
        self.proc = subprocess.Popen(
            cmd,
            cwd=self.root / "prototype",
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
        )

        self._reader_thread = threading.Thread(target=self._read_output, daemon=True)
        self._reader_thread.start()

        deadline = time.time() + 20
        while time.time() < deadline:
            if self.url:
                return self.url
            if self.proc.poll() is not None:
                self._dump_logs()
                raise RuntimeError("Vite exited before URL was detected.")
            time.sleep(0.05)

        self._dump_logs()
        raise RuntimeError("Failed to detect Vite URL from startup logs.")

    def _read_output(self) -> None:
        assert self.proc is not None
        assert self.proc.stdout is not None

        for raw_line in self.proc.stdout:
            line = raw_line.rstrip("\n")
            self._recent_logs.append(line)
            if len(self._recent_logs) > 120:
                self._recent_logs = self._recent_logs[-120:]

            print(f"[vite] {line}")

            if self.url is None:
                match = URL_RE.search(line)
                if match:
                    self.url = match.group(0)

    def _dump_logs(self) -> None:
        if not self._recent_logs:
            return
        print("\nRecent Vite logs:")
        for line in self._recent_logs[-40:]:
            print(line)

    def stop(self) -> None:
        if self.proc is None:
            return

        if self.proc.poll() is None:
            self.proc.terminate()
            try:
                self.proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.proc.kill()
                self.proc.wait(timeout=5)


def docs_files(root: Path) -> list[Path]:
    files: list[Path] = []
    docs_dir = root / "docs"
    excluded = {docs_dir / "_media" / "prototype.html"}
    for path in docs_dir.rglob("*"):
        if path in excluded:
            continue
        if path.is_file() and path.suffix.lower() in {".md", ".html"}:
            files.append(path)
    return sorted(files)


def rewrite_docs_iframe_sources(root: Path, old: str, new: str) -> list[Path]:
    touched: list[Path] = []
    for path in docs_files(root):
        content = path.read_text()
        if old not in content:
            continue

        updated = content.replace(old, new)
        if updated == content:
            continue

        path.write_text(updated)
        touched.append(path)

    return touched


def restore_docs_iframe_sources(touched: list[Path], old: str, new: str) -> None:
    for path in touched:
        if not path.is_file():
            continue

        content = path.read_text()
        restored = content.replace(old, new)
        if restored != content:
            path.write_text(restored)


def run_docsify(root: Path, docs_port: int) -> int:
    cmd = ["npx", "docsify-cli", "serve", "./docs", "--port", str(docs_port)]
    try:
        return subprocess.call(cmd, cwd=root)
    except KeyboardInterrupt:
        return 130


def main() -> int:
    args = parse_args()
    root = repo_root()

    vite_runner = ViteRunner(root, args.vite_port)
    touched_files: list[Path] = []
    prototype_base_url = ""

    try:
        vite_url = vite_runner.start()
        prototype_base_url = f"{vite_url.rstrip('/')}/prototype.html"

        touched_files = rewrite_docs_iframe_sources(
            root,
            old=PROTOTYPE_TOKEN,
            new=prototype_base_url,
        )

        print(f"\nPrototype URL: {prototype_base_url}")
        print(f"Docs URL: http://localhost:{args.docs_port}")
        print("Touched files:")
        if touched_files:
            for path in touched_files:
                print(path.relative_to(root))
        else:
            print("(none)")

        print("Press Ctrl+C to stop and restore temporary localhost replacements.\n")

        docsify_code = run_docsify(root, args.docs_port)
        if docsify_code not in (0, 130):
            return docsify_code
        return 0
    finally:
        if prototype_base_url and touched_files:
            restore_docs_iframe_sources(
                touched_files,
                old=prototype_base_url,
                new=PROTOTYPE_TOKEN,
            )

        vite_runner.stop()


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        raise SystemExit(1)
