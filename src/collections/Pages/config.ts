// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Imports
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Field Imports
import { slugField } from '@/fields/slug'
import { PreviewField, OverviewField, MetaTitleField, MetaImageField, MetaDescriptionField } from '@/fields/meta'

// Block Imports
import { MediaBlock } from '@/blocks/MediaBlock/config'

// Utilities Imports
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'

export const Pages: CollectionConfig = {
  slug: 'pages',

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
      label: 'Title',
      type: 'text',
      required: false,
      admin: {
        description: 'The title of the page.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: 'Layout',
              required: false,
              blocks: [MediaBlock],
            },
          ],
        },
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
    ...slugField(),
  ],

  //* Admin Settings

  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
