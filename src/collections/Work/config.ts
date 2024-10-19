import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
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

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },

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
    ...slugField(),
    {
      name: "image",
      type: "upload",
      label: "Featured Image",
      required: true,
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
      hasMany: false,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Is this a featured project?",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "services",
      type: "relationship",
      label: "Services",
      relationTo: "services",
      hasMany: true,
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "projectYear",
      type: "number",
      label: "Project Year",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
  ],

  //* Admin Settings

  admin: {
    useAsTitle: "title",
    description: "All we do is work, work, work.",
    defaultColumns: ["title", "tagline", "status"],
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
