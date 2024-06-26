import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
  slug: string;
}

export function BlogCard({
  title,
  description,
  publishedAt,
  image = "",
  slug,
}: BlogCardProps) {
  return (
    <>
      <div>
        {image && <img src={image} alt="Alt Text" width={500} height={300} />}
        <div className="flex-1">
          <h3 className="my-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-base text-gray-800">{description}</p>
          <p className="text-sm text-gray-500">
            {new Date(`${publishedAt}`).toLocaleDateString()}
          </p>
        </div>
        <Link
          href={`blog/${slug}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Read More
        </Link>
      </div>
    </>
  );
}
