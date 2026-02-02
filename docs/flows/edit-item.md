# Edit Item

The flow of editing an existing [Item](../domain/item.md) in the user's wardrobe.

## Trigger

User taps an item in the wardrobe to open the item editing screen.

## Editable Properties

All [Item](../domain/item.md) properties can be modified:

- **Type** — select from the predefined category-type hierarchy. Changing the type also changes the derived [Category](../domain/category.md).
- **Color** — select from the predefined color set.
- **Brand** — select from the predefined brand list or add a custom brand.
- **Hidden** — toggle whether the item appears in the wardrobe.
- **Favorite** — toggle favorite status.
- **Collections** — add or remove [Collections](../domain/collection.md).

The item **Name** auto-updates when type, color, or brand changes.

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
