import { LineFull } from "@/app/components/LineFull";

export default function Page() {
  return (
    <>
      <ServicesIntro />
      <LineFull />
      <ServicesSpecialty />
      <ServicesImpact />
      <ServicesROI />
      <LineFull />
    </>
  );
}

export interface ServiceData {
  id: string;
  slug: string;
  published: boolean;
  featImg: string;
  featImgAlt: string;
  pageHero: {
    heroTitle: string;
    heroNumber: string;
  };
  pageIntro: {
    introTitle: string;
    introDescription: string;
  };
  card: {
    cardTitle: string;
    cardDescription: string;
  };
}

export interface ServicePageHero {
  pageHero: {
    heroTitle: string;
    heroNumber: string;
  };
}

export interface ServicePageImage {
  featImg: string;
  featImgAlt: string;
}

export interface ServicePageIntro {
  pageIntro: {
    introTitle: string;
    introDescription: string;
  };
}

export interface ServiceCard {
  image: string;
  imageAlt: string;
  slug: string;
  title: string;
  description: string;
}
function ServiceCard({
  image,
  imageAlt,
  slug,
  title,
  description,
}: ServiceCard) {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-bold uppercase">{title}</h2>
      <div>
        <div className="relative h-32 w-full pb-[66%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <p className="py-3 text-base">{description}</p>
      <LinkMain text="Learn More" link={`/services/${slug}`} size="medium" />
    </div>
  );
}

export function ServicesImpact() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="mx-auto w-full max-w-6xl px-8 py-24">
          <div className="text-2xl font-medium">Impact & Results</div>
          <div className="grid grid-cols-3 gap-8 pt-12">
            <ImpactCard
              number={3}
              letter={"m"}
              text={
                "Brand strategy and site development of The Merry Beggars led to 3 million downloads of their original audio entertainment podcast."
              }
            />
            <ImpactCard
              number={10}
              letter={"x"}
              text={
                " Brand strategy and development of Fem Catholic led to a grant for their initiative, ten times their original site investment."
              }
            />
            <ImpactCard
              number={760}
              letter={"%"}
              text={
                "Increase in online donations within 90 days after Joseph House site rebrand and website launch."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { getServiceData } from "@/app/lib/serviceData";
import { ServiceCard } from "./ServiceCard";

export function ServicesIntro() {
  const services = getServiceData();
  return (
    <section className="bg-white px-8 py-20 text-stone-950">
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

export function ServicesROI() {
  return (
    <div>
      <div className="flex max-w-6xl items-start justify-between bg-white px-8 py-12 text-stone-950">
        <div className="w-[calc(42%_-_12px)] text-4xl font-medium">
          <p>Design that makes a good impression and investment.</p>
        </div>
        <div className="mt-16 w-[calc(50%_-_12px)] text-xl">
          At Brewww Studio, ROI isnt optional—its essential. We create brand
          experiences that not only look good but drive real results. Our
          superior design nurtures relationships and delivers value, proven
          across industries like fitness, non-profits, media & entertainment,
          and e-commerce.
          <div className="mt-12">
            <p className="mt-5 font-medium text-neutral-800 opacity-60">
              5.0/5.0 Avg. Rating on{" "}
              <a className="underline" href="">
                Facebook
              </a>
              {" and "}
              <a className="underline" href="">
                Google
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export function ServicesSpecialty() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="grid min-h-[40rem] grid-cols-2">
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Our Specialty</h2>
            <p>
              At Brewww Studio, every project is a journey to explore new
              creative frontiers. Partnering closely with our clients, we aim to
              design captivating visuals that make an immediate impact and leave
              a lasting legacy.
            </p>
          </div>
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/beer-delivery.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid min-h-[40rem] grid-cols-2">
          <div className="relative flex flex-col justify-center px-24 py-16 opacity-[0.9501] blur-[0px]">
            <Image
              src="/images/broken-glass-light.1920.jpg"
              alt="text"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-24">
            <h2 className="pb-4 text-[3.13rem] leading-none">Your Growth</h2>
            <p>
              We are always looking ahead. As your dedicated digital design
              studio, we collaborate with you to tackle real-world challenges in
              a dynamic environment. From logo creation to comprehensive digital
              marketing campaigns, we implement diverse strategies that drive
              growth and ensure your brand thrives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
