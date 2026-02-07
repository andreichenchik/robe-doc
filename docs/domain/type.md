# Type

A specific garment or accessory classification used by [Item](./item.md). Each Type belongs to exactly one [Category](./category.md).

## Structure

- Types are predefined by the system and are not user-customizable.
- Each Type has:
  - `id` — stable system key.
  - `title` — user-facing label.
  - `category` — parent [Category](./category.md).
- [AI Classification](../features/ai-classification.md) detects Type first. Category is derived from the detected Type.

## System Type Catalog

| Type ID | Type Title | Category ID |
|---------|------------|-------------|
| `tShirt` | T-Shirt | `top` |
| `polo` | Polo | `top` |
| `longsleeve` | Longsleeve | `top` |
| `sweatshirt` | Sweatshirt | `top` |
| `hoodie` | Hoodie | `top` |
| `sweater` | Sweater | `top` |
| `shirt` | Shirt | `top` |
| `blouse` | Blouse | `top` |
| `dress` | Dress | `top` |
| `jumpsuits` | Jumpsuits | `top` |
| `pants` | Pants | `bottom` |
| `jeans` | Jeans | `bottom` |
| `leggings` | Leggings | `bottom` |
| `shorts` | Shorts | `bottom` |
| `skirt` | Skirt | `bottom` |
| `shoes` | Shoes | `footwear` |
| `flats` | Flats | `footwear` |
| `loafers` | Loafers | `footwear` |
| `espadrilles` | Espadrilles | `footwear` |
| `oxfords` | Oxfords | `footwear` |
| `sandals` | Sandals | `footwear` |
| `slides` | Slides | `footwear` |
| `heels` | Heels | `footwear` |
| `mules` | Mules | `footwear` |
| `wedges` | Wedges | `footwear` |
| `sneakers` | Sneakers | `footwear` |
| `boots` | Boots | `footwear` |
| `slippers` | Slippers | `footwear` |
| `bags` | Bags | `accessory` |
| `eyewear` | Eyewear | `accessory` |
| `earring` | Earring | `accessory` |
| `necklace` | Necklace | `accessory` |
| `ring` | Ring | `accessory` |
| `bracelet` | Bracelet | `accessory` |
| `bra` | Bra | `accessory` |
| `socks` | Socks | `accessory` |
| `tights` | Tights | `accessory` |
| `belt` | Belt | `accessory` |
| `hat` | Hat | `accessory` |
| `gloves` | Gloves | `accessory` |
| `scarf` | Scarf | `accessory` |
| `cardigan` | Cardigan | `outwear` |
| `blazer` | Blazer | `outwear` |
| `jacket` | Jacket | `outwear` |
| `anoraks` | Anoraks | `outwear` |
| `bomber` | Bomber | `outwear` |
| `shortCoat` | Short Coat | `outwear` |
| `vest` | Vest | `outwear` |
| `coat` | Coat | `outwear` |
| `trench` | Trench | `outwear` |
| `parkas` | Parkas | `outwear` |

## Relationships

- A [Category](./category.md) contains one or more Types.
- A Type belongs to exactly one [Category](./category.md).
- An [Item](./item.md) has exactly one Type.

## Business Rules

- Type IDs are stable and used as system keys.
- Category is derived from Type. Category is not manually selected on [Item](./item.md).
- Current backend limitation: legacy key `leggins` may still be returned for Leggings. See [Current Limitations](../constraints/current-limitations.md#type-id-typo-in-backend-catalog).
