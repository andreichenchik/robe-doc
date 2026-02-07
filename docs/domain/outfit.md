# Outfit

A combination of [Items](./item.md) arranged together to represent a look. Users create outfits by placing items on an interactive [collage](../features/outfit-collage.md).

## Properties

- **Name** — optional, empty by default. The user can set it manually. Unlike [Item](./item.md), there is nothing to auto-generate a name from.
- **Description/Notes** — not supported. Outfit has only a name as editable text.
- **Created at** — timestamp when the outfit was created.
- **Updated at** — timestamp of the latest outfit update.
- **Collage data** — positions, scales, and rotations of items on the collage. Uses normalized coordinates for multi-screen support. See [Collage Data Model](#collage-data-model).
- **Items** — the clothing pieces included in this outfit. An outfit must contain at least one item. See [Item](./item.md).
- **Photos** — optional photos of the outfit being worn (e.g. mirror selfies). Separate from the collage. Photos can be captured in-app or imported from the gallery. See [Current Limitations](../constraints/current-limitations.md) for implementation status.
- **Draft** — when enabled, marks the outfit as a work in progress. Drafts appear in the outfit list alongside regular outfits by default. A filter allows showing only drafts.
- **Favorite** — marks the outfit as a favorite.
- **Collections** — user-defined labels assigned to outfits. See [Collection](./collection.md).

## Relationships

- An Outfit belongs to one [User](./user.md).
- An Outfit contains one or more [Items](./item.md).
- An Outfit can belong to zero or more [Collections](./collection.md).

## Collage Data Model

Each item on the collage stores the following data:

- **Position** — normalized coordinates (0.0–1.0) for consistent rendering across screen sizes.
- **Scale** — size of the item on the collage.
- **Rotation** — rotation angle of the item.
- **Z-order** — implicit layering based on interaction order. The most recently touched item appears on top; items touched earlier sit further back. There is no explicit bring-to-front or send-to-back control.
- **Item limit** — no maximum number of items per collage.

> [!NOTE]
> **Undefined — requires clarification:**
> - How collage state is serialized and stored.

## Business Rules

- An Outfit must contain at least one [Item](./item.md).
- Name is optional (empty by default).
- The same [Item](./item.md) cannot appear more than once in the same Outfit.
- If an [Item](./item.md) is deleted, it is removed from all Outfits that contain it.
- If an Outfit has no remaining [Items](./item.md) after Item deletion, the Outfit is deleted automatically.
