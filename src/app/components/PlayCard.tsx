import Link from "next/link";
import Image from "next/image";

interface PlayCardProps {
  id: string;
  title: string;
  thumbnail: string;
  slug: string;
}

export function PlayCard({ id, title, thumbnail, slug }: PlayCardProps) {
  return (
    <Link href={`/play/${slug}`}>
      <div className="m-4 max-w-sm cursor-pointer overflow-hidden rounded shadow-lg">
        <div className="relative h-0 w-full pb-[66%]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
        </div>
      </div>
    </Link>
  );
}
