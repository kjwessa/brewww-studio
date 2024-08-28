import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",

  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },

  //* Collection Fields
  fields: [{ name: "name", type: "text", label: "Full Name" }],

  //* Admin Settings
  admin: {
    useAsTitle: "name",
  },
  auth: true,
};
