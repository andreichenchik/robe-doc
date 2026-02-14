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

## AI Collection Suggestion Not Yet Implemented

[AI Classification](../features/ai-classification.md) lists collection suggestion as a capability, and [Collection](../domain/collection.md) describes AI suggesting existing collections during item classification. This feature is not yet implemented — collections are currently assigned manually by the user only.

---

## Collections Model and Filtering Are Partial

[Collection](../domain/collection.md) defines starter collections for new users, multi-assignment across items and outfits, and strict collection lifecycle rules, while [Wardrobe Filtering](../features/wardrobe-filtering.md) depends on a consistent collection-level interaction model. Currently, no starter collections are created by default, behavior is closer to a single-selection tag model, rule enforcement is partial, and collection-level filtering does not fully match documented show/hide persistence behavior.

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

[User](../domain/user.md) states that all associated data is removed when an account is deleted. Currently, cloud-stored files (item images and other uploads) are not cleaned up during deletion and remain as orphans. This also diverges from [Profile](../features/profile.md), which requires explicit confirmation before account deletion, while current behavior may execute deletion without that safety step.

---

## Type ID Typo in Backend Catalog

[Type](../domain/type.md) documentation defines the canonical bottom type as `leggings`. Currently, backend catalog still returns legacy key `leggins` for this type.

---

## Portrait-Only Constraint Is Not Fully Enforced

[Platform](./platform.md) defines portrait-only support as the product contract. Currently, app behavior can still allow landscape in some contexts, which makes the platform constraint inconsistent and reduces predictability for orientation-dependent flows.

---

## Outfit Creation and Presentation Are Partial

[Outfit](../domain/outfit.md), [Outfit Collage](../features/outfit-collage.md), [Create Outfit](../flows/create-outfit.md), and [Edit Outfit](../flows/edit-outfit.md) describe multi-photo support, two create entry points, undo/redo in collage editing, draft visibility in the main list by default, non-empty outfit/collage requirements, collage-first list previews, and explicit `updated at` semantics. Currently, these behaviors are only partially aligned: only one outfit photo is supported, create outfit is not available from all documented entry points, undo/redo is unavailable, drafts may be hidden by default, empty outfit states can appear through some create/edit paths, list preview source is not consistently collage-first, and `updated at` is not consistently represented as a first-class product attribute.

---

## Item Naming and Processing Terms Differ

[Item](../domain/item.md) specifies a deterministic auto-name pattern and a defined processing status vocabulary for newly added items. Currently, the generated name field order and visible status terminology can differ from documented definitions, which causes mismatch between expected and observed product language.
