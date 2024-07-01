import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  slug: string;
  alt: string;
}

export function BlogCard({
  title,
  description,
  publishedAt,
  image,
  alt,
  slug,
}: BlogCardProps) {
  return (
    <div>
      <div className="relative h-0 w-full pb-[66%]">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>

      <div className="flex-1">
        <h3 className="my-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-base text-gray-800">{description}</p>
        <p className="text-sm text-gray-500">
          {new Date(`${publishedAt}`).toLocaleDateString()}
        </p>
      </div>
      <Link
        href={`think/${slug}`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Read More
      </Link>
    </div>
  );
}
