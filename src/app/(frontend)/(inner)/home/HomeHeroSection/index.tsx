"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HomeHeroSection() {
  const sunRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLHeadingElement>(null);
  const secondElementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const sun = sunRef.current;
    const firstElement = firstElementRef.current;
    const secondElement = secondElementRef.current;

    if (sun && firstElement && secondElement) {
      gsap.set([firstElement, secondElement], { opacity: 0 });
      gsap.set(sun, { filter: "blur(0px)" });

      const tl = gsap.timeline();

      tl.to(firstElement, { opacity: 1, duration: 1, ease: "power2.inOut" })
        .to(secondElement, { opacity: 1, duration: 1, ease: "power2.inOut" })
        .to(sun, {
          filter: "blur(100px)",
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(sun, {
              filter: "blur(150px)",
              duration: 2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          },
        });
    }

    return () => {
      gsap.killTweensOf([sun, firstElement, secondElement]);
    };
  }, []);

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-brand-dark-bg text-zinc-50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1
          ref={firstElementRef}
          className="mx-auto mb-6 max-w-5xl text-center text-display-medium font-bold leading-[0.9] tracking-tighter"
          id="animate-first"
        >
          <span className="opacity-30">From pencils to pixels</span>
          <span> we craft unbounded brands.</span>
        </h1>
        <p
          ref={secondElementRef}
          className="text-body-medium mx-auto mt-6 max-w-3xl text-center opacity-70 md:text-2xl"
          id="animate-second"
        >
          We craft brand identities, websites that drive results, and compelling
          storytelling that showcase your full potential. Local feel, global
          reach.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-white/35" />
            <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 transform bg-white" />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-1/2 z-0 h-[130%] w-[120%] -translate-x-1/2 translate-y-[95%]"
        id="animate-third"
      >
        <div
          ref={sunRef}
          id="sun"
          className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 translate-y-0 rounded-[50%] bg-brand-gold"
        />
        <div
          id="sun-glow"
          className="absolute bottom-0 left-1/2 z-10 h-[99.9%] w-[99.9%] -translate-x-1/2 translate-y-[0.35%] rounded-[50%] bg-brand-dark-bg"
        />
      </div>
    </section>
  );
}
