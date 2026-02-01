# Item

A clothing piece in the user's digital wardrobe. Item is the central entity of the system — most features and flows revolve around creating, viewing, and organizing items.

## Properties

- **Photo** — user-provided photo of the clothing piece. Background is removed by [Background Removal](../features/background-removal.md).
- **Type** — specific kind of clothing (e.g. t-shirt, jeans, dress).
- **Category** — high-level grouping. See [Category](./category.md).
- **Color** — dominant color of the garment.
- **Brand** — brand of the garment.
- **Collections** — user-defined groupings for organization. See [Collection](./collection.md).

All attributes except Collections are auto-detected by [AI Recognition](../features/ai-recognition.md) on creation and can be edited by the user.

> [!NOTE]
> **Undefined — requires clarification:**
> - Full list of remaining Item properties (name, season, size, notes, etc.).
> - Whether Type is a free-form string or a fixed enum.
> - How the processed (background-removed) image relates to the original photo — are both stored?
> - Whether Item has a creation date, last-modified date, or other metadata.
> - What happens when an Item is deleted but it belongs to one or more [Outfits](./outfit.md).

## Processing Status

When a new item is added via the [Add Item](../flows/add-item.md) flow, it goes through a processing pipeline. The item appears in the wardrobe immediately, and its status is visible to the user:

1. **Processing** — [Background Removal](../features/background-removal.md) is running on-device.
2. **Uploading** — the processed photo is being uploaded.
3. **Classifying** — [AI Recognition](../features/ai-recognition.md) is detecting attributes.
4. **Classified** — all processing is done; the item is fully ready for viewing and editing.

The user can interact with other items and navigate the app while processing runs in the background.

## Relationships

- An Item belongs to one [User](./user.md).
- An Item belongs to one [Category](./category.md).
- An Item can have zero or more [Collections](./collection.md).
- An Item can appear in zero or more [Outfits](./outfit.md).

## Business Rules

- An Item must have a photo.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can an Item exist without a Category?
> - Is there a limit on how many Collections an Item can have?
> - Can an Item appear multiple times in the same Outfit?
