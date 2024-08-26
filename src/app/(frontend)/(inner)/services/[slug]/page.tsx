import { getServiceData } from "@/app/lib/serviceData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ServicePageHero as ServicePageHeroTypes } from "@/app/types/serviceTypes";
import { ServicePageImage as ServicePageImageTypes } from "@/app/types/serviceTypes";
import { ServicePageIntro as ServicePageIntroTypes } from "@/app/types/serviceTypes";

export async function generateStaticParams() {
  const services = getServiceData();
  return services.map((service) => ({ slug: service.slug }));
}

//* HeroSection
interface ServicePageHeroProps {
  service: ServicePageHeroTypes;
}

const HeroSection = ({ service }: ServicePageHeroProps) => {
  return (
    <section className="flex w-full items-end px-16 pt-44 text-center">
      <div className="flex w-full flex-wrap justify-center">
        <h1 className="flex flex-col justify-center text-[5.13rem] leading-none">
          <div className="table pr-1">
            <div>
              <h1>{service.pageHero.heroTitle}</h1>
            </div>
          </div>
        </h1>
        <div className="flex w-full justify-between pb-4 pt-16 text-2xl font-bold uppercase">
          <h2>Service</h2>
          <h2>{service.pageHero.heroNumber}</h2>
        </div>
      </div>
    </section>
  );
};

//* Image Section
interface ServicePageImageProps {
  service: ServicePageImageTypes;
}

const ImageSection = ({ service }: ServicePageImageProps) => {
  return (
    <section>
      <div className="relative flex h-0 w-full items-end pb-[66%]">
        <Image
          src={service.featImg}
          alt={service.featImgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

//* Intro Section
interface ServicePageIntroProps {
  service: ServicePageIntroTypes;
}
const IntroSection = ({ service }: ServicePageIntroProps) => {
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
                <h2>{service.pageIntro.introTitle}</h2>
              </div>
            </h2>
          </div>

          <div className="flex w-[45%] flex-col" id="div-3">
            <p className="whitespace-pre-line">
              {service.pageIntro.introDescription}
            </p>
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
      <ImageSection service={service} />
      <IntroSection service={service} />
    </div>
  );
}
