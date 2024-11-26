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
    // {
    //   name: 'location',
    //   type: 'text',
    //   label: 'Location',
    //   required: false,
    //   admin: {
    //     description: 'The location of the location as it appears around the site.',
    //   },
    // },
    // {
    //   name: 'heroTitle',
    //   type: 'text',
    //   label: 'Hero Title',
    //   required: false,
    //   admin: {
    //     description: 'The hero title of the location as it appears around the site.',
    //   },
    // },
    // {
    //   name: 'heroImage',
    //   type: 'upload',
    //   label: 'Hero Image',
    //   relationTo: 'media',
    //   required: false,
    //   admin: {
    //     description: 'The hero image displayed at the top of the location page.',
    //   },
    // },
    // {
    //   name: 'heroDescription',
    //   type: 'richText',
    //   label: 'Hero Description',
    //   required: false,
    //   admin: {
    //     description: 'The hero description of the location.',
    //   },
    // },
    ...slugField(),
  ],

  //* Admin Settings

  admin: {
    description: 'Landing pages for locations',
    group: 'Service',
    useAsTitle: 'title',
  },

  labels: {
    singular: 'Location',
    plural: 'Locations',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
