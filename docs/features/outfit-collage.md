# Outfit Collage

An interactive surface where users arrange [Items](../domain/item.md) to compose an [Outfit](../domain/outfit.md).

## Purpose

Let users visually combine clothing pieces into a look by dragging and positioning item cutouts on a collage. The collage shows how items look together, helping users evaluate the combination before wearing it.

## Viewing Modes

- **Outfit screen** — displays the collage in read-only mode alongside outfit details.
- **Collage editor** — accessed from the outfit screen in the [Edit Outfit](../flows/edit-outfit.md) flow. The user can add, remove, and arrange items (drag, scale, rotate).
- **Outfit list** — each outfit is previewed by its collage image.

## Behavior

- User adds items to the collage from their wardrobe.
- Each item is displayed as a cutout image (background already removed by [Background Removal](./background-removal.md)).
- Items can be repositioned via drag-and-drop.
- Items can be scaled using pinch-to-zoom and rotated.
- Z-order is implicit — touching an item brings it to the top layer. The least recently touched item sits at the bottom. There is no explicit bring-to-front or send-to-back control.
- The collage has a fixed 3.7:5 aspect ratio, consistent across the app.
- Only items are allowed on the collage — no images, text, stickers, or other decorative elements.
- The collage must contain at least one item (an empty collage is not possible).
- Collage state is persisted only by explicit save in the collage editor.
- Undo and redo actions are available in the collage editor.
- Collage background is fixed white and cannot be customized.
- A static image is generated automatically only when sharing from the outfit screen.

> [!NOTE]
> **Undefined — requires clarification:**
> - Could the collage support additional content types (text, stickers) in the future?
> - The aspect ratio may change in future versions.

## Technical Details

Item positions use the [normalized coordinate system](../domain/outfit.md#collage-data-model) defined in the Outfit data model.

- Sync and offline behavior follow [Data & Sync](../constraints/data-sync.md).
- Item count constraints are defined in the [Outfit](../domain/outfit.md#collage-data-model) data model.
