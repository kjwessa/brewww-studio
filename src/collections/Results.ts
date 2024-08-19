import type { CollectionConfig } from "payload";

export const Results: CollectionConfig = {
  slug: "results",
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
};
