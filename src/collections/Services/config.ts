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
    {
      name: 'excludeFromSitemap',
      type: 'checkbox',
      label: 'Exclude from Sitemap',
      defaultValue: true,
      admin: {
        description: 'If checked, this service will not appear in the sitemap',
        position: 'sidebar',
      },
    },
    ...slugField(),
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
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title'],
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
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
