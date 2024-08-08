import { getServiceData } from "@/app/lib/serviceData";
import { ServiceCard } from "./ServiceCard";

export function ServicesIntro() {
  const services = getServiceData();
  return (
    <section className="bg-white px-8 py-12 text-stone-950">
      <div className="max-w-8xl container mx-auto">
        <h2 className="mb-16 text-4xl font-bold uppercase">
          <span className="mr-4 pb-4 text-base">Our Speciality</span>A Cleveland
          branding studio with a passion for thumb stopping visuals, compelling
          storytelling, and web that works for you.
        </h2>
      </div>
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
