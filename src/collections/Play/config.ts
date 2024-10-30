import type { CollectionConfig } from "payload";
import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { slugField } from "@/fields/slug";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const Playground: CollectionConfig = {
  slug: "play",

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
      type: "text",
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the Playground case study here.",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
      required: true,
      admin: {
        description: "Add the tagline for the playground here.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      admin: {
        description: "Add the description for the playground here.",
      },
    },

    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "Content",
          fields: [],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    // TODO: make sure the slug locks after being published
    ...slugField(),
    {
      name: "publishedOn",
      type: "date",
      required: true,
      label: "Published On",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "relatedPlaygrounds",
      type: "relationship",
      label: "Related Playgrounds",
      admin: {
        position: "sidebar",
        description: "Add the related playgrounds here.",
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
      hasMany: true,
      relationTo: "play",
    },
  ],

  //* Admin Settings

  admin: {
    description: "Interior Brewww projects",
    defaultColumns: ["title", "tagline", "updatedAt"],
    group: "Portfolio",
    listSearchableFields: ["title", "tagline", "description"],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    useAsTitle: "title",
  },
  defaultSort: "title",
  labels: {
    singular: "Playground",
    plural: "Playground",
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        if (
          doc.publishedOn &&
          typeof doc.publishedOn === "object" &&
          "$date" in doc.publishedOn
        ) {
          doc.publishedOn = new Date(doc.publishedOn.$date);
        }
        return doc;
      },
    ],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
};
