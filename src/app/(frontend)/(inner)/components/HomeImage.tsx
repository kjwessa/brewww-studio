"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeImage() {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(imageContainerRef.current, {
      height: "68vh",
      width: "calc(85% - 1rem)",
      margin: "auto",
    });

    gsap.to(imageContainerRef.current, {
      height: "80vh",
      width: "calc(100% - 1rem)",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    gsap.set(imageRef.current, {
      scale: 1.18,
      y: "15%",
    });

    gsap.to(imageRef.current, {
      y: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={imageContainerRef}
      className="relative w-full overflow-hidden rounded-sm bg-neutral-900 px-2 text-white"
    >
      <div ref={imageRef} className="h-full w-full overflow-hidden rounded-sm">
        <Image
          src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
          alt="Background"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    </section>
  );
}
