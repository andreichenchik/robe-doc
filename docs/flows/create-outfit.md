# Create Outfit

The flow of composing a new outfit from existing wardrobe items.

## Trigger

User initiates "create outfit" action.

> [!NOTE]
> **Undefined — requires clarification:**
> - Where is the entry point — wardrobe screen, outfits tab, or both?

## Steps

1. **Select items** — User picks [Items](../domain/item.md) from their wardrobe to include in the outfit. At least one item is required.
2. **Arrange on collage** — User arranges items on the [Outfit Collage](../features/outfit-collage.md) by dragging, scaling, and rotating them. In the collage editor, items can also be added or removed.
3. **Set outfit details** — User optionally sets a name, marks the outfit as a draft or favorite, and assigns [Collections](../domain/collection.md).
4. **Save** — The [Outfit](../domain/outfit.md) is saved with its collage state.

## Result

A new Outfit is created and visible in the user's outfit list. The collage serves as the outfit's preview image in the list.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can the user share the outfit (export as image)?

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| Collage sync fails | *Undefined* |
| An item in the outfit is later deleted | *Undefined* |
