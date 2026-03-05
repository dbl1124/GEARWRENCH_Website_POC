import { defineType, defineField } from 'sanity'

export const heroBlock = defineType({
    name: 'heroBlock',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
        }),
        defineField({
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'string',
        }),
    ],
})
