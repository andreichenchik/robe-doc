# CLAUDE.md

When working directory is the repo root, run `git` and other commands directly, without `-C` or `cd`.

This repository contains product documentation for ROBE — a mobile application for digital wardrobe management.

## Project

@README.md

## Product Overview

@docs/README.md


## Documentation Structure

```
docs/
├── README.md          # Product vision and overview
├── _sidebar.md       # Docsify navigation (keep in sync with content)
├── constraints/      # Non-functional requirements
├── domain/           # Data model and business rules
├── features/         # Product capabilities
└── flows/            # User journeys
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

Examples: item recognition, wardrobe filtering, outfit collage.

Focus on: purpose, behavior, UI elements, error handling.

### flows/

Describes how users accomplish their goals. A flow spans multiple features and shows the complete journey.

Examples: adding first item, creating an outfit for an occasion, organizing wardrobe after seasonal cleanup.

Focus on: trigger, steps, decision points, success/failure outcomes.

## Writing Guidelines

- **Abstract from tech stack.** Documentation describes *what* the product does, not *how* it is implemented. Do not mention specific technologies, frameworks, databases, or APIs. Write so that the documentation remains valid regardless of the underlying implementation.

- **Single source of truth.** Define each concept in exactly one place. Other files that mention it should link to the source rather than repeat the description. For example, a flow step should say `[Collections](../domain/collection.md)` instead of re-explaining what a collection is. This keeps updates localized to one file.
- One file = one concept. Split when a file grows beyond its scope.
- Use relative paths with `.md` extension for cross-links: `[Category](./category.md)`, `[AI Recognition](../features/ai-recognition.md)`. Paths are relative to the file containing the link.
- Keep `_sidebar.md` updated — it defines site navigation.
- Write for someone who has never seen the app. Be specific enough that a developer could implement from the description.
- **Mark unknowns explicitly.** When something is unclear or undefined, add a `> [!NOTE]` block rather than guessing. These blocks are knowledge gap markers across the documentation. When new information resolves a `> [!NOTE]` block, update or remove it.

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
- `CLAUDE.md` documentation structure tree is up to date.
- Cross-links in other files still point to valid targets.
- Existing docs that reference the changed concept are updated if needed.

## Pull Request Merge

When asked to merge a PR, wait for all checks to finish (`gh pr checks <number> --watch`, timeout 10 min), then check for feedback using `gh api repos/{owner}/{repo}/pulls/{number}/reviews` and `gh api repos/{owner}/{repo}/pulls/{number}/comments`:

- **All checks pass, no feedback (or only approved reviews)** — merge with `--squash`.
- **Reviews with comments or requested changes exist** — read them, summarize for the user, and ask whether to apply changes or merge as-is.
- **Checks fail** — report the failure and ask how to proceed.

## Docsify Setup

Local development:
```bash
npx docsify-cli serve docs
```