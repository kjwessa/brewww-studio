import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

// Query function to fetch clients
async function queryClients() {
  const payload = await getPayloadHMR({ config: configPromise });
  const result = await payload.find({
    collection: "clients",
    limit: 100,
  });
  return result.docs || [];
}

export default async function ClientsPage() {
  const clients = await queryClients();

  // ... rest of your component code
}
