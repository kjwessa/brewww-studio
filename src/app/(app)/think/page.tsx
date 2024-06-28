import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogCard } from "@/app/components/BlogCard";

interface PostMeta {
  title: string;
  publishedAt: string;
  description: string;
  author: string;
}

interface Post {
  slug: string;
  meta: PostMeta;
}

//* Set the location of the posts directory
const postsDirectory = path.join(process.cwd(), "src/app/posts");

//* Find all the files in the blog directory
const files = fs.readdirSync(path.join("src/app/posts"));

//* Map over each post, extract the frontMatter, and adjust the slug
const posts: Post[] = files.map((filename) => {
  // Read the content of each post
  const postContent = fs.readFileSync(
    path.join(postsDirectory, filename),
    "utf-8",
  );
  // Extract the frontMatter from each post
  const { data: frontMatter } = matter(postContent);
  // Ensure the frontMatter has the correct structure
  const meta: PostMeta = {
    title: frontMatter.title,
    publishedAt: frontMatter.publishedAt,
    description: frontMatter.description,
    author: frontMatter.author,
  };
  // Return the result and set the slug
  return {
    meta,
    slug: frontMatter.slug,
  };
});

export default function Page() {
  return (
    <>
      <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
        <h2 className="mb-8 text-5xl">Blog</h2>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard
              key={post.meta.title}
              title={post.meta.title}
              publishedAt={post.meta.publishedAt}
              description={post.meta.description}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
