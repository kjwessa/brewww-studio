import { describe } from "node:test";
import type { CollectionConfig } from "payload";

export const Work: CollectionConfig = {
  slug: "work",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", label: "Name", required: true },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: false,
      admin: { position: "sidebar" },
    },
    {
      name: "thumbnail",
      type: "upload",
      label: "Thumbnail",
      required: false,
      relationTo: "media",
      admin: {
        description: "This image appears on the WorkCard thumbnail images.",
      },
    },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: false,
      required: false,
      admin: {
        description: "If a testimonial exists, add it here.",
      },
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      hasMany: false,
      required: true,
      admin: {
        description: "Add the connected client here. ",
      },
    },
  ],
};
