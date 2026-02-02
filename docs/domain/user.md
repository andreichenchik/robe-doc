# User

A person who uses the app to manage their wardrobe. User is the owner of all [Items](./item.md), [Outfits](./outfit.md), and other personal data in the system.

## Properties

- **Apple ID** — identifier from Apple sign-in. Used solely for authentication. No personal information (name, avatar, email) is retrieved or stored from the Apple ID.
- **Subscription** — determines the user's access level. A subscription unlocks full app functionality: certain features are gated behind a paywall, and the number of [Items](./item.md) a user can create is limited for free users. See [Current Limitations](../constraints/current-limitations.md) for implementation status.

> [!NOTE]
> Subscription specifics are not yet defined: which features are gated, what the item limit is, and whether there is a trial period.

The app stores no user metadata — no registration date, last login, display name, or preferences. The only stored association is the link between the Apple ID and the user's data.

## Relationships

- A User owns zero or more [Items](./item.md).
- A User owns zero or more [Outfits](./outfit.md).

## Business Rules

- A User must be authenticated via Apple ID to use the app. There is no guest or anonymous usage.
- When a User deletes their account, all associated data is removed — items, outfits, collections, and the user record. Deletion is immediate after the user confirms the action in [Profile](../features/profile.md). See [Current Limitations](../constraints/current-limitations.md) for known gaps in the deletion process.
- After deletion, the user can re-register with the same Apple ID. This creates a new, empty account with no connection to the previous one.
