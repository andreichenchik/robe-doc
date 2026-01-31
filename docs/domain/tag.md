# Tag

A user-defined label attached to [Items](item.md) for flexible organization beyond the [Category](category.md) hierarchy.

Tags allow users to create their own groupings (e.g. "summer", "work", "favorites", "to donate").

## Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| Name | String | The label text. |

> [!NOTE]
> **Undefined — requires clarification:**
> - Does a Tag have a color or icon?
> - Are Tags unique per user (global) or can they overlap?
> - Is there a maximum length for Tag names?
> - Can Tags be applied to Outfits, or only to Items?

## Relationships

- A Tag can be attached to zero or more [Items](item.md).
- Tags are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Tags are created by the user (not auto-detected by AI).

> [!NOTE]
> **Undefined — requires clarification:**
> - Are tags auto-suggested based on existing tags?
> - What happens to a tag when all items using it are deleted?
> - Is there a limit on tags per item or total tags per user?
