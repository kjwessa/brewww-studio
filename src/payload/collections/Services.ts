import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const Services: CollectionConfig = {
  slug: "services",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "ServiceTitle",
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
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
    description: "How we help people. Be specific.",
    defaultColumns: ["title"],
    group: "Service",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
  },
  defaultSort: "title",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
