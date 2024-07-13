import { getServiceData } from "@/app/lib/serviceData";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const services = getServiceData();
  return services.map((service) => ({ slug: service.slug }));
}

//* HeroSection
interface HeroSectionProps {
  service: {
    pageTitle: string;
    featImg: string;
    featImgAlt: string;
  };
}

const HeroSection = ({ service }: HeroSectionProps) => {
  return (
    <section className="flex items-end px-16 pt-44 text-center">
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
            src={service.featImg}
            alt={service.featImgAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

//* Intro Section
interface IntroSectionProps {
  service: {
    introSection: {
      headline: string;
      description: string;
    };
  };
}

const IntroSection = ({ service }: IntroSectionProps) => {
  return (
    <section className="px-16 pt-20">
      <div className="m-auto w-full max-w-[120.00rem]">
        <div className="flex" id="div-1">
          <div
            className="flex w-[55%] flex-col pr-[calc(min(6vw,_115px)_*_2)] text-3xl font-bold uppercase"
            id="div-2"
          >
            <h2 className="overflow-hidden">
              <div className="">
                <h2>{service.introSection.headline}</h2>
              </div>
            </h2>
          </div>

          <div className="flex w-[45%] flex-col" id="div-3">
            <p>{service.introSection.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const services = getServiceData();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    console.error(`Service with slug ${params.slug} not found`);
    return notFound();
  }

  return (
    <div className="bg-white pt-24 text-black">
      <HeroSection service={service} />
      <IntroSection service={service} />
    </div>
  );
}
