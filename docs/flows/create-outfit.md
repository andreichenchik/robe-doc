# Create Outfit

The flow of composing a new outfit from existing wardrobe items.

## Trigger

User initiates "create outfit" action.

> [!NOTE]
> **Undefined — requires clarification:**
> - Where is the entry point — wardrobe screen, outfits tab, or both?

## Steps

1. **Select items** — User picks [Items](../domain/item.md) from their wardrobe to include in the outfit.
2. **Arrange on collage** — Selected items appear on the [Outfit Collage](../features/outfit-collage.md). User positions them via drag-and-drop.
3. **Save** — The [Outfit](../domain/outfit.md) is saved with its collage state.

## Result

A new Outfit is created and visible in the user's outfit list.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can the user name the outfit?
> - Can items be added/removed from the collage after the initial selection?
> - Is there an outfit preview or thumbnail generated automatically?
> - Can the user assign the outfit to a collection?
> - Can the user share the outfit (export as image)?
> - What is the minimum number of items required?

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| User tries to save empty collage | *Undefined* |
| Collage sync fails | *Undefined* |
| An item in the outfit is later deleted | *Undefined* |
