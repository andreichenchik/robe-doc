# CLAUDE.md

This repository contains product documentation for a smart digital wardrobe mobile application.

## Product Overview

A mobile app that helps users manage their clothing inventory and create outfits. Core capabilities:

- **Wardrobe management** — add, edit, organize clothing items
- **AI recognition** — automatic detection of clothing type, category, and attributes when adding items
- **Outfit creation** — combine items into outfits with collages and photos
- **Filtering & search** — find items by category, type, color, etc.


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

Examples: item recognition, wardrobe filtering, outfit collage generation.

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
- When something is unclear or undefined, note it explicitly rather than guessing.

## Branch Naming

```
docs/<topic>    — documentation changes
auto/<topic>    — scripts, CI/CD, automation
fix/<topic>     — fixes (typos, broken links, script bugs)
```

Examples: `docs/add-onboarding-guide`, `auto/lint-markdown`, `fix/broken-links`.

## Docsify Setup

Local development:
```bash
npx docsify-cli serve docs
```