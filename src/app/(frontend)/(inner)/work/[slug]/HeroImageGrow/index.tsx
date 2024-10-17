"use client";

import React, { useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("ImageGrow: Component mounted");
    gsap.registerPlugin(ScrollTrigger);
    console.log("ImageGrow: GSAP ScrollTrigger plugin registered");

    if (isLoaded) {
      console.log("ImageGrow: Image loaded, setting up animations");
      gsap.set("#growthImageMask", { scale: 0.75, opacity: 0 });
      gsap.set("#growthImage", { scale: 2, opacity: 0 });
      console.log("ImageGrow: Initial GSAP settings applied");

      gsap.to("#growthImageMask, #growthImage", {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#growthImageContainer",
          start: "top 50%",
          end: "bottom bottom",
          scrub: true,
        },
      });
      console.log("ImageGrow: Scroll-triggered animation set up");

      gsap.to("#growthImageMask, #growthImage", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      console.log("ImageGrow: Opacity animation set up");
    }
  }, [isLoaded]);

  return (
    <section
      className="relative h-[80vh] w-full overflow-hidden bg-brand-dark-bg px-2 py-2"
      id="growthImageContainer"
    >
      <div className="h-full w-full" id="growthImageWrap">
        <div
          className="h-full w-full overflow-hidden rounded-md opacity-0"
          id="growthImageMask"
        >
          <Image
            src={imageSrc}
            alt={altText}
            priority
            fill
            className="rounded-md object-cover opacity-0"
            style={{
              objectPosition: "50% 30%",
            }}
            id="growthImage"
            onLoad={() => {
              console.log("ImageGrow: Image loaded");
              setIsLoaded(true);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrow;
