"use client";

import React from "react";
import { Technology, Media } from "@/payload-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LogoCard } from "@/components/LogoCard";
import { Title } from "@/components/Title";
import "swiper/css";
import "./slider.css";

interface LocationTechSliderProps {
  technologies: Technology[];
}

export function LocationTechSlider({
  technologies,
}: LocationTechSliderProps) {
  const logos = React.useMemo(() => {
    const processedLogos = technologies
      .filter((tech) => tech.logoLight)
      .map((tech) => ({
        id: tech.id,
        logo: typeof tech.logoLight === "string"
          ? tech.logoLight
          : (tech.logoLight as Media)?.url ?? "/images/logo-placeholder.png",
      }))
      .filter((tech) => tech.logo);
    
    return [...processedLogos, ...processedLogos]; // Duplicate for continuous loop
  }, [technologies]);

  return (
    <section className="w-full bg-brand-dark-bg py-24 pb-20 text-black">
      <div className="mb-32 flex w-full flex-wrap items-end justify-between px-2 text-5xl text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="px-2 text-white lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
          <div className="flex flex-col items-start">
            <Title el="h2" size="headline-large">
              We use the latest technologies available to create timeless designs.
            </Title>
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
          {logos.map(({ id, logo }, index) => (
            <SwiperSlide key={`${id}-${index}`} className="!w-auto">
              <LogoCard logo={logo} variant="surface" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
