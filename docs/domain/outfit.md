# Outfit

A combination of [Items](item.md) arranged together to represent a look. Users create outfits by placing items on an interactive [canvas](../features/outfit-canvas.md).

## Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| Canvas data | CanvasState | Positions, scales, and rotations of items on the canvas. Uses normalized coordinates for multi-screen support. |
| Items | [Item](item.md)[] | The clothing pieces included in this outfit. |

> [!NOTE]
> **Undefined — requires clarification:**
> - Does an Outfit have a name or title?
> - Can an Outfit have a cover photo / generated collage image?
> - Is there an Outfit description or notes field?
> - Does Outfit belong to a collection? (README mentions "outfit collections".)
> - What is the minimum number of items in an Outfit?
> - What metadata is stored (creation date, etc.)?

## Relationships

- An Outfit belongs to one [User](user.md).
- An Outfit contains one or more [Items](item.md).
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
