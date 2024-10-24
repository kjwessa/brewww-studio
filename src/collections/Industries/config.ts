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

export const Industries: CollectionConfig = {
  slug: "industries",

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
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the industry here.",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: false,
      admin: {
        description: "Add the tagline for the industry here.",
      },
    },
    ...slugField(),
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      admin: {
        description: "Add the description of the industry here.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "Content",
          fields: [],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [
            {
              name: "services",
              type: "relationship",
              relationTo: "services",
              label: "Services",
              required: false,
              admin: {
                description: "Add the services for the industry here.",
              },
            },
          ],
        },
        {
          name: "seo",
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
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
  ],

  //* Admin Settings

  admin: {
    description: "Industries of Brewww",
    defaultColumns: ["title", "updatedAt"],
    group: "Service",
    listSearchableFields: ["title", "description"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Industry",
    plural: "Industries",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
