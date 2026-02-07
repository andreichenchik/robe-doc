# Profile

A dedicated screen where the [User](../domain/user.md) can manage their session. Accessible as a separate tab in the app.

## Purpose

Gives users control over their account — the ability to sign out or permanently delete their account.

## Behavior

The profile screen contains only two actions — no settings, statistics, or other content is displayed.

## Available Actions

| Action | Description |
|--------|-------------|
| Sign out | Ends the current session. The user returns to the [Onboarding](../flows/onboarding.md) screen and must sign in again to continue. |
| Delete account | Permanently removes the user's account and all associated data. Requires confirmation before proceeding. See [Current Limitations](../constraints/current-limitations.md#account-deletion-does-not-clean-up-cloud-data) for known implementation gaps. |
