import Image from "next/image";
import Link from "next/link";
import { Post, Media } from "@/payload-types";

export const PostFeatCard = ({ post }: { post: Post }) => {
  const imageMain = post.imageMain as Media | undefined;
  return (
    <div className="relative w-80 flex-shrink-0 overflow-hidden">
      <Link href={`https://brewww.studio/journal/${post.slug}`}>
        <div className="aspect-[3/2] overflow-hidden">
          <Image
            src={imageMain?.url || ""}
            alt={imageMain?.altText || ""}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <span className="mb-2 text-sm font-medium">{}</span>
          <p className="text-2xl font-bold">{post.name}</p>
        </div>
      </Link>
    </div>
  );
};
