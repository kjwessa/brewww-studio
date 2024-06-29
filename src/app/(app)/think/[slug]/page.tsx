import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

//* Read the directory of posts
const files = fs.readdirSync(path.join("src/app/posts"));

//* Get individual post by frontMatter slug
async function getPost({ slug }: { slug: string }) {
  // Establish the filename
  const filename = files.find((file) => {
    const postContent = fs.readFileSync(
      path.join("src/app/posts", file),
      "utf-8",
    );
    const { data: frontMatter } = matter(postContent);
    return frontMatter.slug === slug;
  });
  // Return 404 if the file is not found
  if (!filename) {
    throw new Error(`File for slug ${slug} not found.`);
  }

  const markdownFile = fs.readFileSync(
    path.join("src/app/posts", filename),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

export async function generateStaticParams() {
  const params = files.map((filename) => {
    const postContent = fs.readFileSync(
      path.join("src/app/posts", filename),
      "utf-8",
    );
    const { data: frontMatter } = matter(postContent);
    return { slug: frontMatter.slug };
  });
  return params;
}

//* Build the individual blog page
export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the post based on the slug
  const props = await getPost(params);
  // Add components for MDX rendering (optional)
  // const components = {}
  // Build the individual article
  console.log(props.frontMatter.title);
  return (
    <div className="bg-white text-black">
      <article className="mx-auto flex max-w-4xl flex-col justify-center p-4">
        <h1 className="mb-4 text-4xl font-bold">{props.frontMatter.title}</h1>
        <p>{props.frontMatter.publishedAt}</p>
        <div className="prose prose-lg mx-auto pb-24 pt-12">
          <MDXRemote source={props.content} />
        </div>
      </article>
    </div>
  );
}
