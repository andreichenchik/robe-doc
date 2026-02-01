# Collection

A user-created grouping for organizing [Items](./item.md) and [Outfits](./outfit.md) beyond the [Category](./category.md) hierarchy.

Collections let users define their own cross-cutting labels (e.g. "sporty", "evening", "favorites", "to donate"). No collections exist by default — users create them as needed.

## Properties

- **Name** — the label text displayed on the collection.

> [!NOTE]
> **Undefined — requires clarification:**
> - Does a Collection have a color or icon?
> - Are Collection names unique per user?
> - Is there a maximum length for Collection names?

## Relationships

- A Collection can be attached to zero or more [Items](./item.md).
- A Collection can be attached to zero or more [Outfits](./outfit.md).
- The same set of Collections is shared across Items and Outfits.
- Collections are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Collections are created by the user (not auto-detected by AI).
- An Item or Outfit can belong to zero or more Collections.

> [!NOTE]
> **Undefined — requires clarification:**
> - Are collections auto-suggested based on existing collections?
> - What happens to a collection when all items and outfits using it are removed from it?
> - Is there a limit on collections per item/outfit or total collections per user?
