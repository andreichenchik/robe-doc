# Wardrobe Filtering

Allows users to find [Items](../domain/item.md) in their wardrobe by applying filters and search criteria.

## Purpose

The wardrobe serves as a visual browser of everything the user owns. Its primary value is letting users quickly scan their items, get a visual overview, and spark ideas for new outfit combinations. Filtering narrows down the view by one or more dimensions, making it easy to answer questions like "what tops do I have?" or "which outerwear is available?".

## Filter Dimensions

| Dimension | Source |
|-----------|--------|
| [Category](../domain/category.md) | AI-detected or manually assigned |
| Type | AI-detected or manually assigned |
| Color | AI-detected |
| [Collections](../domain/collection.md) | User-assigned |

> [!NOTE]
> **Undefined — requires clarification:**
> - Is there a free-text search (by item name, notes, etc.)?
> - Can multiple filter values be combined (e.g. Category = Tops AND Color = Blue)?
> - Are filters AND-combined or OR-combined within the same dimension?
> - Is there a sort order (by date added, name, color)?
> - UI layout — is it a filter bar, bottom sheet, or dedicated screen?

## Behavior

Users select filter values and the wardrobe view updates to show only matching items.

> [!NOTE]
> **Undefined — requires clarification:**
> - Is filtering performed locally or server-side?
> - Are filter selections persisted between sessions?
> - What is shown when no items match the filters?
