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
      admin: {
        description: "Add the client name as it will appear around the site.",
      },
    },
    {
      name: "logoLight",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "Logo Light",
      admin: {
        description:
          "Add the light version of the logo that appears on dark backgrounds",
      },
    },
    {
      name: "logoDark",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "Logo Dark",
      admin: {
        description:
          "Add the dark version of the logo that appears on light backgrounds",
      },
    },
    {
      name: "city",
      type: "text",
      label: "City",
      required: true,
      admin: {
        description: "The closest major city to the client.",
      },
    },
    {
      name: "state",
      type: "text",
      label: "State",
      required: true,
      admin: {
        description: "The state where the client is based.",
      },
    },
  ],
};
