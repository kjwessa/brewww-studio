"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageGrowProps {
  imageSrc: string;
  altText?: string;
}

export const ImageGrow: React.FC<ImageGrowProps> = ({
  imageSrc,
  altText = "Background",
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#growthImageMask", { scale: 0.75 });
    gsap.set("#growthImage", { scale: 2 });

    gsap.to("#growthImageMask, #growthImage", {
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#growthImageContainer",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      className="relative h-[60vh] w-full overflow-hidden bg-brand-dark-bg px-2 py-2 text-white"
      id="growthImageContainer"
    >
      <div className="h-full w-full" id="growthImageWrap">
        <div
          className="h-full w-full overflow-hidden rounded-md"
          id="growthImageMask"
        >
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="rounded-md object-cover"
            style={{
              objectPosition: "50% 30%",
            }}
            id="growthImage"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrow;
