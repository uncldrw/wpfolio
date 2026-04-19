import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  labels: {
    singular: 'Kontaktanfrage',
    plural: 'Kontaktanfragen',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt', 'read'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-Mail',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Nachricht',
    },
    {
      name: 'read',
      type: 'checkbox',
      defaultValue: false,
      label: 'Gelesen',
    },
  ],
  timestamps: true,
}
