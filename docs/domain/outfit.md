# Outfit

A combination of [Items](./item.md) arranged together to represent a look. Users create outfits by placing items on an interactive [collage](../features/outfit-collage.md).

## Properties

- **Collage data** — positions, scales, and rotations of items on the collage. Uses normalized coordinates for multi-screen support.
- **Items** — the clothing pieces included in this outfit. See [Item](./item.md).
- **Photo** — an optional user-taken photo of the outfit being worn (e.g. a mirror selfie). Separate from the collage.
- **Collections** — user-defined groupings for organization. See [Collection](./collection.md).

> [!NOTE]
> **Undefined — requires clarification:**
> - Does an Outfit have a name or title?
> - Is there an Outfit description or notes field?
> - What is the minimum number of items in an Outfit?
> - What metadata is stored (creation date, etc.)?
> - Can an Outfit have multiple photos?
> - Is the photo taken within the app or imported from the gallery?

## Relationships

- An Outfit belongs to one [User](./user.md).
- An Outfit contains one or more [Items](./item.md).
- An Outfit can belong to zero or more [Collections](./collection.md).

## Collage Data Model

Each item on the collage has a position stored in normalized coordinates (0.0–1.0), allowing consistent rendering across different screen sizes.

> [!NOTE]
> **Undefined — requires clarification:**
> - Exact structure of collage item data (position, scale, rotation, z-index).
> - How collage state is serialized and stored.
> - Whether there's a limit on items per collage.
