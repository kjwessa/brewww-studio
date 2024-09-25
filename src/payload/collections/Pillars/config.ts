import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticatedOrPublished";
import { slugField } from "@payloadcms/plugin-seo/fields";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const Pillars: CollectionConfig = {
  slug: "pillars",

  //* Collection Fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
      admin: {
        description: "Add the title of the pillar here.",
      },
    },
    ...slugField(),
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      admin: {
        description: "Add the description of the pillar here.",
      },
    },
  ],
  labels: {
    singular: "Pillar",
    plural: "Pillars",
  },
};
