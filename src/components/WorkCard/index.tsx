import Link from "next/link";
import Image from "next/image";
import type { Work as WorkType } from "@/payload-types";

export type WorkCardProps = {
  project: WorkType;
};

export function WorkCard({ project }: WorkCardProps) {
  return (
    <div className="relative w-full">
      <Link
        href={`/location/${project.slug}`}
        className="relative flex flex-col items-start"
      >
        <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
          <div className="absolute right-0 top-0 z-20 rounded-bl-3xl pb-3 pl-3 pt-1">
            <svg
              className="absolute left-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
              fill="rgb(14, 15, 17)"
              version="1.1"
              viewBox="0 0 100 100"
              x="0"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                fill="rgb(14, 15, 17)"
              />
            </svg>
            <svg
              className="absolute bottom-[0.13rem] right-0 h-10 w-10 text-neutral-950 lg:h-10 lg:w-10"
              fill="rgb(14, 15, 17)"
              version="1.1"
              viewBox="0 0 100 100"
              x="0"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                fill="rgb(14, 15, 17)"
              />
            </svg>
            <div className="-mb-2 -mr-2 flex flex-wrap items-center text-sm text-white lg:-mb-3">
              <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                Branding
              </div>
              <div className="mb-2 mr-2 rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3">
                Website
              </div>
              <div className="mb-2 mr-2 hidden rounded-full bg-zinc-800 px-4 pb-1.5 pt-2 lg:mb-3 lg:mr-3 lg:inline-flex">
                SEO
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-800 text-black">
            <div className="relative w-full overflow-hidden">
              <div className="w-full">
                <div className="relative w-full overflow-hidden pb-[75%]">
                  <Image
                    src={
                      typeof project.image === "string"
                        ? project.image
                        : project.image?.url || ""
                    }
                    alt={
                      typeof project.image === "object"
                        ? project.image?.alt
                        : ""
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
          <div className="font-light">2023</div>
          <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <div className="ml-3 font-light">{project.title}</div>
        </div>
        <h2 className="cursor-pointer pr-10 text-4xl text-white">
          {project.tagline}
        </h2>
      </Link>
    </div>
  );
}
