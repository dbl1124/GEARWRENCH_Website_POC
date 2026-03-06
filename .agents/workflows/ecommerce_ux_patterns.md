---
description: Enforce frictionless e-commerce conversion patterns and UI behaviors.
---
# E-Commerce UX Patterns

Ensure conversion elements follow established best practices:

- **Primary CTAs**: "Buy Now", "Shop", or primary actions must prominently feature the branded `#ED8B00` orange. Ensure high contrast and large click targets (minimum `min-h-[48px]`).
- **Product Cards**: Keep layouts minimalist. Emphasize the product image (with `mix-blend-multiply` to drop out white backgrounds if necessary). Text should be left-aligned or center-aligned. Always include a hover state that brings the "Buy Now" button or price to prominence.
- **Touch Targets**: All interactive elements (arrows, buttons, links) must have a minimum `44px x 44px` physical touch area for mobile thumb usability.
- **Visual Affordances**: If a row scrolls horizontally, ensure the last visible item is partially cut off (peeking ~15-20%) so the user instinctively knows to swipe. Do not rely solely on arrows.
