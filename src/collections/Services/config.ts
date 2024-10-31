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

export const Services: CollectionConfig = {
  slug: "services",

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
      label: "Service Title",
      required: true,
      unique: true,
      admin: {
        description: "The name of the service as it appears around the site.",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: false,
      admin: {
        description:
          "The tagline of the service as it appears around the site.",
      },
    },

    ...slugField(),
    {
      name: "image",
      type: "upload",
      label: "Featured Image",
      required: false,
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      admin: {
        description:
          "The description of the service as it appears around the site.",
      },
    },

    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "overview",
              type: "richText",
              label: "Overview Test",
              required: false,
            },
          ],
        },
        {
          name: "metadata",
          label: "Meta",
          fields: [],
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

  admin: {
    description: "How we help people. Be specific.",
    defaultColumns: ["title"],
    group: "Service",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "-title",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
};
