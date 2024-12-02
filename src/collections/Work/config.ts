// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

import { generatePreviewPath } from '@root/utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

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
      required: false,
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
    {
      type: 'tabs',
      tabs: [
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    ...slugField(),
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      required: false,
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
      required: false,
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
      name: 'projectLink',
      type: 'text',
      label: 'Project Link',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],

  //* Admin Settings

  admin: {
    useAsTitle: 'title',
    description: 'All we do is work, work, work.',
    defaultColumns: ['title'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
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
