// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

// Hooks
import { revalidateProject, revalidateDelete } from './hooks/revalidateProject'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

import { generatePreviewPath } from '@root/utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Projects: CollectionConfig = {
  slug: 'projects',

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
      name: 'snippet',
      type: 'text',
      label: 'Project Snippet',
      required: false,
      admin: {
        description: 'The snippet of the project as it appears around the site.',
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
      name: 'archiveStory',
      type: 'textarea',
      label: 'The Story - Archived Content',
      required: false,
      admin: {
        description: 'The archived Story content of the project from the original project.',
      },
    },
    {
      name: 'archiveDetails',
      type: 'textarea',
      label: 'The Details - Archived Content',
      required: false,
      admin: {
        description: 'The archived Details content of the project from the original project.',
      },
    },
    {
      name: 'archiveProcess',
      type: 'textarea',
      label: 'The Process - Archived Content',
      required: false,
      admin: {
        description: 'The archived Process content of the project from the original project.',
      },
    },
    {
      name: 'archiveResults',
      type: 'textarea',
      label: 'The Results - Archived Content',
      required: false,
      admin: {
        description: 'The archived Results content of the project from the original project.',
      },
    },
    {
      name: 'archiveHighlights',
      type: 'textarea',
      label: 'The Highlights - Archived Content',
      required: false,
      admin: {
        description: 'The archived Highlights content of the project from the original project.',
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
      name: 'projectLink',
      type: 'text',
      label: 'Project Link',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },

    {
      label: ({ data }) => data?.title || 'Advanced',
      type: 'collapsible',
      admin: {
        initCollapsed: false,
        description: 'Advanced settings for the Project',
      },
      fields: [
        {
          name: 'excludeFromSitemap',
          type: 'checkbox',
          label: 'Exclude from Sitemap',
          defaultValue: true,
        },
      ],
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
  ],

  //* Admin Settings

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'projects',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'projects',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
  },
  defaultSort: 'title',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateProject],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
