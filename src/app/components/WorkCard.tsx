interface WorkCardProps {
  id: string;
  client: string;
  title: string;
  thumbnail: string;
}

export function WorkCard({ id, client, title, thumbnail }: WorkCardProps) {
  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{client}</p>
      </div>
    </div>
  );
}
