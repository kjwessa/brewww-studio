// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',

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
      admin: {
        description: 'Add the title of the testimonial here.',
      },
    },
    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       label: 'Content',
    //       fields: [
    //         {
    //           name: 'callout',
    //           type: 'textarea',
    //           label: 'Callout',
    //           required: false,
    //           admin: {
    //             description: 'Add a short excerpt of the testimonial here.',
    //           },
    //         },
    //         {
    //           name: 'testimonial',
    //           type: 'richText',
    //           label: 'Full Testimonial',
    //           required: false,
    //           admin: {
    //             description: 'Add the full testimonial content here. ',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Meta',
    //       fields: [
    //         {
    //           name: 'brand',
    //           type: 'relationship',
    //           relationTo: 'brands',
    //           required: false,
    //           hasMany: false,
    //           unique: true,
    //           admin: {
    //             position: 'sidebar',
    //             description: 'Select the client that left the testimonial.',
    //           },
    //         },
    //         {
    //           name: 'author',
    //           type: 'text',
    //           label: 'Testimonial Author',
    //           unique: true,
    //           required: false,
    //           admin: {
    //             description: 'Add the name of the person that left the testimonial',
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],

  //* Admin Settings

  admin: {
    description: 'Kind clients saying kind things.',
    defaultColumns: ['title'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
