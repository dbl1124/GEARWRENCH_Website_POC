---
description: Apply premium glassmorphism, shadows, and z-index layering rules.
---
# Glass & Depth Layering

To prevent visual flatness and maintain an enterprise feel:

- **Drop Shadows**: Standard box shadows are too harsh. Use `shadow-[0_4px_12px_rgba(0,0,0,0.15)]` on floating elements (arrows, popups, sticky navs) to give them deep, soft elevation.
- **Glassmorphism**: When laying text over complex or variable-color photography, do not just use aggressive flat dark backgrounds. Use Tailwind's `backdrop-blur` utilities. Example: `bg-black/40 backdrop-blur-md` to maintain legibility while letting the image color peek through natively.
- **Gradient Fades**: Images inside carousels or cards that have text overlay should use subtle CSS gradients `bg-gradient-to-b from-black/80 via-black/20 to-transparent` to ensure high contrast without ruining the lower half of the underlying photograph.
