# Category

A high-level classification of wardrobe items. Categories group [Items](./item.md) into broad groups such as tops, bottoms, footwear, accessories, and outwear.

## Structure

Categories form a two-level hierarchy with [Type](./type.md). Each Category contains one or more Types.

- Categories and Types are predefined by the system and are not user-customizable.
- An [Item](./item.md) is assigned a [Type](./type.md), and its Category is derived from that Type.
- [AI Classification](../features/ai-classification.md) detects Type from a photo; Category follows automatically.

## System Category Catalog

| Category ID | Category Title |
|-------------|----------------|
| `top` | Tops |
| `bottom` | Bottoms |
| `footwear` | Footwear |
| `accessory` | Accessories |
| `outwear` | Outwear |

## Relationships

- A Category contains one or more [Types](./type.md).
- A [Type](./type.md) belongs to exactly one Category.
- An [Item](./item.md) has a [Type](./type.md), which determines its Category.
- Categories are used as a filter dimension in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Categories are predefined by the system. Users cannot create, rename, or remove them.
- Category IDs in this catalog are stable and used as system keys.

> [!NOTE]
> **Undefined — requires clarification:**
> - What happens if AI assigns a type that doesn't exist in the hierarchy?
