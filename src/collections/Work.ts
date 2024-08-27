import type { CollectionConfig } from "payload";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const Work: CollectionConfig = {
  slug: "work",

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            { name: "name", type: "text", label: "Name", required: true },
            {
              name: "thumbnail",
              type: "upload",
              label: "Thumbnail",
              required: false,
              relationTo: "media",
              admin: {
                description:
                  "This image appears on the WorkCard thumbnail images.",
              },
            },
            {
              name: "testimonial",
              type: "relationship",
              relationTo: "testimonials",
              hasMany: false,
              required: false,
              admin: {
                description: "If a testimonial exists, add it here.",
              },
            },
            {
              name: "client",
              type: "relationship",
              relationTo: "clients",
              hasMany: false,
              required: true,
              admin: {
                description: "Add the connected client here. ",
              },
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },

    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: false,
      admin: { position: "sidebar" },
    },
  ],

  //* Admin Settings
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    description: "All we do is work, work, work.",
    defaultColumns: ["name", "testimonial"],
    group: "Portfolio",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: "name",
  labels: {
    singular: "Work",
    plural: "Works",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
