import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/work/${slug}`}>
      <div className="relative h-0 w-full pb-[66%]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="m-2 max-w-sm overflow-hidden rounded shadow-lg">
        <div className="py-4">
          <p className="text-base text-gray-400">{client}</p>
          <div className="mt-2 text-xl font-bold">{title}</div>
        </div>
      </div>
    </Link>
  );
}
