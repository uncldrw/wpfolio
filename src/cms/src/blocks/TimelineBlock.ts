import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timeline',
  labels: {
    singular: 'Timeline',
    plural: 'Timelines',
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
      name: 'items',
      type: 'array',
      required: true,
      label: 'Timeline Items',
      fields: [
        {
          name: 'date',
          type: 'text',
          required: true,
          label: 'Date / Period (e.g. 2021 - 2023)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          label: 'Company / Institution',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'type',
          type: 'select',
          defaultValue: 'work',
          options: [
            { label: 'Work', value: 'work' },
            { label: 'Education', value: 'education' },
            { label: 'Project', value: 'project' },
            { label: 'Achievement', value: 'achievement' },
          ],
        },
        {
          name: 'skills',
          type: 'text',
          label: 'Skills used (comma-separated)',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link (optional)',
        },
      ],
    },
  ],
}
