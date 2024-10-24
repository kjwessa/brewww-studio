import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      unique: true,
      label: "Full Name",
    },
    ...slugField(),
    {
      name: "role",
      type: "text",
      required: true,
      label: "Role",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      admin: {
        position: "sidebar",
      },
    },
  ],

  //* Admin Settings

  admin: {
    description: "Our team of experts.",
    defaultColumns: ["title"],
    group: "Company",
    listSearchableFields: ["title"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50],
    },
    useAsTitle: "title",
  },
  defaultSort: "-title",
  labels: {
    singular: "Team Member",
    plural: "Team",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
