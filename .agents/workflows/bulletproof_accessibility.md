---
description: Enforce full WCAG 2.1 AA accessibility standards on all components.
---
# Bulletproof Accessibility (A11y)

Enterprise sites cannot fail ADA compliance:

- **Semantic HTML**: Use native `<section>`, `<article>`, `<nav>`, `<aside>`, and `<main>` boundaries appropriately.
- **Screen Readers**: Any icon or UI element acting as a button MUST have an `aria-label` or visually hidden span `sr-only` describing its action for screen readers. Decorative images MUST have `aria-hidden="true"` or an empty `alt=""`.
- **Keyboard Navigation**: Any custom interactive component (like a native slider) MUST be reachable via the `Tab` key and operational. Use proper `tabIndex={0}` if forced to build custom clickable elements outside of native buttons/links.
- **Contrast Ratios**: Ensure all text passes WCAG contrast ratios. Warning: Be careful with the brand orange (`#ED8B00`) directly on flat white backgrounds; use it for large text or bold weights to mathematically pass the AA metric.
