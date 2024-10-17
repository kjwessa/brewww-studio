import { Service } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <>
      {" "}
      <div className="w-full border-b-2 border-solid border-neutral-700">
        <a
          className="flex w-full items-center py-4 lg:pb-6 lg:pt-6"
          href={`/services/${service.slug}`}
        >
          <div className="inline-flex h-16 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 md:h-28 md:w-36 lg:w-0 min-[1800px]:h-40" />
          <div className="inline-flex cursor-pointer text-[7.50rem] leading-none text-white">
            <div>{service.title}</div>
          </div>
        </a>
      </div>
    </>
  );
}
