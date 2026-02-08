# AGENTS.md

When working directory is the repo root, run `git` and other commands directly, without `-C` or `cd`.

This repository contains product documentation for ROBE — a mobile application for digital wardrobe management.

## Project

@README.md

## Product Overview

@docs/README.md


## Documentation Structure

```
.agent/
├── AGENTS.md          # Agent instructions (source of truth)
├── prompts/           # Prompts for GitHub Actions workflows
└── skills/            # Agent skills
docs/
├── README.md          # Product vision and overview
├── _media/
│   └── prototype.html # Generated prototype shell for docs embeds
├── _sidebar.md       # Docsify navigation (keep in sync with content)
├── constraints/      # Non-functional requirements
├── domain/           # Data model and business rules
├── features/         # Product capabilities
└── flows/            # User journeys
prototype/            # React/Tailwind source for documentation prototypes
scripts/
├── dev-docs-prototype.py # Combined docs + prototype local dev runner
└── pre-commit-check.py # Pre-commit checks (links + iframe localhost guard)
```

### constraints/

Describes non-functional requirements and system-level constraints: platform, localization, data sync strategy, and other cross-cutting concerns.

Focus on: what the system supports, what it does not, and what is yet to be decided.

### domain/

Describes entities that exist in the system: what data they hold, how they relate to each other, what rules govern them.

Examples: Item (clothing piece), Outfit (combination of items), Category hierarchy, Collections.

Focus on: attributes, relationships, constraints, edge cases (what happens when item is deleted but belongs to outfit?).

### features/

Describes what the product can do. Each feature is a distinct capability that delivers value to the user.

Examples: AI classification, wardrobe filtering, outfit collage.

Focus on: purpose, behavior, UI elements, error handling.

### flows/

Describes how users accomplish their goals. A flow spans multiple features and shows the complete journey.

Examples: adding first item, creating an outfit for an occasion, organizing wardrobe after seasonal cleanup.

Focus on: trigger, steps, decision points, success/failure outcomes.

## Writing Guidelines

- **Abstract from tech stack.** Documentation describes *what* the product does, not *how* it is implemented. Do not mention specific technologies, frameworks, databases, or APIs. Write so that the documentation remains valid regardless of the underlying implementation.

- **Single source of truth.** Define each concept in exactly one place. Other files that mention it should link to the source rather than repeat the description. For example, a flow step should say `[Collections](../domain/collection.md)` instead of re-explaining what a collection is. This keeps updates localized to one file.
- One file = one concept. Split when a file grows beyond its scope.
- Use relative paths with `.md` extension for cross-links: `[Category](./category.md)`, `[AI Classification](../features/ai-classification.md)`. Paths are relative to the file containing the link.
- Keep `_sidebar.md` updated — it defines site navigation.
- Write for someone who has never seen the app. Be specific enough that a developer could implement from the description.
- **Mark unknowns explicitly.** When something is unclear or undefined, add a `> [!NOTE]` block rather than guessing. These blocks are knowledge gap markers across the documentation. When new information resolves a `> [!NOTE]` block, update or remove it.

## Prototype System

This repository includes a prototype shell workflow:

- Source files live in `prototype/` and are the only files that should be edited manually for prototype behavior/UI.
- Generated output is `docs/_media/prototype.html`.
- `docs/_media/prototype.html` is committed to git and used by docs embeds (`iframe`), but should not be edited by hand.
- Prototype routing is hash-based:
  - `prototype.html` (no hash) shows Prototype Hub.
  - `prototype.html#<slug>` shows a specific prototype screen.
  - `prototype.html#<unknown>` shows a not-found screen and must not expose the Hub/prototype list.

### Prototype Workflow For Agents

When working with prototypes, follow this order:

1. Make changes in `prototype/src/**` (and only config files in `prototype/` if needed).
2. Keep styles modular:
   - shared styles/tokens in `prototype/src/styles/**`
   - screen-specific styles in `prototype/src/ShellApp.module.css`
   - per-prototype styles in `prototype/src/prototypes/<slug>.module.css`
3. For a new prototype, create `prototype/src/prototypes/<slug>.tsx` and register it in `prototype/src/prototypes/registry.ts`.
4. Reuse shared design system classes from `prototype/src/styles/design-system.css` (`ds-*`) before adding new custom CSS.
5. Avoid dumping all CSS into one file; prefer module-local CSS and only promote truly shared patterns to design system files.
6. Run `bun run --cwd prototype build:shell` to regenerate `docs/_media/prototype.html`.
7. If docs need to embed a screen, use `iframe` URL format `./_media/prototype.html#<slug>`.
8. Commit both source changes and regenerated `docs/_media/prototype.html` together.

### Prototype Commands

- Combined local dev (docs + prototypes + temporary localhost iframe rewrites): `python3 ./scripts/dev-docs-prototype.py`
- Dev server (HMR): `bun run --cwd prototype dev`
- One-time generation: `bun run --cwd prototype build:shell`
- Watch generation: `bun run --cwd prototype build:shell:watch`
- Codex environment buttons:
  - `Run` — start combined docs + prototype dev flow (`python3 ./scripts/dev-docs-prototype.py`)
  - `Build Prototype Shell` — generate committed `docs/_media/prototype.html`
  - `Watch Prototype Shell` — continuous shell rebuild (`bun run --cwd prototype build:shell:watch`)

### Prototype Iframe Behavior

- `build:shell:watch` keeps `docs/_media/prototype.html` fresh, but embedded docs iframes may need a manual refresh to reflect file changes.
- `python3 ./scripts/dev-docs-prototype.py` temporarily rewrites `./_media/prototype.html` iframe sources to live Vite URL and restores files on exit.
- `./scripts/pre-commit-check.py` blocks commits where an iframe prototype source points to localhost.

## Branch Naming

```
docs/<topic>    — documentation changes
auto/<topic>    — scripts, CI/CD, automation
fix/<topic>     — fixes (typos, broken links, script bugs)
```

Examples: `docs/add-onboarding-guide`, `auto/lint-markdown`, `fix/broken-links`.

Each logically distinct change should be submitted as a separate pull request. Do not combine unrelated changes in one PR.

## Pre-Commit Checklist

Before committing, verify that all related parts of the documentation are consistent with the change:

- `_sidebar.md` reflects any added, removed, or renamed pages.
- `.agent/AGENTS.md` documentation structure tree is up to date.
- Run `./scripts/pre-commit-check.py` (validates markdown links and forbids localhost prototype iframe URLs).
- `./scripts/pre-commit-check.py` auto-rebuilds and stages `docs/_media/prototype.html` when `prototype/**` changes are detected.
- Existing docs that reference the changed concept are updated if needed.
- Do not hand-edit `docs/_media/prototype.html`; regenerate it from `prototype/` only.

## Pull Request Merge

When asked to merge a PR, wait for all checks to finish (`gh pr checks <number> --watch`, timeout 10 min), then check for feedback using `gh api repos/{owner}/{repo}/pulls/{number}/reviews` and `gh api repos/{owner}/{repo}/pulls/{number}/comments`:

- **All checks pass, no feedback (or only approved reviews)** — merge with `--squash`.
- **Reviews with comments or requested changes exist** — read them, summarize for the user, and ask whether to apply changes or merge as-is. If changes are applied, push and wait for checks to pass again before merging.
- **Checks fail** — report the failure and ask how to proceed.

After a successful merge, delete the local branch (`git branch -d <branch>`) to keep the working copy clean.

## Docsify Setup

Local development:
```bash
npx docsify-cli serve docs
```
