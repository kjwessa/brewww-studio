import { MDXHeroImage } from "@/app/components/MDXHeroImage";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

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
    <div className="bg-white text-black">
      <MDXHeroImage
        src={post.featuredImg}
        width={500}
        height={500}
        alt={post.featuredImgAlt}
      />

      <article className="mx-auto flex max-w-4xl flex-col justify-center p-4">
        <h1 className="mb-4 text-5xl font-bold">{post.title}</h1>
        <p>{post.preamble}</p>
        <div className="prose prose-lg mx-auto pb-24 pt-12">
          <MDXContent code={post.mdx} />
        </div>
      </article>
    </div>
  );
}
