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

## No Default Collections

[Collection](../domain/collection.md) states that no collections exist by default. While accurate today, the goal is to provide a set of predefined starter collections for new users so that the wardrobe is useful from the start.

---

## AI Collection Suggestion Not Yet Implemented

[AI Classification](../features/ai-classification.md) lists collection suggestion as a capability, and [Collection](../domain/collection.md) describes AI suggesting existing collections during item classification. This feature is not yet implemented — collections are currently assigned manually by the user only.
