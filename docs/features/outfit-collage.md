# Outfit Collage

An interactive surface where users arrange [Items](../domain/item.md) to compose an [Outfit](../domain/outfit.md).

## Purpose

Let users visually combine clothing pieces into a look by dragging and positioning item cutouts on a collage. The collage shows how items look together, helping users evaluate the combination before wearing it.

## Behavior

- User adds items to the collage from their wardrobe.
- Each item is displayed as a cutout image (background already removed by [Background Removal](./background-removal.md)).
- Items can be repositioned via drag-and-drop.
- Collage state is persisted on save.

## Technical Details

Item positions use the [normalized coordinate system](../domain/outfit.md#collage-data-model) defined in the Outfit data model.

- Drag-and-drop is optimized for smooth operation.
- Collage state is synchronized with the backend.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can items be scaled (pinch-to-zoom) and rotated on the collage?
> - Is there a z-order control (bring to front / send to back)?
> - Can the user undo/redo collage actions?
> - Is the collage state auto-saved or explicitly saved by the user?
> - Can the collage generate a static image (e.g. for sharing)?
> - Maximum number of items on a single collage.
> - Collage background — is it configurable or fixed?
