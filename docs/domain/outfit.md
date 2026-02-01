# Outfit

A combination of [Items](/domain/item) arranged together to represent a look. Users create outfits by placing items on an interactive [collage](/features/outfit-collage).

## Properties

- **Collage data** — positions, scales, and rotations of items on the collage. Uses normalized coordinates for multi-screen support.
- **Items** — the clothing pieces included in this outfit. See [Item](/domain/item).
- **Photo** — an optional user-taken photo of the outfit being worn (e.g. a mirror selfie). Separate from the collage.

> [!NOTE]
> **Undefined — requires clarification:**
> - Does an Outfit have a name or title?
> - Is there an Outfit description or notes field?
> - Does Outfit belong to a collection?
> - What is the minimum number of items in an Outfit?
> - What metadata is stored (creation date, etc.)?
> - Can an Outfit have multiple photos?
> - Is the photo taken within the app or imported from the gallery?

## Relationships

- An Outfit belongs to one [User](/domain/user).
- An Outfit contains one or more [Items](/domain/item).
- An Outfit may belong to a collection.

> [!NOTE]
> **Undefined — requires clarification:**
> - What is a "collection"? Is it a separate entity or just a tag/label on Outfits?

## Collage Data Model

Each item on the collage has a position stored in normalized coordinates (0.0–1.0), allowing consistent rendering across different screen sizes.

> [!NOTE]
> **Undefined — requires clarification:**
> - Exact structure of collage item data (position, scale, rotation, z-index).
> - How collage state is serialized and stored.
> - Whether there's a limit on items per collage.
