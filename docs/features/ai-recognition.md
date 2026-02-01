# AI Recognition

Automatically detects clothing attributes from a photo when a user adds a new [Item](/domain/item) to their wardrobe.

## Purpose

Reduce manual effort when adding items. Instead of filling in every field by hand, the user takes a photo and AI populates the key attributes.

## Capabilities

### Clothing Classification
- Detects **type** of garment (e.g. t-shirt, jeans, dress).
- Detects **category** (e.g. tops, bottoms, footwear).

### Background Removal
- Automatically removes the background from the clothing photo.
- Produces a clean cutout image used in the wardrobe and on the [outfit canvas](/features/outfit-canvas).

### Color Detection
- Identifies the dominant color of the garment.

> [!NOTE]
> **Undefined — requires clarification:**
> - What attributes beyond type, category, and color does the AI detect (material, pattern, season, style)?
> - What happens when AI classification fails or returns low confidence?
> - Can the user override or correct AI results? (Assumed yes, but flow undefined.)
> - Is recognition synchronous (user waits) or asynchronous (can continue while processing)?

## Error Handling

> [!NOTE]
> **Undefined — requires clarification:**
> - Behavior when the photo doesn't contain recognizable clothing.
> - Behavior when the network is unavailable.
> - Retry/fallback strategy.
