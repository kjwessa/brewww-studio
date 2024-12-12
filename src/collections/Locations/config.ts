// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

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
        description: 'The hero description of the location.',
      },
    },
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
    {
      name: 'heroTitle',
      type: 'text',
      label: 'DELETE - Hero Title',
      required: false,
      admin: {
        description: 'The hero title of the location as it appears around the site.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'The featured image displayed at the top of the location page.',
      },
    },

    ...slugField(),
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title', 'locationCity', 'locationState'],
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
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
