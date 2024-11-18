"use client";

// Next Imports
import React from "react";
import Image from "next/image";

// Types
import { Technology, Media } from "@/payload-types";

// Components
import { Title } from "@/components/Title";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TechItem = ({ logo }: { logo: string }) => {
  if (!logo) return null;
  
  return (
    <div className="h-full w-[280px] px-4 flex-shrink-0">
      <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-900 py-10">
        <div className="relative h-12 w-full px-8">
          <Image
            src={logo}
            alt="Technology Logo"
            fill
            style={{ objectFit: "contain" }}
            className="select-none"
          />
        </div>
      </div>
    </div>
  );
};

interface LocationTechSliderProps {
  technologies?: Technology[];
}

export function LocationTechSlider({ technologies: initialTechnologies = [] }: LocationTechSliderProps) {
  const [technologies, setTechnologies] = React.useState<Technology[]>(initialTechnologies);

  React.useEffect(() => {
    if (initialTechnologies.length > 0) {
      setTechnologies(initialTechnologies);
      return;
    }

    const fetchTechnologies = async () => {
      try {
        const response = await fetch('/api/technologies');
        const data = await response.json();
        if (data.docs) {
          setTechnologies(data.docs);
        }
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, [initialTechnologies]);

 
  const logos = technologies.length > 0
    ? technologies
        .filter(tech => tech.logoLight)
        .map(tech => ({
          id: tech.id,
          logo: typeof tech.logoLight === "string" 
            ? tech.logoLight 
            : (tech.logoLight as Media)?.url ?? "/images/logo-placeholder.png"
        }))
        .filter(tech => tech.logo)
    : Array.from({ length: 10 }).map((_, i) => ({
        id: String(i),
        logo: "/images/logo-placeholder.png"
      }));

  
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-brand-dark-bg py-24 pb-20 text-black">
      <div className="text-black items-end flex-wrap justify-between px-2 flex w-full text-5xl sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60 mb-32">
        <div className="px-2 text-white lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="items-start flex-col flex">
            <Title el="h2" size="headline-large">We use the latest technologies available to create timeless designs.</Title>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
          speed={15000}
          allowTouchMove={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="!w-full"
        >
          {duplicatedLogos.map(({ id, logo }, index) => (
            <SwiperSlide key={`${id}-${index}`} className="!w-auto">
              <TechItem logo={logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
