// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Hooks
import { revalidateLocation, revalidateDelete } from './hooks/revalidateLocation'

// Utilities
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Location: CollectionConfig = {
  slug: 'locations',

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
      label: 'Location Title',
      required: true,
      unique: true,
      admin: {
        description: 'The title of the location as it appears around the site.',
      },
    },
    {
      name: 'heroDescription',
      type: 'richText',
      label: 'Hero Description',
      required: true,
      admin: {
        description: 'The hero description of the location. Will later be replaced with blocks.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'locationCity',
          type: 'text',
          label: 'Location City',
          required: true,
          admin: {
            description: 'The city of the location.',
          },
        },
        {
          name: 'locationState',
          type: 'text',
          label: 'Location State',
          required: true,
          admin: {
            description: 'The state of the location.',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      label: ({ data }) => data?.title || 'Advanced',
      type: 'collapsible',
      admin: {
        initCollapsed: false,
        description: 'Advanced settings for the Location',
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

    ...slugField(),
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title', 'locationCity', 'locationState'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'locations',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'locations',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'locationCity',
  labels: {
    singular: 'Location',
    plural: 'Locations',
  },
  hooks: {
    afterChange: [revalidateLocation],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
