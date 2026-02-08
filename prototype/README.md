# Prototype Workspace

This folder contains source code for documentation prototypes.

## Module Layout

- `src/main.tsx` — app bootstrap only
- `src/ShellApp.tsx` — hash routing + shell UI
- `src/ShellApp.module.css` — shell-specific styles
- `src/prototypes/registry.ts` — single registry of available prototypes
- `src/prototypes/<name>.tsx` — one file per prototype screen
- `src/prototypes/<name>.module.css` — per-prototype styles
- `src/styles/tokens.css` — design tokens
- `src/styles/design-system.css` — shared design system classes (`ds-*`)
- `src/styles/base.css` — global base/reset
- `src/styles/index.css` — global style entry imports
- `prototype.html` — shell entrypoint for dev/build

## Commands

```bash
python3 ./scripts/dev-docs-prototype.py
```

From repo root: starts Vite prototype server + Docsify in one process, temporarily rewrites docs iframe sources to localhost prototype URL, and restores files when stopped.

```bash
bun run dev
```

Starts the Vite dev server and opens `/prototype.html`.
Changes are applied with HMR immediately in the prototype page.

```bash
bun run build:shell
```

Builds a single-file shell into:

`../docs/_media/prototype.html`

```bash
bun run build:shell:watch
```

Runs shell build in watch mode and keeps `docs/_media/prototype.html` updated.
If this file is embedded in docs via `iframe`, refresh the docs page (or the iframe) to see updates.

## Iframe Update Behavior

- `build:shell:watch` updates the generated file on disk continuously.
- Docs `iframe` using `./_media/prototype.html#<slug>` does not always hot-reload automatically.
- `python3 ./scripts/dev-docs-prototype.py` temporarily rewrites iframe sources to the live Vite URL and reverts them on exit.
- `./scripts/pre-commit-check.py` fails if a committed docs iframe points to localhost for `prototype.html`.

## Hash Routing

- `/prototype.html` → Prototype Hub (list of all prototypes)
- `/prototype.html#sandbox` → Sandbox prototype
- `/prototype.html#<unknown>` → Not Found screen (without Hub links)

## Add a New Prototype

1. Create `src/prototypes/<slug>.tsx` and export one React component.
2. If custom styles are needed, add `src/prototypes/<slug>.module.css`.
3. Register it in `src/prototypes/registry.ts` with `slug`, `title`, and `description`.
4. Reuse shared `ds-*` classes from `src/styles/design-system.css` when possible.
5. Run `bun run build:shell` to regenerate `../docs/_media/prototype.html`.
6. Use it in docs iframe URL as `./_media/prototype.html#<slug>`.
