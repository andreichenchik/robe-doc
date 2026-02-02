# AI Classification

Automatically detects clothing attributes from a photo. Requires a background-removed image as input (see [Background Removal](./background-removal.md)).

## Purpose

Reduce manual effort when adding items. Instead of filling in every field by hand, the user takes a photo and AI populates the key attributes.

## Capabilities

### Clothing Classification

- Detects **type** of garment (e.g. t-shirt, jeans, dress). [Category](../domain/category.md) is derived from the detected type.

### Color Detection

- Identifies the dominant color of the garment from the predefined color set.

### Brand Detection

- Attempts to match the brand from the user's existing brand list.
- Least accurate classifier — brand is difficult to determine from a photo alone.

### Collection Suggestion

- Suggests existing user [Collections](../domain/collection.md) that the item may belong to.

## User Override

All AI-detected attributes (type, color, brand, collections) can be reviewed and corrected by the user after classification completes.

> [!NOTE]
> **Undefined — requires clarification:**
> - What attributes beyond type, color, and brand does the AI detect (material, pattern, season, style)?
> - What happens when AI classification fails or returns low confidence?

## Error Handling

> [!NOTE]
> **Undefined — requires clarification:**
> - Behavior when the photo doesn't contain recognizable clothing.
> - Behavior when the network is unavailable.
> - Retry/fallback strategy.
