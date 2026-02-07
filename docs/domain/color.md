# Color

Dominant color attribute of an [Item](./item.md). Colors are used in auto-generated names, filtering, and AI classification output.

## Structure

- Colors come from a predefined system catalog.
- Each color value has:
  - `id` — stable system key.
  - `title` — user-facing label.
  - `code` — display value used by clients for visual rendering.

## System Color Catalog

| Color ID | Color Title | Color Code |
|----------|-------------|------------|
| `white` | White | `#FFFFFF` |
| `black` | Black | `#000000` |
| `transparent` | Transparent | `transparent` |
| `multicolor` | Multicolor | `multicolor` |
| `cream` | Cream | `#EAD7A7` |
| `gold` | Gold | `gold` |
| `silver` | Silver | `silver` |
| `purple` | Purple | `#AF52DE` |
| `pink` | Pink | `#FFA8BB` |
| `red` | Red | `#FF3B30` |
| `orange` | Orange | `#FF9500` |
| `yellow` | Yellow | `#FFDB4B` |
| `green` | Green | `#34C759` |
| `blue` | Blue | `#007AFF` |
| `brown` | Brown | `#B57B52` |
| `grey` | Grey | `#8E8E93` |

## Relationships

- An [Item](./item.md) has one Color value.
- [AI Classification](../features/ai-classification.md) attempts to detect the dominant Color.
- Color is used as a filter in [Wardrobe Filtering](../features/wardrobe-filtering.md).

## Business Rules

- Color IDs in this catalog are stable and used as system keys.
- `transparent` and `multicolor` are valid system colors and are treated as regular catalog values.
