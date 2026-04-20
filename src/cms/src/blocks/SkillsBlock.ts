import type { Block } from 'payload'

export const SkillsBlock: Block = {
  slug: 'skills',
  labels: {
    singular: 'Skills',
    plural: 'Skills',
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
      defaultValue: 'grid',
      options: [
        { label: 'Grid (mit Balken)', value: 'grid' },
        { label: 'Bubbles (Tags)', value: 'bubbles' },
        { label: 'Icons Grid', value: 'icons' },
      ],
    },
    {
      name: 'skillGroups',
      type: 'array',
      required: true,
      label: 'Skill Groups',
      fields: [
        {
          name: 'groupName',
          type: 'text',
          required: true,
          label: 'Group Name (e.g. Frontend, Backend)',
        },
        {
          name: 'skills',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'level',
              type: 'number',
              label: 'Level (0-100)',
              min: 0,
              max: 100,
            },
            {
              name: 'icon',
              type: 'text',
              label: 'Emoji or Icon class',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo (optional)',
            },
          ],
        },
      ],
    },
  ],
}
