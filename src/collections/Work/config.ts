// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import { metaTab } from '@/fields/meta'
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'

export const Work: CollectionConfig = {
  slug: 'work',

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
      label: 'Project Title',
      required: true,
      unique: true,
      admin: {
        description: 'The title of the project as it appears around the site.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
      admin: {
        description: 'The tagline of the project as it appears around the site.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'The description of the project as it appears around the site.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'storyTitle',
              type: 'text',
              label: 'Story Title',
              required: false,
            },
            {
              name: 'storyContent',
              type: 'richText',
              label: 'Story Content',
              required: false,
            },
          ],
        },
        metaTab,
      ],
    },
    ...slugField(),
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: false,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Is this a featured project?',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      label: 'Services',
      relationTo: 'services',
      hasMany: true,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'projectYear',
      type: 'number',
      label: 'Project Year',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'testimonial',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: false,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'projectLink',
      type: 'text',
      label: 'Project Link',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedWorks',
      type: 'relationship',
      label: 'Related Case Studies',
      admin: {
        position: 'sidebar',
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
      hasMany: true,
      required: false,
      relationTo: 'work',
    },
  ],

  //* Admin Settings

  admin: {
    useAsTitle: 'title',
    description: 'All we do is work, work, work.',
    defaultColumns: ['title', 'tagline', 'status'],
    group: 'Portfolio',
    listSearchableFields: ['title', 'tagline'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'work',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'work',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: 'title',
  labels: {
    singular: 'Work',
    plural: 'Works',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
