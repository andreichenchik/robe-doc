# Item

A piece in the user's digital wardrobe. Item is the central entity of the system — most features and flows revolve around creating, viewing, and organizing items.

## Properties

- **Photo** — user-provided photo of the piece. Background is removed by [Background Removal](../features/background-removal.md).
- **Name** — auto-generated from properties following the pattern "{color} {type} {brand}" (e.g. "Multicolor Skirt Chanel"). Updates automatically when properties change.
- **Type** — specific kind of clothing or accessory (e.g. t-shirt, jeans, dress). Type comes from a predefined category-type hierarchy. See [Category](./category.md).
- **Color** — dominant color of the piece. Selected from a predefined fixed set of colors.
- **Brand** — brand of the piece. Selected from a predefined list; users can also add custom brands.
- **Hidden** — when enabled, the item does not appear in the wardrobe or other views.
- **Favorite** — marks the item as a favorite.
- **Collections** — user-defined groupings for organization. See [Collection](./collection.md).

All attributes except Hidden and Favorite are auto-detected or suggested by [AI Classification](../features/ai-classification.md) on creation and can be edited by the user.

> [!NOTE]
> **Undefined — requires clarification:**
> - How the processed (background-removed) image relates to the original photo — are both stored?
> - Whether Item has a creation date, last-modified date, or other metadata.
> - What happens when an Item is deleted but it belongs to one or more [Outfits](./outfit.md).

## Processing Status

When a new item is added via the [Add Item](../flows/add-item.md) flow, it goes through a processing pipeline. The item appears in the wardrobe immediately, and its status is visible to the user:

1. **Processing** — [Background Removal](../features/background-removal.md) is running.
2. **Uploading** — the processed photo is being uploaded.
3. **Classifying** — [AI Classification](../features/ai-classification.md) is detecting attributes.
4. **Classified** — all processing is done; the item is fully ready for viewing and editing.

The user can interact with other items and navigate the app while processing runs in the background.

## Relationships

- An Item belongs to one [User](./user.md).
- An Item has one Type, and that Type belongs to a [Category](./category.md). Category is derived from Type, not stored directly on the Item.
- An Item can have zero or more [Collections](./collection.md).
- An Item can appear in zero or more [Outfits](./outfit.md).

## Business Rules

- An Item must have a photo.

> [!NOTE]
> **Undefined — requires clarification:**
> - Is there a limit on how many Collections an Item can have?
> - Can an Item appear multiple times in the same Outfit?
