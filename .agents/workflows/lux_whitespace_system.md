---
description: Enforce premium negative space, padding, and layout grids.
---
# Lux Whitespace System

To maintain a luxury enterprise aesthetic:

- **Section Padding**: Standard vertical breathing room between major architectural sections must be `py-20 md:py-24` or larger. Do NOT cramp components.
- **Global Container**: Center primary content using `max-w-[1480px] mx-auto px-6`. Let specific elements (like continuous carousels or background colors) bleed full viewport width `w-full`.
- **Inner Component Gaps**: Use substantial gaps (`gap-4 md:gap-8 lg:gap-12`) in CSS grids and flex layouts to let elements breathe.
- **Edge Bleeds**: For edge-to-edge image carousels, utilize viewport math `calc((100vw - 1480px) / 2 + 1.5rem)` to align the left-start edge to the 1480px global rail, but allow items to bleed freely off the right side of the screen.
