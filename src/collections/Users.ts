import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  //* Collection Fields
  fields: [{ name: "name", type: "text", label: "Full Name" }],

  //* Admin Settings
  admin: {
    useAsTitle: "name",
  },
  auth: true,
};
