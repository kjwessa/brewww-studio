// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

export const Team: CollectionConfig = {
  slug: 'team',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
      label: 'Full Name',
    },
    ...slugField(),
    {
      name: 'role',
      type: 'text',
      required: false,
      label: 'Role',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      admin: {
        position: 'sidebar',
      },
    },
  ],

  //* Admin Settings

  admin: {
    description: 'Our team of experts.',
    defaultColumns: ['title'],
    group: 'Company',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: 'title',
  },
  defaultSort: '-title',
  labels: {
    singular: 'Team Member',
    plural: 'Team',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
