# ROBE

ROBE is a mobile application for digital wardrobe management. It helps users solve two everyday problems:

**"What should I wear?"** — The outfits screen gives users a library of their saved looks. Each [Outfit](./domain/outfit.md) can include a [collage](./features/outfit-collage.md) showing how the pieces go together and a photo of the outfit being worn, so the user can quickly pick a look and go.

**"What do I have?"** — When users want to create something new, the [wardrobe](./features/wardrobe-filtering.md) acts as a visual browser of everything they own. Quick scanning and filtering by category, type, color, or collections lets users see what is available and find combinations they haven't tried.

Both problems are wardrobe management at their core. The app takes an AI-first approach to remove friction — from recognizing clothing in a photo to organizing and browsing items — so that managing a wardrobe feels effortless.

## How It Works

- **Wardrobe management** — add, edit, and organize clothing items. [AI Classification](./features/ai-classification.md) detects clothing type and attributes from a photo, so adding items is fast.
- **Outfit creation** — combine [Items](./domain/item.md) into [Outfits](./domain/outfit.md) using an interactive [collage](./features/outfit-collage.md) and capture a photo of the look.
- **Filtering** — find items by [Category](./domain/category.md), [Type](./domain/type.md), [Color](./domain/color.md), and [Collections](./domain/collection.md) to quickly browse what you have.

## Prototype Preview

The documentation can include embedded interactive prototypes.

<iframe
  title="ROBE Prototype Sandbox"
  src="./_media/prototype.html#sandbox"
  style="width:100%;height:720px;border:1px solid #d8e0ea;border-radius:12px;background:#fff;"
  loading="lazy"
></iframe>
