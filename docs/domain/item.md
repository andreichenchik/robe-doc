# Item

A piece in the user's digital wardrobe. Item is the central entity of the system — most features and flows revolve around creating, viewing, and organizing items.

## Properties

- **Photo assets** — each item keeps two image variants:
  - **Original photo** — source image from camera or gallery. Preserved so processing can be retried.
  - **Cutout photo** — background-removed image used for wardrobe and collage rendering.
  - Current implementation gap: [Current Limitations](../constraints/current-limitations.md#original-photo-preservation-is-incomplete).
- **Name** — auto-generated from properties following the pattern "{color} {type} {brand}" (e.g. "Multicolor Skirt Chanel"). Updates automatically when properties change.
- **Type** — specific kind of clothing or accessory (e.g. t-shirt, jeans, dress). Type comes from the predefined [Type](./type.md) catalog and determines [Category](./category.md).
- **Color** — dominant color of the piece. Selected from the predefined [Color](./color.md) catalog.
- **Brand** — brand of the piece. Selected from the predefined [Brand](./brand.md) catalog. Custom brand creation is target behavior and not yet implemented. See [Current Limitations](../constraints/current-limitations.md#custom-brands-not-yet-supported).
- **Hidden** — when enabled, the item does not appear in the wardrobe or other views.
- **Favorite** — marks the item as a favorite.
- **Collections** — user-defined labels assigned to items. See [Collection](./collection.md).
- **Processing status** — lifecycle state used while a newly added item is being processed. See [Processing Status](#processing-status).

Some attributes are auto-detected by [AI Classification](../features/ai-classification.md) on creation. All attributes can be edited by the user.

> [!NOTE]
> **Undefined — requires clarification:**
> - Whether Item has a creation date, last-modified date, or other metadata.

## Processing Status

When a new item is added via the [Add Item](../flows/add-item.md) flow, it goes through a processing pipeline. The item appears in the wardrobe immediately, and its status is visible to the user.
Not every item passes through every status: failure or deferred states can replace the next happy-path step.

1. **Processing** — [Background Removal](../features/background-removal.md) is running.
2. **Processing Failed** — cutout generation failed; item keeps using the original photo until processing is retried.
3. **Uploading** — the current active photo variant is being uploaded/synced.
4. **Classifying** — [AI Classification](../features/ai-classification.md) is detecting attributes.
5. **Classification Deferred** — classification is waiting for network availability.
6. **Classification Failed** — classification ended with no reliable auto-fill result.
7. **Classified** — processing is complete; recognized attributes are applied and item is fully ready for review/editing.

The user can interact with other items and navigate the app while processing runs in the background.
Current implementation gaps for recovery states are tracked in [Current Limitations](../constraints/current-limitations.md#classification-recovery-flow-is-incomplete) and [Current Limitations](../constraints/current-limitations.md#background-removal-failure-ux-is-incomplete).

## Relationships

- An Item belongs to one [User](./user.md).
- An Item has one Type, and that Type belongs to a [Category](./category.md). Category is derived from Type, not stored directly on the Item.
- An Item can have zero or more [Collections](./collection.md).
- An Item can appear in zero or more [Outfits](./outfit.md).

## Business Rules

- An Item must have a photo.
- The original photo is preserved as the source for reprocessing attempts.
- [Background Removal](../features/background-removal.md) and [AI Classification](../features/ai-classification.md) can be retried independently.
- Outfit-related constraints for Item usage and deletion are defined in [Outfit](./outfit.md#business-rules).
- There is no limit on how many [Collections](./collection.md) can be assigned to an Item.
