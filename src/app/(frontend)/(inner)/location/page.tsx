import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Link from 'next/link';

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise });
  const locations = await payload.find({
    collection: "locations",
    limit: 1000,
    sort: "-createdAt",
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Locations</h1>
      <div className="grid gap-4">
        {locations.docs.map((location) => (
          <Link
            key={location.id}
            href={`/location/${location.slug}`}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold">{location.title}</h2>
            <p className="text-gray-600">{location.slug}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
