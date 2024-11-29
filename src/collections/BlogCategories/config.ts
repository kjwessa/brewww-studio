// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'

// Fields
import { slugField } from '@/fields/slug'
import { PreviewField, OverviewField, MetaTitleField, MetaImageField, MetaDescriptionField } from '@/fields/meta'

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
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Meta',
          fields: [
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaDescriptionField({}),
          ],
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title'],
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
