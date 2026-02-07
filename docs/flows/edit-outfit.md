# Edit Outfit

The flow of updating an existing [Outfit](../domain/outfit.md) after it has been created.

## Trigger

User opens an existing outfit and enters edit mode.

## Steps

1. **Edit outfit details** — User updates outfit name, draft/favorite state, and assigned [Collections](../domain/collection.md).
2. **Edit collage** — User opens the [Outfit Collage](../features/outfit-collage.md) editor from outfit editing and updates the collage composition.
3. **Manage outfit photos** — User adds or replaces outfit photos.
4. **Save outfit** — Changes are saved to the outfit, and the outfit `updated at` timestamp is refreshed.

## Sharing

From the outfit screen, the user can share:

- the collage as a generated static image;
- an outfit photo.

## Result

The updated outfit appears on the outfit screen and in the outfit list.

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| Collage save fails | *Undefined* |
| Photo import/upload fails | *Undefined* |
