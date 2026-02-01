# Create Outfit

The flow of composing a new outfit from existing wardrobe items.

## Trigger

User initiates "create outfit" action.

> [!NOTE]
> **Undefined — requires clarification:**
> - Where is the entry point — wardrobe screen, outfits tab, or both?

## Steps

1. **Select items** — User picks [Items](/domain/item) from their wardrobe to include in the outfit.
2. **Arrange on canvas** — Selected items appear on the [Outfit Canvas](/features/outfit-canvas). User positions them via drag-and-drop.
3. **Save** — The [Outfit](/domain/outfit) is saved with its canvas state.

## Result

A new Outfit is created and visible in the user's outfit list.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can the user name the outfit?
> - Can items be added/removed from the canvas after the initial selection?
> - Is there an outfit preview or thumbnail generated automatically?
> - Can the user assign the outfit to a collection?
> - Can the user share the outfit (export as image)?
> - What is the minimum number of items required?

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| User tries to save empty canvas | *Undefined* |
| Canvas sync fails | *Undefined* |
| An item in the outfit is later deleted | *Undefined* |
