// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { slugField } from '@/fields/slug'

// Utilities & Hooks
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { populatePublishedOn } from '@/hooks/populatePublishedOn'
import { revalidatePost } from './hooks/revalidatePost'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

import { BlocksFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const BlogPosts: CollectionConfig = {
  slug: 'posts',

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
      label: 'Post Title',
      unique: true,
      required: true,
      admin: {
        description: 'The title of the article as it appears around the site.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Post Tagline',
      required: false,
      admin: {
        description: 'The tagline of the article as it appears around the site.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Post Description',
      required: false,
      admin: {
        description: 'The description of the article as it appears around the site.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HeadingFeature({
                    enabledHeadingSizes: ['h2', 'h3', 'h4'],
                  }),
                  BlocksFeature({
                    blocks: [],
                  }),
                ],
              }),
              label: false,
              required: true,
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
              required: true,
            },
          ],
        },
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
      name: 'publishedOn',
      type: 'date',
      required: true,
      label: 'Published On',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readTime',
      type: 'number',
      required: false,
      label: 'Read Time',
      admin: {
        position: 'sidebar',
      },
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', 'publishedOn', 'updatedAt'],
    group: 'Blog Posts',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
    pagination: {
      defaultLimit: 100,
      limits: [25, 50, 100],
    },
    useAsTitle: 'title',
  },

  defaultSort: '-publishedOn',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
  hooks: {
    beforeChange: [populatePublishedOn, setMetaImageFallback],
    afterChange: [revalidatePost],
  },
}
