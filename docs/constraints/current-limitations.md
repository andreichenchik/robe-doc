# Current Limitations

Gaps between the documented target behavior and the current state of the product. Each entry links to the relevant documentation page that describes the desired behavior.

As limitations are resolved, remove them from this list.

---

## Custom Brands Not Yet Supported

[Item](../domain/item.md) documentation describes brand as a predefined list with user-extensible custom brands. Currently, users can only select from the predefined brand list — adding custom brands is not yet implemented.

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

## Subscription Not Yet Implemented

[User](../domain/user.md) describes a subscription model that gates certain features and limits the number of items for free users. Currently, all features are available to all users with no paywall or item limits.

---

## Account Deletion Does Not Clean Up Cloud Data

[User](../domain/user.md) states that all associated data is removed when an account is deleted. Currently, cloud-stored files (item images and other uploads) are not cleaned up during deletion and remain as orphans.

---

## Outfit Photo Gallery Not Yet Implemented

[Outfit](../domain/outfit.md) supports multiple photos per outfit. Currently, only a single photo can be attached to an outfit.
