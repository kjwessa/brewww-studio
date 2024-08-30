import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import RichText from "@/components/RichText/index";
import { notFound } from "next/navigation";
import { Post } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { MetaDot } from "@/app/components/MetaDot";
// import { formatDate } from "@/app/utils/dateFormatter";
import aboutImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";
import aboutLogo from "/public/images/brand/brewww_mark.png";

//* Generate static params for all posts
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    overrideAccess: false,
  });
  return posts.docs?.map(({ slug }) => ({ slug }));
}

// //* HeroSection
interface HeroSectionProps {
  name?: string;
  description?: string;
  publishedDate?: string; // Changed from publishedAt
  readTime?: number;
}

const HeroSection = ({
  name,
  description,
  publishedDate, // Changed from publishedAt
  readTime,
}: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 pb-12 pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
          {name}
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-gray-700">{description}</p>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>
            By{" "}
            <Link className="text-gray-950" href={""}>
              Kevin Wessa
            </Link>
          </span>
          <MetaDot />
          <span>{publishedDate || "Date not available"}</span>
          <MetaDot />
          <span>
            {readTime ? `${readTime} min read` : "Read time not available"}
          </span>
        </div>
      </div>
    </section>
  );
};

// //* ImageSection
interface ImageSectionProps {
  featuredImage?: {
    url?: string;
    alt?: string;
  };
}

const ImageSection = ({ featuredImage }: ImageSectionProps) => {
  if (!featuredImage?.url) return null;

  return (
    <div className="relative h-0 w-full pb-[66%]">
      <Image src={featuredImage.url} fill alt={featuredImage.alt || ""} />
    </div>
  );
};

// //* ArticleSection
interface ArticleSectionProps {
  content: any; // Use the correct type from your Post type
}

const ArticleSection = ({ content }: ArticleSectionProps) => {
  return (
    <article className="prose prose-lg mx-auto pb-24 pt-12">
      <RichText
        className="prose text-black"
        content={content || ""}
        enableGutter={false}
      />
    </article>
  );
};

const AboutCard = () => {
  return (
    <div className="relative max-w-xs text-lg text-gray-950">
      <div className="flex flex-col">
        <div className="relative h-0 w-full pb-[50%]">
          <Image
            src={aboutImage}
            alt="brewww"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative -mt-4 bg-neutral-100 px-5 pb-4 pt-12">
          <div className="absolute left-8 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 p-2">
            <div className="relative">
              <Image src={aboutLogo} alt="Brewww Logo" width={32} height={32} />
            </div>
          </div>
          <div>
            <p className="text-base font-semibold">About Brewww Studio</p>
            <p className="mt-2 text-sm">
              Brewww is a branding and web studio in Cleveland. We work with
              startups and emerging brands to craft meaningful digital
              transformations.
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
  );
};

//* Render the post page
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
      <HeroSection
        name={post.name}
        description={post.description}
        publishedDate={post.publishedDate}
        readTime={post.readTime}
      />
      <ImageSection featuredImage={post.featuredImage} />
      <div className="grid grid-cols-3 pt-4">
        <div></div>
        <div className="mx-auto flex max-w-4xl flex-col justify-center py-4">
          <ArticleSection content={post.content} />
        </div>
        <div className="flex flex-col content-center items-center justify-start pt-4">
          <AboutCard />
        </div>
      </div>
    </article>
  );
}

//* Query function to fetch post by slug
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
