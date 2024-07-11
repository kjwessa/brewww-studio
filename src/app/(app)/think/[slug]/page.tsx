import Image from "next/image";
import Link from "next/link";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { MetaDot } from "@/app/components/MetaDot";
import { formatDate } from "@/app/utils/dateFormatter";
import aboutImage from "/public/images/Aldridge-02665.1200-p-1080.jpeg";
import aboutLogo from "/public/images/brand/brewww_mark.png";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

//* HeroSection
interface HeroSectionProps {
  post: {
    title: string;
    description?: string;
    publishedAt: string;
    readTime: number;
  };
}

const HeroSection = ({ post }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 pb-12 pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-gray-700">
          {post.description}
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>
            By{" "}
            <Link className="text-gray-950" href={""}>
              Kevin Wessa
            </Link>
          </span>
          <MetaDot />
          <span>{formatDate(post.publishedAt)}</span>
          <MetaDot />
          <span>{`${post.readTime} min read`}</span>
        </div>
      </div>
    </section>
  );
};

//* ImageSection
interface ImageSectionProps {
  post: {
    featImg: string;
    featImgAlt: string;
  };
}

const ImageSection = ({ post }: ImageSectionProps) => {
  return (
    <div className="relative h-0 w-full pb-[66%]">
      <Image src={post.featImg} fill alt={post.featImgAlt} />
    </div>
  );
};

//* ArticleSection
interface ArticleSectionProps {
  post: {
    content: string;
  };
}

const ArticleSection = ({ post }: ArticleSectionProps) => {
  return (
    <article className="prose prose-lg mx-auto pb-24 pt-12">
      <MDXContent code={post.content} />
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

//* Build the individual blog page
export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the post based on the slug
  const post = allPosts.find((post) => post.slug === params.slug);
  // Return 404 if no matching post slug is found
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white pt-24 text-black">
      <HeroSection post={post} />
      <ImageSection post={post} />
      <div className="grid grid-cols-3 pt-4">
        <div></div>
        <div className="mx-auto flex max-w-4xl flex-col justify-center py-4">
          <ArticleSection post={post} />
        </div>
        <div className="flex flex-col content-center items-center justify-start pt-4">
          <AboutCard />
        </div>
      </div>
    </div>
  );
}
