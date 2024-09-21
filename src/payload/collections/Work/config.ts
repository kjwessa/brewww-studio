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

  //* Collection Fields
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
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: true,
      admin: {
        description:
          "The tagline of the project as it appears around the site.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      admin: {
        description:
          "The description of the project as it appears around the site.",
      },
    },
    {
      name: "imageMain",
      type: "upload",
      label: "Main Image",
      required: true,
      relationTo: "media",
      admin: {
        description: "This image appears on the site.",
      },
    },
    ...slugField(),
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
      hasMany: false,
      required: true,
      admin: {
        position: "sidebar",
        description: "Add the name of the brand here.",
      },
    },

    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [
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
    defaultColumns: ["title", "tagline"],
    group: "Portfolio",
    listSearchableFields: ["title", "tagline"],
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
