// Payload Imports
import type { CollectionConfig } from "payload";

// Access Control
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";

// Fields
import { slugField } from "@/fields/slug";
import { metaTab } from "@/fields/meta";

export const BlogCategories: CollectionConfig = {
  slug: "categories",

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
      label: "Category Title",
      unique: true,
      admin: {
        description: "The title of the category as it appears around the site.",
      },
      required: true,
    },
    ...slugField(),
    {
      type: "tabs",
      tabs: [metaTab],
    },
  ],

  //* Admin Settings
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
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
};
