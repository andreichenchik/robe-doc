# Outfit

A combination of [Items](/domain/item) arranged together to represent a look. Users create outfits by placing items on an interactive [canvas](/features/outfit-canvas).

## Properties

- **Canvas data** — positions, scales, and rotations of items on the canvas. Uses normalized coordinates for multi-screen support.
- **Items** — the clothing pieces included in this outfit. See [Item](/domain/item).

> [!NOTE]
> **Undefined — requires clarification:**
> - Does an Outfit have a name or title?
> - Can an Outfit have a cover photo / generated collage image?
> - Is there an Outfit description or notes field?
> - Does Outfit belong to a collection? (README mentions "outfit collections".)
> - What is the minimum number of items in an Outfit?
> - What metadata is stored (creation date, etc.)?

## Relationships

- An Outfit belongs to one [User](/domain/user).
- An Outfit contains one or more [Items](/domain/item).
- An Outfit may belong to a collection.

> [!NOTE]
> **Undefined — requires clarification:**
> - What is a "collection"? Is it a separate entity or just a tag/label on Outfits?

## Canvas Data Model

Each item on the canvas has a position stored in normalized coordinates (0.0–1.0), allowing consistent rendering across different screen sizes.

> [!NOTE]
> **Undefined — requires clarification:**
> - Exact structure of canvas item data (position, scale, rotation, z-index).
> - How canvas state is serialized and stored.
> - Whether there's a limit on items per canvas.
