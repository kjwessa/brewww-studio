import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "first_name",
  },
  auth: true,
  fields: [
    { name: "first_name", type: "text", label: "First Name", required: false },
    { name: "last_name", type: "text", label: "Last Name", required: false },
  ],
};
