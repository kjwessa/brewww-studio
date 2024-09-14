"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeImage() {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(imageContainerRef.current, {
      height: "68vh",
      width: "85%",
      margin: "auto",
    });

    gsap.to(imageContainerRef.current, {
      height: "80vh",
      width: "100%",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    // Parallax effect and subtle image size increase
    gsap.to(imageRef.current, {
      scale: 1.08, // 8% increase in size
      y: "-10%", // Move image up by 10% for parallax effect
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
      className="relative w-full overflow-hidden bg-neutral-900 text-white"
    >
      <div ref={imageRef} className="h-full w-full">
        <Image
          src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{
            objectPosition: "50% 30%",
          }}
        />
      </div>
    </section>
  );
}
