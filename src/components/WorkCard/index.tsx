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
        href={`/work/${project.slug}`}
        className="relative flex flex-col items-start"
      >
        <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
          <div className="absolute right-0 top-0 z-20 pb-3 pl-3 pt-1">
            <div className="-mb-2 -mr-2 flex flex-wrap items-center text-label-small text-white lg:-mb-3">
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
          <div className="relative w-full overflow-hidden rounded-lg bg-zinc-800 text-black">
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
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
          <div className="text-label-large font-light">2023</div>
          <div className="ml-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <div className="ml-3 text-label-large font-light">
            {project.title}
          </div>
        </div>
        <h2 className="max-w-lg cursor-pointer pr-10 text-title-medium leading-none text-white">
          {project.tagline}
        </h2>
      </Link>
    </div>
  );
}
