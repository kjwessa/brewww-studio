// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'

export const Brands: CollectionConfig = {
  slug: 'brands',

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
      label: 'Brand Name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Add the client name as it will appear around the site.',
      },
    },
    {
      name: 'logoLight',
      label: 'Logo Light',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Add the light version of the logo that appears on dark backgrounds',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          label: 'City',
          type: 'text',
          required: false,
          admin: {
            description: 'The closest major city to the client.',
          },
        },
        {
          name: 'state',
          label: 'State',
          type: 'text',
          required: false,
          admin: {
            description: 'The state where the client is based.',
          },
        },
      ],
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Brand',
    plural: 'Brands',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
