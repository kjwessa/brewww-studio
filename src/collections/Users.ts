import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  fields: [{ name: "name", type: "text", label: "Full Name" }],
  admin: {
    useAsTitle: "name",
  },
  auth: true,
};
