# Background Removal

Automatically removes the background from a clothing photo, producing a clean cutout image with a transparent background.

## Purpose

Isolate the clothing piece from its surroundings so it can be displayed consistently in the wardrobe and used on the [outfit collage](./outfit-collage.md).

## Behavior

- Takes the original user photo as input and outputs a transparent cutout containing only the clothing piece.
- Executes as the first step of the [Add Item](../flows/add-item.md) processing pipeline, before [AI Classification](./ai-classification.md).

> [!NOTE]
> **Undefined — requires clarification:**
> - Is the original photo preserved alongside the cutout?
> - What happens when the model fails to detect a clothing item in the photo?
> - How does the model handle photos with multiple clothing pieces?
