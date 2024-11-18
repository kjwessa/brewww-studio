// Next Imports
import React from "react";
import Image from "next/image";

// Payload Imports
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { Technology, Media } from "@/payload-types";

const TechItem = ({ logo }: { logo: string }) => {
  return (
    <div className="h-full w-full px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
      <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-900 py-10 md:pb-14 md:pt-14">
        <div className="relative h-10 w-full px-10 md:h-10 md:pl-12 md:pr-12 min-[2100px]:h-14 min-[2100px]:pl-16 min-[2100px]:pr-16">
          <Image
            src={logo}
            alt="Technology Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export async function LocationTechSlider() {
  const payload = await getPayloadHMR({ config: configPromise });
  const technologies = await payload.find({
    collection: "technologies",
    limit: 100,
    where: {
      and: [
        {
          _status: {
            equals: "published",
          },
        },
        {
          logoLight: {
            exists: true,
          },
        },
      ],
    },
  });

  return (
    <section className="w-full bg-brand-dark-bg py-24 pb-20 text-black">
      <div className="text-white">
        <div className="flex w-full flex-wrap items-end justify-between px-2 text-5xl sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="flex flex-col items-start">
              <h2 className="max-w-3xl">
                We use the latest technologies available to create timeless
                designs.
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full overflow-hidden">
          <div className="flex h-full w-full">
            {technologies.docs.map((tech: Technology) => (
              <TechItem
                key={tech.id}
                logo={
                  typeof tech.logoLight === "string"
                    ? tech.logoLight
                    : (tech.logoLight as Media)?.url || ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
