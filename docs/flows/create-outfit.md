# Create Outfit

The flow of composing a new outfit from existing wardrobe items.

## Trigger

User initiates "create outfit" action from either:

- the outfits tab;
- the wardrobe screen.

## Steps

1. **Select items** — User picks [Items](../domain/item.md) from their wardrobe to include in the outfit. At least one item is required.
2. **Arrange on collage** — User arranges selected items in the [Outfit Collage](../features/outfit-collage.md) editor.
3. **Set outfit details** — User optionally sets a name, marks the outfit as a draft or favorite, and assigns [Collections](../domain/collection.md).
4. **Save** — The [Outfit](../domain/outfit.md) is saved with its collage state.

## Result

A new [Outfit](../domain/outfit.md) is created and visible in the user's outfit list. The collage serves as the outfit's preview image in the list.
Further changes are handled in the [Edit Outfit](./edit-outfit.md) flow.

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| Collage sync fails | *Undefined* |
