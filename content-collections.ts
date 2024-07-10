import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "src/app/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.string(),
    description: z.string(),
    preamble: z.string().optional(),
    featuredImg: z.string(),
    featuredImgAlt: z.string(),
    categories: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
