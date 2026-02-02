# Category

A high-level classification of wardrobe items. Categories group [Items](./item.md) into broad types (e.g. tops, bottoms, shoes, accessories).

## Structure

Categories form a two-level hierarchy: each Category contains one or more Types. For example, the Category "Tops" might contain Types like "T-shirt", "Blouse", and "Sweater".

- Categories and Types are predefined (system-level) and not user-customizable.
- An [Item](./item.md) is assigned a Type, and its Category is derived from that Type. Items do not have a direct Category property.
- [AI Classification](../features/ai-classification.md) detects the Type from a photo; Category follows automatically.

> [!NOTE]
> **Undefined — requires clarification:**
> - Full list of categories and their types.

## Relationships

- A Category contains one or more Types.
- A Type belongs to exactly one Category.
- An [Item](./item.md) has a Type, which determines its Category.
- Categories are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Categories and Types are predefined by the system. Users cannot create, rename, or remove them.

> [!NOTE]
> **Undefined — requires clarification:**
> - What happens if AI assigns a type that doesn't exist in the hierarchy?
