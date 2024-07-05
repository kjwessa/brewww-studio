import { getServiceData } from "@/app/lib/serviceData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const services = getServiceData();
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const services = getServiceData();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    console.error(`Service with slug ${params.slug} not found`);
    return notFound();
  }

  return (
    <>
      <h1>{service.pageTitle}</h1>
    </>
  );
}
