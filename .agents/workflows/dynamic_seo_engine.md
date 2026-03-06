---
description: Automatically inject Next.js metadata and JSON-LD for rich snippet rankings.
---
# Dynamic SEO Engine

Outrank competitors by injecting rich structural data deep into every route:

- **Next.js Metadata API**: Every Next.js `page.tsx` must export a `Metadata` object containing a highly descriptive `title` and `description` string for standard search engine indexing.
- **OpenGraph**: Automatically include OpenGraph map `openGraph: { title, description, images }` tailored to the specific route so social shares and Slack messages render premium embeds.
- **JSON-LD Schema**: E-commerce items (Products, Categories, Reviews) MUST include a `<script type="application/ld+json">` tag in the DOM containing valid schema.org JSON-LD structured data. This allows Google to instantly parse exact price, stock status, and rating stars for rich UI search results.
