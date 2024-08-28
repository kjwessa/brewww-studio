import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
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
