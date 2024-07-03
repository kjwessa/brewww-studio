import { getServiceData } from "@/app/lib/serviceData";
import { notFound } from "next/navigation";
import Image from "next/image";

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
      <section className="flex items-end bg-stone-950 px-16 pt-44 text-center text-white">
        <div className="flex flex-wrap justify-center">
          <h1 className="flex flex-col justify-center text-[5.13rem] leading-none">
            <div className="table pr-1">
              <div>
                <h1>{service.pageTitle}</h1>
              </div>
            </div>
          </h1>

          <div className="flex w-full justify-between pb-4 pt-16 text-4xl font-bold uppercase">
            <h2>Service</h2>
            <h2>Contact Us</h2>
          </div>

          <div className="relative flex h-0 w-full items-end pb-[66%]">
            <Image
              src={service.featuredImg}
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
