import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/app/utilities/dateFormatter";

interface BlogCardProps {
  title: string;
  publishedAt: string;
  image: string;
  slug: string;
  alt: string;
  categories: string[];
  readTime: number;
}
export function BlogCard({
  title,
  publishedAt,
  image,
  alt,
  slug,
  categories,
  readTime,
}: BlogCardProps) {
  // Format the appearance of the date
  const formattedDate = formatDate(publishedAt);

  return (
    <Link className="h-full" href={`think/${slug}`}>
      <div className="overflow-hidden">
        <div className="relative h-0 w-full max-w-full pb-[66%]">
          <Image
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-500">
        {categories.map((category) => (
          <span key={category} className="text-sm uppercase">
            {category}
          </span>
        ))}
      </p>
      <h3 className="mt-2 text-[1.38rem] font-medium leading-7 min-[1920px]:pr-60">
        {title}
      </h3>
      <div className="mt-3 flex items-center text-sm font-medium text-slate-500">
        <p className="pr-1.5 min-[1250px]:pr-3">{formattedDate}</p>
        <svg
          className="h-0.5 w-0.5"
          fill="none"
          height="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1" cy="1" fill="rgb(99, 118, 149)" r="1" />
        </svg>
        <p className="pl-1.5 min-[1250px]:pl-3">{`${readTime} min read`}</p>
      </div>
    </Link>
  );
}
