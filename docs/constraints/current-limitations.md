# Current Limitations

Gaps between the documented target behavior and the current state of the product. Each entry links to the relevant documentation page that describes the desired behavior.

As limitations are resolved, remove them from this list.

---

## Custom Brands Not Yet Supported

[Brand](../domain/brand.md) documentation describes brand as a predefined list with user-extensible custom brands. Currently, users can only select from the predefined brand list — adding custom brands is not yet implemented.

---

## Local-First Is Partial

[Data & Sync](./data-sync.md) describes a local-first architecture where the device is the primary data source. Currently, data is stored and hosted online, with only a device-side cache available offline. If the cache is lost or the network is unavailable, data access may be disrupted. The goal is to make local storage the reliable primary source, with cloud sync as a secondary copy.

---

## Default Starter Collections Not Yet Implemented

[Collection](../domain/collection.md) mentions predefined starter collections for new users. Currently, no collections exist by default — users must create all collections manually.

---

## AI Collection Suggestion Not Yet Implemented

[AI Classification](../features/ai-classification.md) lists collection suggestion as a capability, and [Collection](../domain/collection.md) describes AI suggesting existing collections during item classification. This feature is not yet implemented — collections are currently assigned manually by the user only.

---

## Original Photo Preservation Is Incomplete

[Item](../domain/item.md) defines two photo variants per item: original photo and cutout photo. Currently, successful processing can leave only the cutout variant, so full reprocessing from the original image is not always possible.

---

## Background Removal Failure UX Is Incomplete

[Background Removal](../features/background-removal.md) and [Add Item](../flows/add-item.md) define an explicit failed state with retry. Currently, failed cutout cases may fall back to original photo without a clear failure lifecycle and guided retry flow.

---

## Classification Recovery Flow Is Incomplete

[AI Classification](../features/ai-classification.md) defines deferred classification for offline mode, failed state for no reliable result, and repeatable retries. Currently, offline/deferred and failed states are handled inconsistently.

---

## Multi-Item Photo Segmentation Is Unreliable

[Background Removal](../features/background-removal.md) defines one-item-per-photo behavior. Currently, photos with multiple clothing pieces can produce unpredictable merged cutouts.

---

## Subscription Not Yet Implemented

[User](../domain/user.md) describes a subscription model that gates certain features and limits the number of items for free users. Currently, all features are available to all users with no paywall or item limits.

---

## Account Deletion Does Not Clean Up Cloud Data

[User](../domain/user.md) states that all associated data is removed when an account is deleted. Currently, cloud-stored files (item images and other uploads) are not cleaned up during deletion and remain as orphans.

---

## Outfit Photo Gallery Not Yet Implemented

[Outfit](../domain/outfit.md) supports multiple photos per outfit. Currently, only a single photo can be attached to an outfit.

---

## Create Outfit Entry Point Is Incomplete

[Create Outfit](../flows/create-outfit.md) defines two entry points: the outfits tab and the wardrobe screen. Currently, create outfit is available only from the outfits tab.

---

## Collage Undo/Redo Not Yet Implemented

[Outfit Collage](../features/outfit-collage.md) defines undo and redo actions in the collage editor. Currently, undo and redo are not available.

---

## Type ID Typo in Backend Catalog

[Type](../domain/type.md) documentation defines the canonical bottom type as `leggings`. Currently, backend catalog still returns legacy key `leggins` for this type.
