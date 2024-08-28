import type { CollectionConfig } from "payload";

export const Location: CollectionConfig = {
  slug: "in",

  //* Collection Fields
  fields: [{ name: "name", type: "text", label: "Name" }],

  //* Admin Settings
  access: {
    read: () => true,
  },
  admin: {
    description: "Landing pages for services",
    group: "Service",
    useAsTitle: "name",
  },

  labels: {
    singular: "Location",
    plural: "Locations",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
