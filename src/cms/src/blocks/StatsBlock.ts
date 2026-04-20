import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
  labels: {
    singular: 'Stats',
    plural: 'Stats',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'indigo',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Indigo', value: 'indigo' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
}
