import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import RichText from "@/components/RichText/index";
import { notFound } from "next/navigation";
import { Post } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/utilities/dateFormatter";
import aboutImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";
import aboutLogo from "/public/images/brand/brewww_mark.png";
import TableOfContents from "@/components/TableOfContents/index";
import { LexicalNode } from "@/app/components/RichText/lexicalNodeFormat";

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    overrideAccess: false,
  });
  return (
    posts.docs?.map(({ slug }) => ({
      params: { slug },
    })) || []
  );
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) {
    notFound();
  }

  const post = await queryPostBySlug({ slug: params.slug });
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white pt-24 text-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <ul className="hidden list-none flex-wrap gap-4 md:flex">
            <li>
              <Link href="/posts" className="hover:underline">
                All Posts
              </Link>
            </li>
            <li>
              <Link href="/posts/category/branding" className="hover:underline">
                Branding
              </Link>
            </li>
            <li>
              <Link
                href="/posts/category/web-design"
                className="hover:underline"
              >
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/posts/category/content" className="hover:underline">
                Content
              </Link>
            </li>
            <li>
              <Link href="/posts/category/guides" className="hover:underline">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/posts/category/updates" className="hover:underline">
                Updates
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="container mx-auto px-4 pb-12 pt-12">
        <div className="max-w-5xl">
          <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mb-8 max-w-3xl text-xl text-gray-700">
            {post.description || "Add a cool description here."}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>
              By{" "}
              <Link className="text-gray-950" href={""}>
                Kevin Wessa
              </Link>
            </span>
            <span>•</span>
            <span>
              {post.publishedAt
                ? formatDate(post.publishedAt)
                : "Date not available"}
            </span>
            <span>•</span>
            <span>
              {post.metadata.readTime
                ? `${post.metadata.readTime} min read`
                : "Add Read Time"}
            </span>
          </div>
        </div>
      </section>

      <div className="w-full">
        <div className="px-2">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={
                typeof post.imageMain === "string"
                  ? post.imageMain
                  : post.imageMain?.url || aboutImage.src
              }
              fill
              alt={
                typeof post.imageMain === "object"
                  ? post.imageMain?.alt || ""
                  : "Featured image for blog post"
              }
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8">
        <div>
          <div>
            <TableOfContents
              content={(post.content?.root?.children || []) as LexicalNode[]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <article className="mx-auto pb-24">
            <RichText
              content={post.content || ""}
              className="prose-lg"
              enableProse={true}
              enableGutter={false}
            />
          </article>
        </div>
        <div className="flex flex-col content-center items-start">
          <div className="relative max-w-xs overflow-hidden rounded-md text-lg text-gray-950">
            <div className="flex flex-col">
              <div className="relative h-0 w-full pb-[50%]">
                <Image
                  src={aboutImage}
                  alt="brewww"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="relative -mt-4 rounded-b-md bg-neutral-100 px-5 pb-4 pt-12">
                <div className="absolute left-8 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 p-2">
                  <div className="relative">
                    <Image
                      src={aboutLogo}
                      alt="Brewww Logo"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold">About Brewww Studio</p>
                  <p className="mt-2 text-sm">
                    Brewww is a branding and web studio in Cleveland. We work
                    with startups and emerging brands to craft meaningful
                    digital transformations.
                  </p>
                  <Link
                    href="/studio"
                    className="mt-2 inline-block text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

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
    return null;
  }
}
