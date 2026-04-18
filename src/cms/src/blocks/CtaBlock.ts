import type { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      type: 'text',
    },
    {
      name: 'buttonLink',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ],
}
