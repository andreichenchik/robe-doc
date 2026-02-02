# Add Item

The flow of adding new clothing pieces to the user's wardrobe. A photo is the starting point for every item — it serves as the visual basis the user interacts with.

## Trigger

User initiates "add item" action from the wardrobe screen.

## Photo Selection

The user provides photos in one of two ways:

- **Gallery** — select one or more photos from the device photo library. The user confirms the selection, and each photo becomes a separate [Item](../domain/item.md).
- **Camera** — take a single photo. The user can review the result and retake if needed. When the device is held at an angle far from both horizontal and vertical, an overlay dims the screen to hint that the phone should be held upright or flat. The overlay does not block capture.

Photo selection is the only decision point in the flow. Once the user confirms, items are created immediately and the process cannot be cancelled.

## Processing Pipeline

After confirmation, each item appears in the wardrobe right away with a visible [processing status](../domain/item.md#processing-status). The entire pipeline runs automatically without user intervention:

1. **Background removal** — [Background Removal](../features/background-removal.md) strips the background and produces a transparent cutout image.
2. **Upload** — the processed photo is uploaded.
3. **AI classification** — [AI Classification](../features/ai-classification.md) detects type, color, and brand, and suggests [Collections](../domain/collection.md). [Category](../domain/category.md) is derived from the detected type.

When multiple photos are selected from the gallery, all items are processed in parallel.

There is no confirmation screen for recognition results. Attributes are applied automatically as they become available. The user can edit them later from the item screen.

## Result

New items appear in the wardrobe with clean cutout photos and populated attributes.

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| AI classification fails | *Undefined* |
| Background removal fails | *Undefined* |
| Network unavailable | *Undefined* |
| Photo is not a clothing item | *Undefined* |
