import { allPosts } from "content-collections";
import { BlogCard } from "@/app/components/BlogCard";

export function ThinkBody() {
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <>
      <section>
        <div className="relative content-stretch items-start justify-start bg-slate-50 px-24 py-12 font-light text-neutral-900">
          <div className="mb-12 flex items-center justify-between text-[2.13rem] leading-9">
            <h3>Latest News and Views</h3>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {sortedPosts.map((post) => (
                <BlogCard
                  key={post.title}
                  title={post.title}
                  publishedAt={post.publishedAt}
                  categories={post.categories ?? []}
                  image={post.featuredImg}
                  alt={post.featuredImgAlt}
                  slug={post.slug}
                  readTime={post.readTime}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
