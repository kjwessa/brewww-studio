import React from "react";

export default function HomeHero() {
  return (
    <section className="bg-brand-black flex min-h-[90vh] items-center justify-center text-white">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mx-auto mb-6 max-w-5xl text-center text-[7.2vw] font-bold leading-[0.9] tracking-tighter">
          <span className="opacity-50">If </span>
          good enough
          <span className="opacity-50">
            {" "}
            isn't working out, why not aim for{" "}
          </span>
          <span className="text-brand-gold">great</span>
          <span className="opacity-50">?</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl opacity-70 md:text-2xl">
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
    </section>
  );
}
