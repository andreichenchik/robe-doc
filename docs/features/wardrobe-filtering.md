# Wardrobe Filtering

Allows users to find [Items](../domain/item.md) in their wardrobe by applying filters.

## Purpose

The wardrobe serves as a visual browser of everything the user owns. Its primary value is letting users quickly scan their items, get a visual overview, and spark ideas for new outfit combinations. Filtering narrows down the view by one or more dimensions, making it easy to answer questions like "what tops do I have?" or "which outwear is available?".

## Core Idea

Filtering follows progressive narrowing from broad context to specific item attributes.

- Users move from [Collections](../domain/collection.md) (optional) to [Category](../domain/category.md), then to detail filters such as [Type](../domain/type.md), [Color](../domain/color.md), and [Brand](../domain/brand.md).
- Optional levels can stay hidden until the user needs them to keep the interaction lightweight.
- Detail filters expose their tag values only after the user explicitly activates that filter dimension.

## Behavior

- Free-text search is not supported in v1.
- Results update immediately after each selection change.
- Multiple selected tags within one detail filter are OR-combined.
- Different filter dimensions are AND-combined.
- If no items match, the list area shows an empty-state message indicating that no matching items were found.
- Results are ordered by date added, newest first.
- The same filter logic and empty-state text are used when filtering items within [Collections](../domain/collection.md).
- The collection level is hidden by default.
- The app stores whether the collection level is shown or hidden and restores this preference after app restarts.
- When an upper-level context changes, dependent lower-level filters reset.

## Prototype

<iframe
  title="Wardrobe Filtering Prototype"
  src="./_media/prototype.html#wardrobe-filtering"
  width="390"
  height="844"
  scrolling="no"
  loading="lazy"
  style="width: 100%; max-width: 390px; border: 0; display: block; overflow: hidden;"
></iframe>
