# Open Questions

Topics that need to be defined as the product evolves. Each section describes what needs to be decided and why it matters.

---

## Authentication

How users sign in and identify themselves. Affects onboarding complexity, account recovery, and data sync.

Apple Sign In is the only authentication method, and it is required — there is no guest or anonymous usage. Account deletion is immediate with no data retention. See [User](../domain/user.md) for details.

Current limitation: account deletion does not yet fully remove cloud-stored files. See [Current Limitations](./current-limitations.md#account-deletion-does-not-clean-up-cloud-data).

- What happens if a user loses access to their Apple ID — is there an account recovery path?

See also: [Onboarding](../flows/onboarding.md).

---

## Storage & Limits

Whether the system imposes limits on user data. Affects product positioning and infrastructure costs.

Target behavior: item count is limited for free users and unlimited (or higher) for subscribers. See [User](../domain/user.md).

Current limitation: subscription gating and item limits are not yet implemented. See [Current Limitations](./current-limitations.md#subscription-not-yet-implemented).

- What is the specific item limit for free users?
- Are there limits on outfits?
- Photo storage limits (size, resolution, count).

---

## Privacy & Data

How user data — especially photos — is handled. Affects trust, compliance, and feature design.

- Where photos are stored (device only, cloud, or both).
- What data is sent to external services (e.g. images sent for AI classification).
- Whether any data is shared with third parties.

---

## Monetization

Target business model: freemium with a subscription that unlocks full functionality. See [User](../domain/user.md) for the subscription concept.

Current implementation gap is the same as in [Storage & Limits](#storage-limits): subscription gating and item limits are not yet implemented. See [Current Limitations](./current-limitations.md#subscription-not-yet-implemented).

- Which specific features are gated behind the paywall?
- Is there a trial period for the subscription?
- What is the pricing model (monthly, yearly, both)?

---

## Accessibility

Support for users with disabilities. Affects UI design and testing requirements.

- VoiceOver support for screen reader users.
- Dynamic Type support for custom font sizes.
- Contrast and color considerations for color-related features (e.g. color detection, filtering by color).

---

## Performance

Expected responsiveness and loading behavior. Affects architecture and perceived quality.

- Target launch time and time-to-interactive.
- Image loading and rendering performance expectations.
- Scroll performance in large wardrobes (hundreds of items).
