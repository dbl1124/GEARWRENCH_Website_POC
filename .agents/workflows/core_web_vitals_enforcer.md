---
description: Enforce Next.js Core Web Vitals optimization rules for images and rendering.
---
# Core Web Vitals Enforcer

Strictly enforce Next.js performance and SEO rules:

- **next/image**: ALL images must use the Next.js `<Image />` component. NEVER use standard HTML `<img>` tags.
- **Prevent Layout Shift**: If using `fill`, the parent container must have `relative` positioning and explicit aspect ratios or heights. If not using `fill`, provide exact `width` and `height` integer props.
- **Lazy Loading**: Ensure below-the-fold images use native lazy loading. Above-the-fold images (e.g., Hero images) must have `priority={true}` attached to prevent slow LCP rendering.
- **Responsive Sizes**: Always define a `sizes` prop on responsive full-width slider images, e.g., `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`.
