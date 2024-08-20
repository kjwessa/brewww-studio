import type { CollectionConfig } from "payload";

export const Location: CollectionConfig = {
  slug: "in",
  admin: {
    useAsTitle: "name",
  },
  fields: [{ name: "name", type: "text", label: "Name" }],
};
