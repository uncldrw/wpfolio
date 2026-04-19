import type { Field } from 'payload'

export const seoFields: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'SEO Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
    },
    {
      name: 'ogTitle',
      type: 'text',
      label: 'OG Title',
    },
    {
      name: 'ogDescription',
      type: 'textarea',
      label: 'OG Description',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'OG Image',
    },
    {
      name: 'canonicalUrl',
      type: 'text',
      label: 'Canonical URL',
    },
    {
      name: 'noindex',
      type: 'checkbox',
      defaultValue: false,
      label: 'noindex (aus Suchmaschinen ausschließen)',
    },
  ],
}
