import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",

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
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
    description: "How we help people.",
    defaultColumns: ["name"],
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  labels: {
    singular: "Service",
    plural: "Services",
  },
};
