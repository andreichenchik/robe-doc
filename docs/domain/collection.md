# Collection

A user-created grouping for organizing [Items](./item.md) and [Outfits](./outfit.md) beyond the [Category](./category.md) hierarchy.

Collections let users define their own cross-cutting labels (e.g. "sporty", "evening", "favorites", "to donate"). Users create collections as needed. The system may also provide predefined starter collections for new users — see [Current Limitations](../constraints/current-limitations.md).

## Properties

- **Name** — the label text displayed on the collection.
- Collections have no additional visual attributes such as icon or color.

## Relationships

- A Collection can be attached to zero or more [Items](./item.md).
- A Collection can be attached to zero or more [Outfits](./outfit.md).
- The same set of Collections is shared across [Items](./item.md) and [Outfits](./outfit.md).
- Collections are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Collections are created by the user. During item classification, [AI Classification](../features/ai-classification.md) can suggest assigning existing collections to a new item, but it does not create new collections.
- Collections are created empty and may remain empty.
- Collection names must be unique per user.
- Name uniqueness is evaluated case-insensitively and ignores leading/trailing whitespace (for example, `Summer` and ` summer ` are treated as the same name).
- There is no maximum name length at the product level.
- Collections can be deleted at any time.
- Deleting a collection removes only the collection and its assignments. [Items](./item.md) and [Outfits](./outfit.md) are not changed or deleted.
- There is no limit on the total number of collections per user.
- There is no limit on how many collections can be assigned to an [Item](./item.md) or [Outfit](./outfit.md).
- There is no limit on how many [Items](./item.md) or [Outfits](./outfit.md) can be assigned to a collection.
