# AI Classification

Automatically detects clothing attributes from an item photo.

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

## Input Selection

- Classification uses the cutout photo when it is available.
- If cutout generation has failed, classification can run on the original photo.
- After a successful cutout retry, classification can be rerun to refresh detected attributes.

## User Override

All AI-detected attributes ([Type](../domain/type.md), [Color](../domain/color.md), [Brand](../domain/brand.md), [Collections](../domain/collection.md)) can be reviewed and corrected by the user after classification completes.

## Confidence Policy

- Classification uses an all-or-nothing confidence decision.
- If confidence is low, no attributes are auto-filled.
- Low-confidence runs move the item to **Classification Failed**.

## Error Handling

| Scenario | Expected Behavior |
|----------|------------------|
| Network unavailable | Item moves to **Classification Deferred** and classification resumes when network is available. User can also retry manually. |
| Classification returns low confidence | Item moves to **Classification Failed** and no attributes are auto-filled. |
| Classification returns no reliable result | Item moves to **Classification Failed** and no attributes are auto-filled. |
| User retries classification | Classification reruns against the best available item image (cutout first, otherwise original). |

Current implementation gap for deferred/failed lifecycle and retry behavior: [Current Limitations](../constraints/current-limitations.md#classification-recovery-flow-is-incomplete).
