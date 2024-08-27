import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";

export const Location: CollectionConfig = {
  slug: "in",

  //* Collection Fields
  fields: [{ name: "name", type: "text", label: "Name" }],

  //* Admin Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
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
