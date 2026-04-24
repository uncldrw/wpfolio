import type { CollectionConfig } from 'payload'
import { seoFields } from '../fields/seoFields'
import { HeroBlock } from '../blocks/HeroBlock'
import { AboutBlock } from '../blocks/AboutBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { CtaBlock } from '../blocks/CtaBlock'
import { PricingBlock } from '../blocks/PricingBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { LogoBandBlock } from '../blocks/LogoBandBlock'
import { ProjectsGalleryBlock } from '../blocks/ProjectsGalleryBlock'
import { ProjectSliderBlock } from '../blocks/ProjectSliderBlock'
import { SkillsBlock } from '../blocks/SkillsBlock'
import { TimelineBlock } from '../blocks/TimelineBlock'
import { ServicesBlock } from '../blocks/ServicesBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
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
      blocks: [
        HeroBlock,
        AboutBlock,
        FeaturesBlock,
        TestimonialsBlock,
        CtaBlock,
        PricingBlock,
        StatsBlock,
        LogoBandBlock,
        ProjectsGalleryBlock,
        ProjectSliderBlock,
        SkillsBlock,
        TimelineBlock,
        ServicesBlock,
      ],
    },
    seoFields,
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
