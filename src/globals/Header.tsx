import { GlobalConfig } from "payload/dist";

export const Header: GlobalConfig = {
  slug: "header",
  fields: [
    { name: "logo", type: "upload", relationTo: "media", label: "logo" },
    {
      name: "nav",
      type: "array",
      label: "Navigation",
      fields: [
        { name: "label", label: "Label", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
  ],
};
