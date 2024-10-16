import { Post } from "@/payload-types";
import { Media } from "@/payload-types";
import { Category } from "@/payload-types";
import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link className="relative" href={`/blog/${post.slug}`}>
      <div className="mb-5 overflow-hidden rounded-md">
        <div className="relative h-[0] w-full pb-[66%]">
          <Image
            className="object-cover"
            src={(post.image as Media)?.url || ""}
            alt={post.title}
            fill
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-2 flex flex-row items-center text-label-medium uppercase">
          <span>
            {(post.metadata.categories[0] as Category)?.title ||
              "Uncategorized"}
          </span>
          <span className="ml-2">/ {post.metadata.readTime} min read</span>
        </p>
        <h3 className="text-title-medium leading-none">{post.title}</h3>
      </div>
    </Link>
  );
};
