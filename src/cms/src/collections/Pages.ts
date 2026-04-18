import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { AboutBlock } from '../blocks/AboutBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { CtaBlock } from '../blocks/CtaBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, AboutBlock, FeaturesBlock, TestimonialsBlock, CtaBlock],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
