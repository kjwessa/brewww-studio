import { getServiceData } from "@/app/lib/serviceData";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  const services = getServiceData();
  return (
    <section className="bg-white px-8 pb-8 text-stone-950">
      <div className="max-w-8xl container mx-auto grid grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.featImg}
            imageAlt={service.featImgAlt}
            slug={service.slug}
            title={service.card.cardTitle}
            description={service.card.cardDescription}
          />
        ))}
      </div>
    </section>
  );
}
