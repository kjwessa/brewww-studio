// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

// SEO Fields
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pillars: CollectionConfig = {
  slug: 'pillars',

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
      label: 'Title',
      required: true,
      unique: true,
      admin: {
        description: 'Add the title of the pillar here.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        description: 'Add the tagline for the pillar here.',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      label: 'Services',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
    // {
    //   name: 'description',
    //   type: 'textarea',
    //   label: 'Description',
    //   required: false,
    //   admin: {
    //     description: 'Add the description of the pillar here.',
    //   },
    // },
    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       name: 'content',
    //       label: 'Content',
    //       fields: [],
    //     },
    //     {
    //       name: 'metadata',
    //       label: 'Meta',
    //       fields: [],
    //     },
    //     {
    //       name: 'seo',
    //       label: 'SEO',
    //       fields: [
    //         OverviewField({
    //           titlePath: 'meta.title',
    //           descriptionPath: 'meta.description',
    //           imagePath: 'meta.image',
    //         }),
    //         MetaImageField({
    //           relationTo: 'media',
    //         }),
    //         MetaTitleField({
    //           hasGenerateFn: true,
    //         }),
    //         MetaDescriptionField({}),
    //         PreviewField({
    //           hasGenerateFn: true,
    //           titlePath: 'meta.title',
    //           descriptionPath: 'meta.description',
    //         }),
    //       ],
    //     },
    //   ],
    // },
  ],

  //* Admin Settings

  admin: {
    description: 'Pillars of Brewww',
    defaultColumns: ['title', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Pillar',
    plural: 'Pillars',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
