import type { CollectionConfig } from 'payload'

export const Menus: CollectionConfig = {
  slug: 'menus',
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
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
      name: 'tagline',
      type: 'text',
      label: 'Tagline (für Footer)',
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright-Text (für Footer)',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links (für Footer)',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label (z.B. GitHub)',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon (Emoji oder SVG-Pfad)',
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer-Spalten (mehrspaltig)',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Spalten-Titel',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
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
