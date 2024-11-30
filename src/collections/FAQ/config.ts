// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const FAQ: CollectionConfig = {
  slug: 'faq',

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
      label: 'Question',
      required: true,
      unique: true,
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Answer',
      required: true,
    },
  ],

  //* Admin Settings

  admin: {
    description: 'Frequently asked questions',
    defaultColumns: ['title'],
    group: 'Company',
    listSearchableFields: ['title'],

    useAsTitle: 'title',
  },
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
