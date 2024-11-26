// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Media: CollectionConfig = {
  slug: 'media',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: false,
      admin: {
        description: 'This is the alt text for the image',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
      admin: {
        description:
          'This is the caption for the image. Optional, but helpful for Blog Posts requiring a caption.',
      },
    },
  ],

  //* Admin Settings
  admin: {
    listSearchableFields: ['url', 'alt'],
  },
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'full',
        width: 2600,
      },
    ],
  },
}
