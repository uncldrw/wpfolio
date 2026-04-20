import type { Block } from 'payload'

export const ProjectSliderBlock: Block = {
  slug: 'projectSlider',
  labels: {
    singular: 'Project Slider',
    plural: 'Project Sliders',
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
      name: 'autoplay',
      type: 'checkbox',
      defaultValue: false,
      label: 'Autoplay Slider',
    },
    {
      name: 'slides',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
        },
        {
          name: 'year',
          type: 'text',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Button Label',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Button URL',
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
