# Wardrobe Filtering

Allows users to find [Items](../domain/item.md) in their wardrobe by applying filters.

## Purpose

The wardrobe serves as a visual browser of everything the user owns. Its primary value is letting users quickly scan their items, get a visual overview, and spark ideas for new outfit combinations. Filtering narrows down the view by one or more dimensions, making it easy to answer questions like "what tops do I have?" or "which outwear is available?".

## Information Architecture

Wardrobe filtering is a three-level interaction model:

1. **Level 1 — Collection context**
   - The collection control is collapsible and is shown as a compact `collections` trigger in the top-right area.
   - By default, this control is collapsed.
   - When collapsed, collection selection is cleared.
   - User can open the control and select one [Collection](../domain/collection.md), or keep collection selection empty.
   - Empty selection means "show items from every collection context".
   - Tapping an already selected collection clears the selection.
   - The trigger shows a chevron-down when collapsed and a close action (`x`) when expanded.
   - Changing or clearing collection selection resets lower levels to their default state.

2. **Level 2 — Category tabs**
   - Category tabs are swipeable.
   - The first tab is `All`, followed by system categories.
   - The tab row shows only categories that currently have at least one item in the selected collection context.
   - Changing or clearing collection selection resets the active category tab to `All`.

3. **Level 3 — Detail filters**
   - Detail filters are shown as circular icon buttons: [Type](../domain/type.md), [Color](../domain/color.md), and [Brand](../domain/brand.md).
   - A detail filter dimension is shown only if the current upper context has at least two available tag values for that dimension.
   - Multiple detail filters can be active at the same time.
   - Activating a detail filter expands its tag panel.
   - While active, the icon changes to a close action (`x`).
   - Tapping the close action clears that filter and collapses its panel.
   - Available tags are limited to values present in the current upper context (selected collection, if any, + selected category tab).
   - Long tag lists are scrollable inside the expanded filter panel.

## Filter Logic

- Free-text search is not supported in v1.
- Results update immediately after each selection change.
- Multiple selected tags within one detail filter are OR-combined.
- Different filter dimensions are AND-combined.
- Results are ordered by date added, newest first.

## Behavior

Users select filter values and the wardrobe view updates to show only matching items.

- If at least one detail filter has selected tags, only items that match the full filter expression are shown.
- If no items match, the list area shows an empty-state message indicating that no matching items were found.
- The same filter logic and empty-state text are used when filtering items within [Collections](../domain/collection.md).
- Filter state is stored per category tab during the current collection session.
- Switching category tabs in the same collection restores each tab's own filter state.
- Changing or clearing collection selection fully resets category-tab and detail-filter state.
- Filter state is not persisted across app restarts.

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
