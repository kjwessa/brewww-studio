interface WorkCardProps {
  client: string;
  location: string;
  year: string;
  title: string;
  thumbnail: string;
}

export function WorkCard({
  client,
  location,
  year,
  title,
  thumbnail,
}: WorkCardProps) {
  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{client}</p>
        <p className="text-base text-gray-700">{location}</p>
        <p className="text-base text-gray-700">{year}</p>
      </div>
    </div>
  );
}
