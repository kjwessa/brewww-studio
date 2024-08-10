import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  fields: [{ name: "name", type: "text", label: "Full Name" }],
  auth: true,
};
