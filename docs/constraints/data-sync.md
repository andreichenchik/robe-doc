# Data & Sync

The application follows a **local-first** approach: the device is the primary data source, and the app works offline by default.

## Offline Behavior

- All core functionality — browsing the wardrobe, viewing items, creating and editing outfits — is available without a network connection.
- Features that rely on server-side processing (e.g. [AI Recognition](../features/ai-recognition.md)) require a network connection. When the network is unavailable, these features are either deferred or disabled.

## Cloud Sync

User data is synchronized to a backend to support:

- **Multi-device access** — signing in on a new device restores the full wardrobe.
- **Data recovery** — reinstalling the app or switching devices does not result in data loss.

The backend serves as a secondary copy. The local device is the source of truth during normal operation.

> [!NOTE]
> **Undefined — requires clarification:**
> - Conflict resolution strategy when the same data is modified on multiple devices.
> - What exactly is synced (items, outfits, collections, preferences, photos)?
> - Whether sync happens in real-time, periodically, or on specific triggers.
> - Behavior when sync fails or is interrupted.
