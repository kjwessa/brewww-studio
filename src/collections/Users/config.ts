// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control

import { authenticated } from '@/access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',

  //TODO Remove the FULL NAME on the MONGO side

  //* Access Settings
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true,
        },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
}
