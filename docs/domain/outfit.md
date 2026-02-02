# Outfit

A combination of [Items](./item.md) arranged together to represent a look. Users create outfits by placing items on an interactive [collage](../features/outfit-collage.md).

## Properties

- **Name** — optional, empty by default. The user can set it manually. Unlike [Item](./item.md), there is nothing to auto-generate a name from.
- **Collage data** — positions, scales, and rotations of items on the collage. Uses normalized coordinates for multi-screen support. See [Collage Data Model](#collage-data-model).
- **Items** — the clothing pieces included in this outfit. An outfit must contain at least one item. See [Item](./item.md).
- **Photo** — an optional user-taken photo of the outfit being worn (e.g. a mirror selfie). Currently a single photo, separate from the collage.
- **Draft** — when enabled, marks the outfit as a work in progress. Drafts appear in the outfit list alongside regular outfits by default. A filter allows showing only drafts.
- **Favorite** — marks the outfit as a favorite.
- **Collections** — user-defined groupings for organization. See [Collection](./collection.md).

> [!NOTE]
> **Undefined — requires clarification:**
> - Is there an Outfit description or notes field?
> - What metadata is stored (creation date, etc.)?
> - Is the photo taken within the app or imported from the gallery?
> - Could the photo property expand to a gallery (multiple photos per outfit) in the future?

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

> [!NOTE]
> **Undefined — requires clarification:**
> - How collage state is serialized and stored.
> - Whether there is a limit on items per collage.

## Business Rules

- An Outfit must contain at least one Item.
- Name is optional (empty by default).
