# Wardrobe Filtering

Allows users to find [Items](../domain/item.md) in their wardrobe by applying filters.

## Purpose

The wardrobe serves as a visual browser of everything the user owns. Its primary value is letting users quickly scan their items, get a visual overview, and spark ideas for new outfit combinations. Filtering narrows down the view by one or more dimensions, making it easy to answer questions like "what tops do I have?" or "which outwear is available?".

## Filter Dimensions

| Dimension | Source |
|-----------|--------|
| [Category](../domain/category.md) | Derived from Type |
| [Type](../domain/type.md) | AI-detected or manually assigned |
| [Color](../domain/color.md) | AI-detected or manually assigned |
| [Collections](../domain/collection.md) | User-assigned |

Rules:

- Free-text search is not supported.
- Users can select multiple values in each filter dimension.
- Values within the same filter dimension are OR-combined.
- Different filter dimensions are AND-combined.
- Results are ordered by date added, newest first.

> [!NOTE]
> **Undefined — requires clarification:**
> - UI layout — is it a filter bar, bottom sheet, or dedicated screen?

## Behavior

Users select filter values and the wardrobe view updates to show only matching items.

- If no items match, the list area shows an empty-state message indicating that no matching items were found.
- The same filter logic and empty-state text are used when filtering items within [Collections](../domain/collection.md).
- Filter state is not persisted across app restarts. It may remain during the current app session and resets when the app relaunches.
