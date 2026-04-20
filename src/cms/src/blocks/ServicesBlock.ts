import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  labels: {
    singular: 'Services',
    plural: 'Services',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'cards',
      options: [
        { label: 'Cards', value: 'cards' },
        { label: 'List', value: 'list' },
        { label: 'Split', value: 'split' },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'Global CTA Label (optional)',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Global CTA Link (optional)',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Emoji or Icon',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'highlights',
          type: 'array',
          label: 'Key Highlights / Bullet Points',
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          defaultValue: false,
          label: 'Highlight this service',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Service CTA Label',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Service CTA Link',
        },
      ],
    },
  ],
}
