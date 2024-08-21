import type { CollectionConfig } from "payload";

export const Location: CollectionConfig = {
  slug: "in",
  fields: [{ name: "name", type: "text", label: "Name" }],
  admin: {
    useAsTitle: "name",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  labels: {
    singular: "Location",
    plural: "Locations",
  },
};
