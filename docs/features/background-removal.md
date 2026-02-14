# Background Removal

Automatically removes the background from a clothing photo, producing a clean cutout image with a transparent background.

## Purpose

Isolate the clothing piece from its surroundings so it can be displayed consistently in the wardrobe and used on the [outfit collage](./outfit-collage.md).

## Behavior

- Uses the item's original photo as input and outputs a transparent cutout.
- Executes as the first step of the [Add Item](../flows/add-item.md) processing pipeline.
- Expects one clothing piece per photo.
- If a photo contains multiple clothing pieces, the output may include a merged cutout treated as a single [Item](../domain/item.md). Current implementation gap: [Current Limitations](../constraints/current-limitations.md#multi-item-photo-segmentation-is-unreliable).
- If cutout generation fails (including "no clothing detected"), the item keeps the original photo, moves to **Processing Failed** status, and offers retry.

## Retry

- Background removal can be retried from the item after failure.
- Retry always uses the stored original photo, not the previous cutout.
- Current implementation gap for failure/retry UX: [Current Limitations](../constraints/current-limitations.md#background-removal-failure-ux-is-incomplete).
