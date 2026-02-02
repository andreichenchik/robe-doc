# Open Questions

Topics that need to be defined as the product evolves. Each section describes what needs to be decided and why it matters.

---

## Authentication

How users sign in and identify themselves. Affects onboarding complexity, account recovery, and data sync.

- Sign-in methods: Apple Sign In, email/password, social login, anonymous usage?
- Is sign-in required to use the app, or only for sync features?
- Account deletion flow and data retention after deletion.

See also: [Onboarding](../flows/onboarding.md).

---

## Storage & Limits

Whether the system imposes limits on user data. Affects product positioning and infrastructure costs.

- Maximum number of items, outfits, or collections per user.
- Photo storage limits (size, resolution, count).
- Whether limits differ by plan (if monetization introduces tiers).

---

## Privacy & Data

How user data — especially photos — is handled. Affects trust, compliance, and feature design.

- Where photos are stored (device only, cloud, or both).
- What data is sent to external services (e.g. images sent for AI classification).
- Data retention policy: how long is data kept after account deletion?
- Whether any data is shared with third parties.

---

## Monetization

The business model for the product. Affects feature scoping and which capabilities are gated.

- Free, freemium, subscription, or one-time purchase?
- If freemium: which features are free and which are paid?
- Trial period or usage limits for premium features.

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
