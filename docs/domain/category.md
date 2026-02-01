# Category

A high-level classification of clothing items. Categories group [Items](./item.md) into broad types (e.g. tops, bottoms, shoes, accessories).

## Structure

Categories form a hierarchy that helps users navigate their wardrobe.

> [!NOTE]
> **Undefined — requires clarification:**
> - Full list of top-level categories.
> - Whether categories are nested (e.g. Tops > T-shirts > V-neck) or flat.
> - Whether categories are predefined (system-level) or user-customizable.
> - Relationship between Category and Item Type — is Type a subcategory, or a separate dimension?

## Relationships

- A Category contains zero or more [Items](./item.md).
- Categories are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).
- Categories are auto-detected by [AI Recognition](../features/ai-recognition.md).

## Business Rules

> [!NOTE]
> **Undefined — requires clarification:**
> - Can a user create custom categories?
> - Can an Item belong to multiple categories?
> - What happens if AI assigns a category that doesn't exist in the hierarchy?
