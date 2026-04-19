import type { CollectionConfig } from 'payload'

export const Menus: CollectionConfig = {
  slug: 'menus',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Menu Name',
    },
    {
      name: 'identifier',
      type: 'text',
      required: true,
      unique: true,
      label: 'Identifier (z.B. "main-nav", "footer")',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Menu Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL (extern oder intern)',
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Seiten-Referenz',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          label: 'In neuem Tab öffnen (_blank)',
        },
        {
          name: 'children',
          type: 'array',
          label: 'Untermenü',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
            },
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Seiten-Referenz',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              defaultValue: false,
              label: 'In neuem Tab öffnen (_blank)',
            },
          ],
        },
      ],
    },
  ],
}
