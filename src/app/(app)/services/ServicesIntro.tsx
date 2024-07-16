import { getServiceData } from "@/app/lib/serviceData";
import { ServiceCard } from "./ServiceCard";

export function ServicesIntro() {
  const services = getServiceData();
  return (
    <section>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          image={service.featImg}
          imageAlt={service.featImgAlt}
          slug={service.slug}
        />
      ))}
    </section>
  );
}
