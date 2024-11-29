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

export const Playground: CollectionConfig = {
  slug: 'play',

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
      label: 'Title',
      required: true,
      unique: true,
      admin: {
        description: 'Add the title of the Playground case study here.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        description: 'Add the tagline for the playground here.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Add the description for the playground here.',
      },
    },

    // {
    //   type: 'tabs',
    //   tabs: [metaTab],
    // },
    // ...slugField(),
    // {
    //   name: 'publishedOn',
    //   type: 'date',
    //   required: false,
    //   label: 'Published On',
    //   admin: {
    //     position: 'sidebar',
    //     date: {
    //       pickerAppearance: 'dayAndTime',
    //     },
    //   },
    //   hooks: {
    //     beforeChange: [
    //       ({ siblingData, value }) => {
    //         if (siblingData._status === 'published' && !value) {
    //           return new Date()
    //         }
    //         return value
    //       },
    //     ],
    //   },
    // },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'relatedPlaygrounds',
    //   type: 'relationship',
    //   label: 'Related Playgrounds',
    //   admin: {
    //     position: 'sidebar',
    //     description: 'Add the related playgrounds here.',
    //   },
    //   filterOptions: ({ id }) => {
    //     return {
    //       id: {
    //         not_in: [id],
    //       },
    //     }
    //   },
    //   hasMany: true,
    //   relationTo: 'play',
    // },
  ],

  //* Admin Settings

  admin: {
    description: 'Interior Brewww projects',
    defaultColumns: ['title'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    // livePreview: {
    //   url: ({ data }) => {
    //     const path = generatePreviewPath({
    //       slug: typeof data?.slug === 'string' ? data.slug : '',
    //       collection: 'play',
    //     })

    //     return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    //   },
    // },
    // preview: (data) => {
    //   const path = generatePreviewPath({
    //     slug: typeof data?.slug === 'string' ? data.slug : '',
    //     collection: 'play',
    //   })

    //   return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    // },
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Playground',
    plural: 'Playground',
  },

  hooks: {
    afterRead: [
      ({ doc }) => {
        if (doc.publishedOn && typeof doc.publishedOn === 'object' && '$date' in doc.publishedOn) {
          doc.publishedOn = new Date(doc.publishedOn.$date)
        }
        return doc
      },
    ],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
