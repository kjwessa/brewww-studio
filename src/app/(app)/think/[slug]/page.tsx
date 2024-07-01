// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXHeroImage } from "@/app/components/MDXHeroImage";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

// //* Read the directory of posts
// const files = fs.readdirSync(path.join("src/app/posts"));

// //* Get individual post by frontMatter slug
// async function getPost({ slug }: { slug: string }) {
//   // Establish the filename
//   const filename = files.find((file) => {
//     const postContent = fs.readFileSync(
//       path.join("src/app/posts", file),
//       "utf-8",
//     );
//     const { data: frontMatter } = matter(postContent);
//     return frontMatter.slug === slug;
//   });
//   // Return 404 if the file is not found
//   if (!filename) {
//     throw new Error(`File for slug ${slug} not found.`);
//   }

//   const markdownFile = fs.readFileSync(
//     path.join("src/app/posts", filename),
//     "utf-8",
//   );
//   const { data: frontMatter, content } = matter(markdownFile);
//   return { frontMatter, slug, content };
// }

// export async function generateStaticParams() {
//   const params = files.map((filename) => {
//     const postContent = fs.readFileSync(
//       path.join("src/app/posts", filename),
//       "utf-8",
//     );
//     const { data: frontMatter } = matter(postContent);
//     return { slug: frontMatter.slug };
//   });
//   return params;
// }

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
        <div className="prose prose-lg mx-auto pb-24 pt-12">
          <MDXContent code={post.mdx} />
        </div>
      </article>
    </div>
  );
}
