import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",

  //* Collection Fields
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      admin: {
        description: "add a cool name here",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        description: "add a cool slug",
        position: "sidebar",
      },
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: "name",
    description: "How we help people.",
    defaultColumns: ["name"],
    group: "Service",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: "name",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
