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

export const Services: CollectionConfig = {
  slug: "services",

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
      required: true,
      admin: {
        description:
          "The tagline of the service as it appears around the site.",
      },
    },
    {
      name: "imageMain",
      type: "upload",
      label: "Main Image",
      required: true,
      relationTo: "media",
      admin: {
        description:
          "The main image of the service as it appears around the site.",
      },
    },
    ...slugField(),
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
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
          fields: [],
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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
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
    drafts: true,
    maxPerDoc: 25,
  },
};
