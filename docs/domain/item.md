# Item

A clothing piece in the user's digital wardrobe. Item is the central entity of the system — most features and flows revolve around creating, viewing, and organizing items.

## Properties

- **Photo** — user-provided photo of the clothing piece. Background is removed automatically by [AI Recognition](../features/ai-recognition.md).
- **Type** — specific kind of clothing. Detected by [AI Recognition](../features/ai-recognition.md).
- **Category** — high-level grouping. See [Category](./category.md). Detected by [AI Recognition](../features/ai-recognition.md) or assigned manually.
- **Color** — dominant color of the garment. Detected by [AI Recognition](../features/ai-recognition.md).
- **Collections** — user-defined groupings for organization. See [Collection](./collection.md).

> [!NOTE]
> **Undefined — requires clarification:**
> - Full list of Item properties (name, brand, season, size, notes, etc.).
> - Whether Type is a free-form string or a fixed enum.
> - How the processed (background-removed) image relates to the original photo — are both stored?
> - Whether Item has a creation date, last-modified date, or other metadata.
> - What happens when an Item is deleted but it belongs to one or more [Outfits](./outfit.md).

## Relationships

- An Item belongs to one [User](./user.md).
- An Item belongs to one [Category](./category.md).
- An Item can have zero or more [Collections](./collection.md).
- An Item can appear in zero or more [Outfits](./outfit.md).

## Business Rules

- An Item must have a photo.
- Type and Category are auto-detected by AI on creation, but can be edited by the user.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can an Item exist without a Category?
> - Is there a limit on how many Collections an Item can have?
> - Can an Item appear multiple times in the same Outfit?
