# Edit Item

The flow of editing an existing [Item](../domain/item.md) in the user's wardrobe.

## Trigger

User taps an item in the wardrobe to open the item editing screen.

## Editable Properties

The user can edit mutable [Item](../domain/item.md#properties) attributes:

- **Type** ([Type](../domain/type.md))
- **Color** ([Color](../domain/color.md))
- **Brand** ([Brand](../domain/brand.md))
- **Hidden** — toggle whether the item appears in the wardrobe.
- **Favorite** — toggle favorite status.
- **Collections** — add or remove [Collections](../domain/collection.md).

Name behavior follows [Item](../domain/item.md#properties): it auto-updates when type, color, or brand changes.

## Photo Replacement

The user can replace the item's photo. When a new photo is provided:

1. [Background Removal](../features/background-removal.md) runs on the new photo.
2. [AI Classification](../features/ai-classification.md) does **not** run — the user is editing a known item, so existing attributes are preserved.

The user can manually adjust attributes after replacing the photo if needed.

## Result

Changes are saved and reflected immediately in the wardrobe and any [Outfits](../domain/outfit.md) that include the item.

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| Background removal fails on new photo | *Undefined* |
| Network unavailable during photo upload | *Undefined* |
