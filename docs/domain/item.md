# Item

A clothing piece in the user's digital wardrobe. Item is the central entity of the system — most features and flows revolve around creating, viewing, and organizing items.

## Properties

- **Photo** — user-provided photo of the clothing piece. Background is removed automatically after upload.
- **Type** — specific kind of clothing (e.g. t-shirt, jeans, sneakers). Detected by [AI Recognition](/features/ai-recognition).
- **Category** — high-level grouping such as tops, bottoms, or shoes. See [Category](/domain/category). Detected by AI or assigned manually.
- **Color** — dominant color of the garment. Detected automatically.
- **Tags** — user-defined labels for organization. See [Tag](/domain/tag).

> [!NOTE]
> **Undefined — requires clarification:**
> - Full list of Item properties (name, brand, season, size, notes, etc.).
> - Whether Type is a free-form string or a fixed enum.
> - How the processed (background-removed) image relates to the original photo — are both stored?
> - Whether Item has a creation date, last-modified date, or other metadata.
> - What happens when an Item is deleted but it belongs to one or more [Outfits](/domain/outfit).

## Relationships

- An Item belongs to one [User](/domain/user).
- An Item belongs to one [Category](/domain/category).
- An Item can have zero or more [Tags](/domain/tag).
- An Item can appear in zero or more [Outfits](/domain/outfit).

## Business Rules

- An Item must have a photo.
- Type and Category are auto-detected by AI on creation, but can be edited by the user.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can an Item exist without a Category?
> - Is there a limit on how many Tags an Item can have?
> - Can an Item appear multiple times in the same Outfit?
