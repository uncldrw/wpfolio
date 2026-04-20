import type { Block } from 'payload'

export const PricingBlock: Block = {
  slug: 'pricing',
  labels: {
    singular: 'Pricing',
    plural: 'Pricing',
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
      name: 'tiers',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'period',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'included',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'ctaLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'ctaLink',
          type: 'text',
          required: true,
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}
