# Data & Sync

The application follows a **local-first** approach: the device is the primary data source, and the app works offline by default.

Current implementation status is tracked in [Current Limitations](./current-limitations.md#local-first-is-partial).

## Offline Behavior

- All core functionality — browsing the wardrobe, viewing items, creating and editing outfits — is available without a network connection.
- Features that rely on server-side processing (e.g. [AI Classification](../features/ai-classification.md)) require a network connection. When the network is unavailable, these features are either deferred or disabled.

## Cloud Sync

User data is synchronized to a backend to support:

- **Multi-device access** — signing in on a new device restores the full wardrobe.
- **Data recovery** — reinstalling the app or switching devices does not result in data loss.

Synchronized data includes:

- [Items](../domain/item.md), including their properties and related image files.
- [Outfits](../domain/outfit.md), including their properties and related image files.
- [Collections](../domain/collection.md).

The backend serves as a secondary copy. The local device is the source of truth during normal operation.

> [!NOTE]
> **Undefined — requires clarification:**
> - Conflict resolution strategy when the same data is modified on multiple devices.
> - Whether sync happens in real-time, periodically, or on specific triggers.
> - Behavior when sync fails or is interrupted.
