// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Results: CollectionConfig = {
  slug: 'results',

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
      label: 'Result Title',
      required: true,
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'brands',
      required: false,
    },
    { name: 'number', type: 'text', label: 'Number', required: false },
    { name: 'support', type: 'text', label: 'Support', required: false },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
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
  defaultSort: '-title',
  labels: {
    singular: 'Result',
    plural: 'Results',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
