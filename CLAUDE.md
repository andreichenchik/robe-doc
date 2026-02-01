# CLAUDE.md

This repository contains product documentation for ROBE — a mobile application for digital wardrobe management.

## Product Overview

The app helps users solve two everyday problems:

**"What should I wear today?"** — The outfits screen gives users a library of their saved looks. Each Outfit can include a collage showing how the pieces go together and a photo of the outfit being worn, so the user can quickly pick a look and go.

**"What can I put together?"** — When users want to create something new, the wardrobe acts as a visual browser of everything they own. Quick scanning and filtering by category, type, or color lets users see what is available and find combinations they haven't tried.

Both problems are wardrobe management at their core. The app takes an AI-first approach to remove friction — from recognizing clothing in a photo to organizing and browsing items — so that managing a wardrobe feels effortless.

### How It Works

- **Wardrobe management** — add, edit, and organize clothing items. AI recognition detects clothing type, category, and attributes from a photo, so adding items is fast.
- **Outfit creation** — combine items into outfits using an interactive collage and capture a photo of the look.
- **Filtering & search** — find items by category, type, color, and tags to quickly browse what you have.


## Documentation Structure

```
docs/
├── README.md          # Landing page with product vision
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

Examples: Item (clothing piece), Outfit (combination of items), Category hierarchy, Tags.

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

- One file = one concept. Split when a file grows beyond its scope.
- Use absolute paths from docs root without `.md` extension for cross-links: `[Item](/domain/item)`, `[AI Recognition](/features/ai-recognition)`.
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

## Docsify Setup

Local development:
```bash
npx docsify-cli serve docs
```