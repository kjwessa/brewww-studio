import type { CollectionConfig } from "payload";

export const Playground: CollectionConfig = {
  slug: "play",
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
        description: "This image appears on the PlayCard thumbnail images.",
      },
    },
  ],
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Playground",
    plural: "Playgrounds",
  },
};
