import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients", 
  admin: {
    useAsTitle: "name"
  },
  fields: [{
    name: "name", 
    type: "text",
    label: "Name"
  }]
}