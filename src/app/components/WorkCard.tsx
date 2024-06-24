import Link from "next/link";

interface WorkCardProps {
  id: string;
  client: string;
  title: string;
  thumbnail: string;
  slug: string;
}

export function WorkCard({
  id,
  client,
  title,
  thumbnail,
  slug,
}: WorkCardProps) {
  return (
    <Link href={` /work/${slug}`}>
      <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
        <img className="w-full" src={thumbnail} alt={title} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{client}</p>
        </div>
      </div>
    </Link>
  );
}
