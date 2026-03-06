---
description: Sanity CMS Schema definition rules for Visual Editing mapping.
---
# Sanity Schema Generator

When building UI components intended for the homepage or marketing pages:

- **Component Prop Mapping**: Ensure the React component accepts an array or object containing strings/images.
- **Schema Parity**: Companion Sanity schemas must match the React props exactly. Example: If React expects `title` and `subtext`, Sanity field names must be `title` and `subtext`.
- **Preview Prepare**: Always configure the `preview` block in Sanity schemas to pull the `title` and `media` (image) so marketers can easily identify blocks in the CMS outline tree view.
