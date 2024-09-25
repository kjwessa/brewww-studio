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

export const Pillars: CollectionConfig = {
  slug: "pillars",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the pillar here.",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: true,
      admin: {
        description: "Add the tagline for the pillar here.",
      },
    },
    ...slugField(),
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      admin: {
        description: "Add the description of the pillar here.",
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
                description: "Add the services for the pillar here.",
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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    description: "Pillars of Brewww",
    defaultColumns: ["title", "updatedAt"],
    group: "Services",
    listSearchableFields: ["title", "description"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Pillar",
    plural: "Pillars",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
