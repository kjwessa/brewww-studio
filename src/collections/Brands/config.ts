import type { CollectionConfig } from "payload";

import { isAdmin } from "@access/isAdmin";
import { publishedOnly } from "@access/publishedOnly";

export const Brands: CollectionConfig = {
  slug: "brands",

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

  admin: {
    description:
      "Our bread and butter. Add (or remove) brands from this list carefully.",
    defaultColumns: ["title", "city", "state"],
    group: "Portfolio",
    listSearchableFields: ["title", "city", "state"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Brand",
    plural: "Brands",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
