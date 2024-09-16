import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";
import { UnderlineFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const BlogCategories: CollectionConfig = {
  slug: "categories",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Category Title",
      unique: true,
      admin: {
        description: "The title of the category as it appears around the site.",
      },
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
        description: "Add a cool slug here",
      },
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
    description: "Categories for blog posts.",
    defaultColumns: ["title"],
    group: "Blog Posts",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
