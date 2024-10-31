import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";

export const Technologies: CollectionConfig = {
  slug: "technologies",

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
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the technology here.",
      },
    },
    {
      name: "image",
      type: "upload",
      label: "Logo",
      required: false,
      relationTo: "media",
    },
  ],

  //* Admin Settings

  admin: {
    description: "The tools of the trade.",
    defaultColumns: ["title", "image"],
    group: "Portfolio",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Technology",
    plural: "Technologies",
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
};
