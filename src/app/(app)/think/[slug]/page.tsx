import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

interface HeroSectionProps {
  post: {
    title: string;
    description?: string;
    publishedAt: string;
  };
}

//* HeroSection
const HeroSection = ({ post }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-5xl font-medium leading-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-gray-700">
          {post.description}Branding is who you are, the very identity and
          character of your business, while marketing is how you build brand
          awareness. Branding is your strategy, while marketing encompasses your
          tactical goals.
        </p>
        <div className=""></div>
      </div>
    </section>
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

      <article className="mx-auto flex max-w-4xl flex-col justify-center py-12">
        <h1 className="mb-12 text-balance text-5xl font-medium"></h1>

        <div className="relative h-0 w-full pb-[66%]">
          <Image src={post.featuredImg} fill alt={post.featuredImgAlt} />{" "}
        </div>
        <div className="prose prose-lg mx-auto pb-24 pt-12">
          <MDXContent code={post.mdx} />
        </div>
      </article>
    </div>
  );
}
