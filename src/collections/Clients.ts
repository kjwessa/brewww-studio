import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      admin: { description: "Add the client name here." },
    },
  ],
};