# Brand

Brand of a clothing piece on [Item](./item.md). Brands are used as attribute values for item naming and AI classification output.

## Structure

- The system provides a predefined brand catalog.
- User-defined custom brands are part of the target behavior but not yet implemented. See [Current Limitations](../constraints/current-limitations.md).

## System Brand Catalog

| Brand ID | Brand Title |
|----------|-------------|
| `zara` | Zara |
| `nike` | Nike |
| `adidas` | Adidas |
| `gucci` | Gucci |
| `hm` | H&M |
| `levis` | Levi's |
| `supreme` | Supreme |
| `prada` | Prada |
| `uniqlo` | Uniqlo |
| `versace` | Versace |
| `burberry` | Burberry |
| `gap` | Gap |
| `calvinKlein` | Calvin Klein |
| `cartier` | Cartier |
| `chanel` | Chanel |
| `vans` | Vans |

## Relationships

- An [Item](./item.md) has one Brand value.
- [AI Classification](../features/ai-classification.md) attempts to detect Brand from photo input.

## Business Rules

- Brand IDs in this catalog are stable and used as system keys.
- The app can expose custom brands in addition to this catalog once that capability is implemented.
