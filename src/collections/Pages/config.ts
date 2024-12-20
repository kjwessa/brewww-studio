// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Imports
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Hooks Imports
import { revalidatePage, revalidateDelete } from './hooks/revalidatePage'

// Field Imports
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Block Imports
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Banner } from '@/blocks/Banner/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { LandingAbout } from '@/blocks/LandingAbout/config'
import { LandingHero } from '@/heros/LandingHero/config'
import { LandingWork } from '@/blocks/LandingWork/config'
import { LandingFooter } from '@/blocks/LandingFooter/config'
import { LandingService } from '@/blocks/LandingService/config'
import { LandingImage } from '@/blocks/LandingImage/config'
import { FormBlock } from '@/blocks/Form/config'
import { BeforeAfterSlider } from '@/blocks/BeforeAfterSlider/config'
import { TestimonialBlock } from '@/blocks/Testimonial/config'
import { FAQ } from '@/blocks/FAQ/config'

// Utilities Imports
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Pages: CollectionConfig = {
  slug: 'pages',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      unique: true,
    },
    ...slugField(),
    {
      label: ({ data }) => data?.title || 'Advanced',
      type: 'collapsible',
      admin: {
        initCollapsed: false,
        description: 'Advanced settings for the Page',
      },
      fields: [
        {
          name: 'excludeFromSitemap',
          type: 'checkbox',
          label: 'Exclude from Sitemap',
          defaultValue: false,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [LandingHero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: 'Layout',
              required: false,
              blocks: [
                MediaBlock,
                FormBlock,
                Banner,
                CallToAction,
                LandingAbout,
                LandingWork,
                LandingFooter,
                LandingService,
                LandingImage,
                BeforeAfterSlider,
                TestimonialBlock,
                FAQ,
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => {
        return generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })
      },
    },
    preview: (data, { req }) => {
      return generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      })
    },
  },
  hooks: {
    beforeDelete: [revalidateDelete],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
