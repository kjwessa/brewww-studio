import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";
import { slugField } from "@/fields/slug";

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
      name: "title",
      type: "text",
      label: "Project Title",
      required: true,
      unique: true,
      admin: {
        description: "The title of the project as it appears around the site.",
      },
    },
    ...slugField(),
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "thumbnail",
              type: "upload",
              label: "Thumbnail",
              required: true,
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
          ],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [
            {
              name: "client",
              type: "relationship",
              relationTo: "clients",
              hasMany: false,
              required: true,
              admin: {
                description: "Add the name of the client here.",
              },
            },
            {
              name: "relatedWorks",
              type: "relationship",
              label: "Related Case Studies",
              admin: {
                position: "sidebar",
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              required: false,
              relationTo: "work",
            },
          ],
        },
        {
          name: "seo",
          label: "SEO",
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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
    description: "All we do is work, work, work.",
    defaultColumns: ["title", "testimonial"],
    group: "Portfolio",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: "title",
  labels: {
    singular: "Work",
    plural: "Works",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
