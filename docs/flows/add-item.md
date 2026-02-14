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

After confirmation, each item appears in the wardrobe right away with a visible [processing status](../domain/item.md#processing-status). The pipeline runs automatically without user intervention:

1. **Item creation** — item is created immediately with the original photo.
2. **Background removal** — [Background Removal](../features/background-removal.md) attempts cutout generation.
3. **Upload/Sync** — the active photo variant is uploaded/synced.
4. **Classification** — [AI Classification](../features/ai-classification.md) runs (cutout preferred, original fallback).

When multiple photos are selected from the gallery, all items are processed in parallel.

There is no confirmation screen for recognition results. Attributes are applied automatically as they become available. The user can edit them later from the item screen.

## Recovery Actions

Recovery is user-initiated and is not part of the automatic processing pipeline.

- User can retry [Background Removal](../features/background-removal.md) after **Processing Failed**.
- User can retry [AI Classification](../features/ai-classification.md) after **Classification Failed** or **Classification Deferred**.

## Result

New items appear in the wardrobe immediately. Depending on processing outcome, an item may finish with a cutout and recognized attributes, or remain with failure/deferred statuses until retried.

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| AI classification fails | Item moves to **Classification Failed**. No low-confidence attributes are auto-applied. User can retry classification. |
| Background removal fails | Item keeps original photo and moves to **Processing Failed**. User can retry background removal. |
| Network unavailable | Background removal still runs. Classification moves to **Classification Deferred** and resumes when network is available. |
| Photo is not a clothing item | Background removal typically fails or returns unusable output; item remains with original photo and requires retry/replacement by user. |
| Photo contains multiple clothing items | Output may be a merged cutout treated as one item. Current implementation gap: [Current Limitations](../constraints/current-limitations.md#multi-item-photo-segmentation-is-unreliable). |
