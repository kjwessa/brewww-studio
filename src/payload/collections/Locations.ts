import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";
import { slugField } from "@/fields/slug";

export const Location: CollectionConfig = {
  slug: "locations",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Location Title",
      required: true,
      unique: true,
      admin: {
        description: "The title of the location as it appears around the site.",
      },
    },
    ...slugField(),
  ],

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
    useAsTitle: "title",
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
