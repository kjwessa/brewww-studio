import { MDXHeroImage } from "@/app/components/MDXHeroImage";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

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
      <article className="mx-auto flex max-w-4xl flex-col justify-center py-12">
        <h1 className="mb-12 text-balance text-5xl font-medium">
          {post.title}
        </h1>
        <p className="mb-12 text-2xl">{post.preamble}</p>
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
