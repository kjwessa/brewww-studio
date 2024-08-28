import type { CollectionConfig } from "payload";

export const Results: CollectionConfig = {
  slug: "results",

  //* Collection Fields
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name (Internal)",
      required: true,
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
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
    defaultColumns: ["name"],
    group: "Portfolio",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50],
    },
    useAsTitle: "name",
  },
  defaultSort: "name",
  labels: {
    singular: "Result",
    plural: "Results",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
