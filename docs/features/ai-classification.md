# AI Classification

Automatically detects clothing attributes from a photo. Requires a background-removed image as input (see [Background Removal](./background-removal.md)).

## Purpose

Reduce manual effort when adding items. Instead of filling in every field by hand, the user takes a photo and AI populates the key attributes.

## Capabilities

### Clothing Classification

- Detects **type** of garment (e.g. t-shirt, jeans, dress) from the predefined [Type](../domain/type.md) catalog. [Category](../domain/category.md) is derived from the detected type.

### Color Detection

- Identifies the dominant color of the garment from the predefined [Color](../domain/color.md) catalog.

### Brand Detection

- Attempts to match the brand from the predefined [Brand](../domain/brand.md) catalog.
- Least accurate classifier — brand is difficult to determine from a photo alone.

### Collection Suggestion

- Suggests existing user [Collections](../domain/collection.md) that the item may belong to. This is target behavior and is not yet implemented. See [Current Limitations](../constraints/current-limitations.md#ai-collection-suggestion-not-yet-implemented).
- AI does not detect additional style attributes such as material, pattern, season, or style tags.

## User Override

All AI-detected attributes ([Type](../domain/type.md), [Color](../domain/color.md), [Brand](../domain/brand.md), [Collections](../domain/collection.md)) can be reviewed and corrected by the user after classification completes.

> [!NOTE]
> **Undefined — requires clarification:**
> - What happens when AI classification fails or returns low confidence?

## Error Handling

> [!NOTE]
> **Undefined — requires clarification:**
> - Behavior when the photo doesn't contain recognizable clothing.
> - Behavior when the network is unavailable.
> - Retry/fallback strategy.
