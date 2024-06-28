import Link from "next/link";

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
        <img className="w-full" src={thumbnail} alt={title} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
        </div>
      </div>
    </Link>
  );
}
