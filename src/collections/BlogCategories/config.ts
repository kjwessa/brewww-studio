// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'

// Fields
import { slugField } from '@/fields/slug'

export const BlogCategories: CollectionConfig = {
  slug: 'categories',

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
      label: 'Category Title',
      unique: true,
      required: true,
      admin: {
        description: 'The title of the category as it appears around the site.',
      },
    },
    ...slugField(),
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status'],
    group: 'Blog Posts',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
