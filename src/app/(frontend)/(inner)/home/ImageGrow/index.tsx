"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ImageGrow: React.FC = () => {
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
      className="relative h-[80vh] w-full overflow-hidden bg-brand-dark-bg px-2 py-2 text-white"
      id="growthImageContainer"
    >
      <div className="h-full w-full" id="growthImageWrap">
        <div className="h-full w-full overflow-hidden" id="growthImageMask">
          <Image
            src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
            alt="Background"
            fill
            className="object-cover"
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
