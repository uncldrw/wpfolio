import type { CollectionConfig } from 'payload'

export const PluginConfigs: CollectionConfig = {
  slug: 'plugin-configs',
  labels: {
    singular: 'Plugin-Konfiguration',
    plural: 'Plugin-Konfigurationen',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'enabled', 'updatedAt'],
    description:
      'Verwalte externe Plugins und Integrationen (Cloudinary, Imgix, Analytics, CDN etc.)',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Plugin-Name (z.B. "cloudinary", "imgix")',
    },
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: false,
      label: 'Aktiv',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      name: 'config',
      type: 'code',
      label: 'Konfiguration (JSON)',
      admin: {
        language: 'json',
        description: 'Plugin-Konfiguration als JSON-Objekt. Wird zur Laufzeit geparst.',
      },
    },
  ],
  timestamps: true,
}
