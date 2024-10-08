import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { slugField } from "@/fields/slug";

export const Location: CollectionConfig = {
  slug: "locations",

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
