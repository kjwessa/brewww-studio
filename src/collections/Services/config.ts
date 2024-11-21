// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import { metaTab } from '@/fields/meta'

// Utilities
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'

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
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'The description of the service as it appears around the site.',
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'overview',
              type: 'richText',
              label: 'Overview Test',
              required: false,
            },
          ],
        },
        {
          name: 'metadata',
          label: 'Meta',
          fields: [],
        },
        metaTab,
      ],
    },
  ],

  //* Admin Settings

  admin: {
    description: 'How we help people. Be specific.',
    defaultColumns: ['title'],
    group: 'Service',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'services',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'services',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
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
