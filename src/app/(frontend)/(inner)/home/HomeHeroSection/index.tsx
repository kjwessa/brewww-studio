"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const StarSVG = ({ isPulsing }: { isPulsing: boolean }) => (
  <svg
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={isPulsing ? "pulsing-star" : ""}
  >
    <circle cx="2" cy="2" r="1" fill="white" opacity="0.5" />
  </svg>
);

export function HomeHeroSection() {
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const heroMessageRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const isPulsing = i % 4 === 0;
        newStars.push(
          <div
            key={i}
            style={{ position: "absolute", top, left }}
            ref={(el) => {
              if (starsRef.current) {
                starsRef.current[i] = el;
              }
            }}
          >
            <StarSVG isPulsing={isPulsing} />
          </div>,
        );
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    starsRef.current.forEach((star, index) => {
      if (star && index % 3 === 0) {
        gsap.to(star, {
          opacity: 0.2,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, [stars]);

  useEffect(() => {
    if (heroMessageRef.current) {
      const heroMessage = heroMessageRef.current;
      // Temporarily hiding the SplitType animation
      // const splitText = new SplitType(heroMessage, { types: "words, chars" });

      // gsap.from(splitText.chars, {
      //   y: "110%",
      //   opacity: 0,
      //   rotationZ: 10,
      //   duration: 0.4,
      //   ease: "power2.out",
      //   stagger: 0.02,
      // });
    }
  }, []);

  return (
    <section
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark-bg to-brand-dark-surface text-zinc-50"
      id="hero"
    >
      <div className="absolute inset-0 overflow-hidden">{stars}</div>
      <div className="container relative z-10 mx-auto px-4 py-4">
        <h1
          ref={heroMessageRef}
          className="mx-auto mb-6 max-w-5xl text-center text-display-medium font-bold leading-[0.9] tracking-tighter"
          id="hero-message"
        >
          <span className="opacity-30">From pencils to pixels</span>
          <span> we craft unbounded brands.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-body-medium opacity-70 md:text-2xl">
          Brewww is the talent, tools, and deliverables to move you from today's
          reality to tomorrow's potential.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-white/35" />
            <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 transform bg-white" />
          </div>
        </div>
      </div>

      <div
        className="rotate-15 absolute bottom-0 left-0 -mb-[100px] -ml-[100px] h-[25vh] w-[75vw] bg-[#ff6231] blur-[200px]"
        id="hero-blur-red"
      />
      <div
        className="left-30 -rotate-15 absolute bottom-0 -mb-[100px] -ml-[100px] h-[25vh] w-[75vw] bg-[#ffb931] blur-[200px]"
        id="hero-blur-gold"
      />

      <div
        className="right-30 -rotate-15 absolute bottom-0 -mb-[100px] -mr-[100px] h-[25vh] w-[75vw] bg-[#14c7ff] blur-[200px]"
        id="hero-blur-sky"
      />
      <div
        className="-rotate-15 absolute bottom-0 right-0 -mb-[100px] -mr-[100px] h-[25vh] w-[75vw] bg-[#1061ff] blur-[200px]"
        id="hero-blur-blue"
      />

      <div className="absolute bottom-0 left-1/2 z-0 h-[125%] w-[250%] -translate-x-1/2 translate-y-[90%] overflow-hidden rounded-[50%]">
        <div
          className="relative h-full w-full bg-brand-dark-bg"
          style={{
            boxShadow: "inset 0 0 50px 20px rgba(255, 255, 255, 0.25)",
          }}
          id="arc"
        ></div>
      </div>
    </section>
  );
}
