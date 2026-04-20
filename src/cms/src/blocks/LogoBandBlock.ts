import type { Block } from 'payload'

export const LogoBandBlock: Block = {
  slug: 'logoBand',
  labels: {
    singular: 'Logo Band',
    plural: 'Logo Bands',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}
