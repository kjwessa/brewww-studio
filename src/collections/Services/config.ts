// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import {
  PreviewField,
  OverviewField,
  MetaTitleField,
  MetaImageField,
  MetaDescriptionField,
} from '@payloadcms/plugin-seo/fields'

// Hooks
import { revalidateService, revalidateDelete } from './hooks/revalidateService'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

// Utilities
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'
import { HeadingFeature } from '@payloadcms/richtext-lexical'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Services: CollectionConfig = {
  slug: 'services',

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
      type: 'text',
      label: 'Service Title',
      required: true,
      unique: true,
      admin: {
        description: 'The name of the service as it appears around the site.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        description: 'The tagline of the service as it appears around the site.',
      },
    },
    ...slugField(),
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'The description of the service as it appears around the site.',
      },
    },
    {
      name: 'overview',
      type: 'richText',
      label: 'Overview',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HeadingFeature({})],
      }),
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      required: false,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'pillars',
      hasMany: false,
    },
    {
      label: ({ data }) => data?.title || 'Advanced',
      type: 'collapsible',
      admin: {
        initCollapsed: false,
        description: 'Advanced settings for the service',
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
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'services',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'services',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: '-title',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateService],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
