---
description: Enforce the GearWrench Global Typography Scale and font weights.
---
# Typography Scale Enforcer

Strictly adhere to the following typographic hierarchy mapped to Tailwind v4:

- **Global Font**: The primary brand font is `Akrobat`. Ensure `font-sans` is globally applied or inherited.
- **Eyebrow / Kicker text**: `text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-brand-orange` (or `text-brand-black` depending on context).
- **H1 (Hero)**: `text-5xl md:text-7xl lg:text-[81px] font-extrabold uppercase tracking-tight leading-none`.
- **H2 (Section Headers)**: `text-4xl md:text-5xl font-black uppercase tracking-tight m-0`.
- **H3 (Card Titles)**: `text-2xl font-bold uppercase tracking-normal`.
- **Body Text**: `text-base md:text-lg font-medium leading-relaxed max-w-2xl` (use `text-white/90` on dark backgrounds, `text-gray-800` on light).
- **CTA Links**: `text-lg font-bold uppercase tracking-[0.1em] text-brand-orange hover:text-brand-black transition-colors duration-300`.
