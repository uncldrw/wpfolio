import type { GlobalConfig } from 'payload'

export const SitemapConfig: GlobalConfig = {
  slug: 'sitemap-config',
  label: 'Sitemap-Konfiguration',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      label: 'Sitemap aktiv',
    },
    {
      name: 'defaultPriority',
      type: 'select',
      defaultValue: '0.5',
      label: 'Standard-Priorität',
      options: [
        { label: '1.0', value: '1.0' },
        { label: '0.9', value: '0.9' },
        { label: '0.8', value: '0.8' },
        { label: '0.7', value: '0.7' },
        { label: '0.5', value: '0.5' },
        { label: '0.3', value: '0.3' },
        { label: '0.1', value: '0.1' },
      ],
    },
    {
      name: 'defaultChangefreq',
      type: 'select',
      defaultValue: 'weekly',
      label: 'Standard-Änderungsfrequenz',
      options: [
        { label: 'Always', value: 'always' },
        { label: 'Hourly', value: 'hourly' },
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
        { label: 'Never', value: 'never' },
      ],
    },
    {
      name: 'excludeCollections',
      type: 'select',
      hasMany: true,
      label: 'Collections aus Sitemap ausschließen',
      options: [
        { label: 'Pages', value: 'pages' },
        { label: 'Posts', value: 'posts' },
      ],
    },
    {
      name: 'customEntries',
      type: 'array',
      label: 'Manuelle Einträge',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
        {
          name: 'priority',
          type: 'select',
          defaultValue: '0.5',
          label: 'Priorität',
          options: [
            { label: '1.0', value: '1.0' },
            { label: '0.9', value: '0.9' },
            { label: '0.8', value: '0.8' },
            { label: '0.7', value: '0.7' },
            { label: '0.5', value: '0.5' },
            { label: '0.3', value: '0.3' },
            { label: '0.1', value: '0.1' },
          ],
        },
        {
          name: 'changefreq',
          type: 'select',
          defaultValue: 'weekly',
          label: 'Änderungsfrequenz',
          options: [
            { label: 'Always', value: 'always' },
            { label: 'Hourly', value: 'hourly' },
            { label: 'Daily', value: 'daily' },
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
            { label: 'Never', value: 'never' },
          ],
        },
      ],
    },
  ],
}
