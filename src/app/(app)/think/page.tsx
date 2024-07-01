import { allPosts } from "content-collections";
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

export default function Page() {
  return (
    <>
      <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
        <h2 className="mb-8 text-5xl">Blog</h2>
        <div className="grid grid-cols-3 gap-4">
          {allPosts.map((post) => (
            <BlogCard
              key={post.title}
              title={post.title}
              publishedAt={post.publishedAt}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
