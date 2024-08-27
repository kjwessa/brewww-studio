import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const Clients: CollectionConfig = {
  slug: "clients",

  //* Collection Fields
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

  //* Admin Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    description: "Our bread and butter.",
    defaultColumns: ["name", "logoLight", "city", "state"],
    group: "Portfolio",
    listSearchableFields: ["name", "city", "state"],
    pagination: {
      defaultLimit: 10,
      limits: [10, 20, 50],
    },
    useAsTitle: "name",
  },
  defaultSort: "name",
  labels: {
    singular: "Client",
    plural: "Clients",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
