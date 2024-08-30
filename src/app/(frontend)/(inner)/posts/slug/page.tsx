import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import RichText from "@/components/RichText/RichText";
import { notFound } from "next/navigation";
import { Post } from "@/payload-types";

// Generate static params for all posts
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    overrideAccess: false,
  });
  console.log(
    "Generated static params:",
    posts.docs?.map(({ slug }) => ({ slug })),
  );
  return posts.docs?.map(({ slug }) => ({ slug }));
}

// Main post component
export default async function PostPage({
  params,
}: {
  params: { slug?: string };
}) {
  console.log("Received params:", params);

  if (!params.slug) {
    console.error("Slug is undefined");
    notFound();
  }

  console.log("Fetching post for slug:", params.slug);
  const post = await queryPostBySlug({ slug: params.slug });

  console.log("Fetched post:", post);

  if (!post) {
    console.error("Post not found for slug:", params.slug);
    notFound();
  }

  return (
    <article className="pb-16 pt-16">
      <h1 className="mb-4 text-4xl font-bold">{post.name}</h1>
      <div className="flex flex-col gap-4 pt-8">
        <div className="">
          <RichText
            className=""
            content={post.content || []}
            enableGutter={false}
          />
        </div>
      </div>
    </article>
  );
}

// Query function to fetch post by slug
async function queryPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<Post | null> {
  const payload = await getPayloadHMR({ config: configPromise });
  try {
    const result = await payload.find({
      collection: "posts",
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    return result.docs[0] || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
