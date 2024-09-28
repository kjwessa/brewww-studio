import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";

export const Results: CollectionConfig = {
  slug: "results",

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
      label: "Result Title",
      required: true,
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "brands",
      required: true,
    },
    { name: "number", type: "text", label: "Number", required: true },
    { name: "support", type: "text", label: "Support", required: true },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
    },
  ],

  //* Admin Settings

  admin: {
    description: "The impact of our work",
    defaultColumns: ["title"],
    group: "Portfolio",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "-title",
  labels: {
    singular: "Result",
    plural: "Results",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
