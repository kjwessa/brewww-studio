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

export function ThinkBody() {
  return (
    <>
      <section>
        <div className="relative content-stretch items-start justify-start bg-slate-50 px-24 py-12 font-light text-neutral-900">
          <div className="mb-12 flex items-center justify-between text-[2.13rem] leading-9">
            <h3>Latest News and Views</h3>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>
      </section>
    </>
  );
}
