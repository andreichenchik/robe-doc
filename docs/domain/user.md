# User

A person who uses the app to manage their wardrobe. User is the owner of all [Items](/domain/item), [Outfits](/domain/outfit), and other personal data in the system.

## Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| Apple ID | External ID | Identifier from Apple sign-in. Used for authentication. |

> [!NOTE]
> **Undefined — requires clarification:**
> - Does the user have a display name, avatar, or email stored in the app?
> - Are there any user-level settings or preferences (e.g. default sorting, theme)?
> - Is there any subscription or plan associated with the user?
> - What metadata is stored (registration date, last login)?

## Relationships

- A User owns zero or more [Items](/domain/item).
- A User owns zero or more [Outfits](/domain/outfit).

## Business Rules

- A User must be authenticated via Apple ID to use the app.
- When a User deletes their account, all associated data is removed.

> [!NOTE]
> **Undefined — requires clarification:**
> - Is account deletion immediate or is there a grace period?
> - What exactly is deleted — only app data, or is the Apple ID link also revoked?
> - Can a user re-register with the same Apple ID after deletion?
