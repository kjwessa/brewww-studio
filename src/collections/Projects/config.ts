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
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
