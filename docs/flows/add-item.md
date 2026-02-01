# Add Item

The flow of adding a new clothing piece to the user's wardrobe.

## Trigger

User initiates "add item" action from the wardrobe screen.

## Steps

1. **Capture photo** — User takes a photo or selects one from the photo library.
2. **AI processing** — [AI Recognition](../features/ai-recognition.md) removes the background and detects clothing attributes.
3. **Review & edit** — User sees the AI-detected attributes and can confirm or correct them.
4. **Add to collections** — User optionally assigns [Collections](../domain/collection.md).
5. **Save** — The [Item](../domain/item.md) is saved to the wardrobe.

## Result

A new Item appears in the user's wardrobe with a clean cutout photo and populated attributes.

> [!NOTE]
> **Undefined — requires clarification:**
> - Can the user add multiple items at once (batch mode)?
> - What does the review screen look like — which fields are editable?
> - Is there a loading/progress indicator during AI processing?
> - Can the user skip AI recognition and fill in attributes manually?
> - What happens if the user cancels mid-flow — is a draft saved?
> - Is there a confirmation screen before final save?

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| AI classification fails | *Undefined* |
| Background removal fails | *Undefined* |
| Network unavailable | *Undefined* |
| Photo is not a clothing item | *Undefined* |
