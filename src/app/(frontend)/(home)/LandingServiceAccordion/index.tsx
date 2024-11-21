"use client";

import Image from "next/image";
import { useState } from "react";

interface LandingServiceAccordionProps {
  id: string;
  serviceName: string;
  description: string;
  tools: string[];
  image1: string;
  image2: string;
}

export function LandingServiceAccordion({
  id,
  serviceName,
  description,
  tools = [],
  image1,
  image2,
}: LandingServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-solid border-t-black/[0.1]">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6">
        <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-4">
          <div className="text-5xl font-medium text-black">{id}</div>
          <div className="col-start-4 col-end-11 row-start-1 row-end-2 text-left text-5xl font-medium text-black">
            {serviceName}
          </div>
          <Image
            className={`col-start-11 col-end-13 row-start-1 row-end-2 inline-block h-8 w-8 max-w-full self-center justify-self-end align-middle transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d1955516c02b288d9f66e0_Plus%20Icon.svg"
            alt={isOpen ? "Close section" : "Open section"}
            width={32}
            height={32}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-8">
            <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-x-4 gap-y-12">
              <div className="col-start-4 row-start-1 row-end-2 grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-4">
                <Image
                  className="inline-block h-40 w-full max-w-full align-middle"
                  src={image1}
                  alt={`${serviceName} - Image 1`}
                  width={400}
                  height={160}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <Image
                  className="inline-block h-40 w-full max-w-full align-middle"
                  src={image2}
                  alt={`${serviceName} - Image 2`}
                  width={400}
                  height={160}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-start-4 col-end-8 row-start-2 row-end-3 pb-32 pt-16"
            style={{
              gridArea: "2 / 4 / 3 / 8",
            }}
          >
            <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-x-4 gap-y-12">
              <div className="col-start-4 col-end-8 row-start-1 row-end-2 flex flex-col gap-2">
                <div className="text-black">What we do</div>
                <div className="h-0 w-full bg-black/[0.1]" />
                <div className="text-black">{description}</div>
              </div>
              <div
                className="col-start-10 col-end-13 row-start-1 row-end-2 flex flex-col gap-2"
                style={{
                  gridArea: "1 / 10 / 2 / 13",
                }}
              >
                <div className="text-black">Tools</div>
                <div>
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="text-black">{tool}</div>
                      <div className="h-1.5 w-1.5 rounded-2xl bg-black" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
