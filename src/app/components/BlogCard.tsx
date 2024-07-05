import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  slug: string;
  alt: string;
  categories: string[];
}

export function BlogCard({
  title,
  description,
  publishedAt,
  image,
  alt,
  slug,
  categories,
}: BlogCardProps) {
  return (
    <div>
      <Link href={`think/${slug}`}>
        <div className="relative h-0 w-full pb-[66%]">
          <Image
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex-1">
          <div className="pt-2">
            {categories.map((category) => (
              <span key={category} className="text-sm uppercase">
                {category}
              </span>
            ))}
          </div>
          <h3 className="my-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-base text-gray-800">{description}</p>
        </div>
      </Link>
    </div>
  );
}
