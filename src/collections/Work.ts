import type { CollectionConfig } from "payload";

export const Work: CollectionConfig = {
  slug: "work",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", label: "Name", required: true },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: { position: "sidebar" },
    },
    {name: "thumbnail", type: "upload", label: "Thumbnail", required: true, relationTo: "media", admin: {description: "This image appears on the WorkCard thumbnail images."}}
  ],
};
