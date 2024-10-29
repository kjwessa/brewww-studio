import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { slugField } from "@/fields/slug";
import { publishedOnly } from "@/access/publishedOnly";
import { seoTab } from "@/fields/seoFields";
import { generatePreviewPath } from "@root/utilities/generatePreviewPath";
import { FormBlock } from "@/blocks/Form/config";
import { Cover } from "@/blocks/Cover/config";

export const Pages: CollectionConfig = {
  slug: "pages",

  //* Access Settings
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },

  //* Collection Fields
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        description: "The title of the page.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              label: "Layout",
              required: true,
              blocks: [Cover, FormBlock],
            },
          ],
        },
        seoTab,
      ],
    },
    ...slugField(),
  ],

  //* Admin Settings

  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "pages",
        });

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "pages",
      });

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
};
