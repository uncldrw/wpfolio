import type { Block } from 'payload'

export const ProjectsGalleryBlock: Block = {
  slug: 'projectsGallery',
  labels: {
    singular: 'Projects Gallery',
    plural: 'Projects Galleries',
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
      name: 'showFilters',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Category Filters',
    },
    {
      name: 'projects',
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
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category (e.g. Web, Mobile, Design)',
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
        {
          name: 'link',
          type: 'text',
          label: 'Project URL',
        },
        {
          name: 'githubLink',
          type: 'text',
          label: 'GitHub URL',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          label: 'Featured Project',
        },
      ],
    },
  ],
}
