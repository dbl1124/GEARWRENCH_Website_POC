---
description: Apply premium CSS physics and micro-interactions to all interactive elements.
---
# Premium Micro-Interactions Pattern

When building interactive UI components, apply the following GearWrench premium interaction rules:

- **Hover Scaling**: All clickable cards should have a subtle physics lift. Use `transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`. Images inside cards should slowly scale `group-hover:scale-105 duration-700`.
- **Button Hover States**: Primary CTA buttons should feature a bold background sweep or robust color inversion. DO NOT just change opacity. Use distinct `hover:bg-brand-black hover:text-white` inversions with a smooth `transition-colors duration-300`.
- **Carousel Physics**: Sliders should feel kinetic. Use `snap-mandatory snap-x` for native CSS snap scrolling, and hide standard scrollbars explicitly (or use highly styled custom webkit tracks). Ensure edge-bleeding carousels encourage native horizontal swiping.
- **Active States**: Focus and active states on buttons should have a subtle `active:scale-95` to give a tactile physical click feel.
