# Onboarding

The flow a new or signed-out [User](../domain/user.md) goes through when they open the app.

## Trigger

User opens the app for the first time or after signing out.

## Steps

1. **Welcome screen** — A single page showing the app logo and main slogan.
2. **Sign in** — [User](../domain/user.md) authenticates with their account.

## Result

The user is authenticated and enters the main app screen with access to their wardrobe.

> [!NOTE]
> **Undefined — requires clarification:**
> - What is the main slogan text?
> - Is there any additional content on the welcome screen (feature highlights, illustrations)?
> - What happens if the user dismisses the Apple ID prompt — can they retry?
> - Is there a "skip" or "explore without account" option?
> - Where does the user land after sign-in — wardrobe tab, empty state, or a tutorial?
> - Is there a different experience for returning users (sign-in only, no welcome screen)?

## Error Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| Apple ID sign-in fails | *Undefined* |
| Apple ID sign-in cancelled by user | *Undefined* |
| Network unavailable during sign-in | *Undefined* |
