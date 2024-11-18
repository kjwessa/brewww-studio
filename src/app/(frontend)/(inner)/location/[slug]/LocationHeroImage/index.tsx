import Image from "next/image";
import { Media } from "@/payload-types";

interface LocationHeroImageProps {
  image: Media;
}

export const LocationHeroImage: React.FC<LocationHeroImageProps> = ({ image }) => {
  return (
    <section className="bg-brand-dark-bg px-2 text-black sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
      <div className="relative flex w-full flex-wrap px-2 lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
        <div className="absolute top-0 z-20 rounded-br-3xl pb-4 pr-4 lg:pb-6 lg:pr-8">
          <svg
            className="absolute right-[0.13rem] top-0 h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
            fill="rgb(14, 15, 17)"
            version="1.1"
            viewBox="0 0 100 100"
            x="0"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
              fill="rgb(14, 15, 17)"
            />
          </svg>
          <svg
            className="absolute bottom-[0.13rem] left-0 h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
            fill="rgb(14, 15, 17)"
            version="1.1"
            viewBox="0 0 100 100"
            x="0"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
              fill="rgb(14, 15, 17)"
            />
          </svg>
          <div className="relative inline-flex items-center">
            <a
              className="inline-flex"
              href=""
              style={{
                outlineOffset: "2px",
                outlineStyle: "solid",
                outlineWidth: "2px",
              }}
            >
              <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-800 px-5 py-2 text-white">
                <div className="inline-flex">Tell me more</div>
              </div>
              <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-zinc-800" />
            </a>
            <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center text-white">
              <div className="relative overflow-hidden">
                <div>
                  <svg
                    className="h-3 w-3"
                    fill="rgb(255, 255, 255)"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>
                </div>
                <div className="absolute left-0 top-0">
                  <svg
                    className="h-3 w-3"
                    fill="rgb(255, 255, 255)"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-zinc-900">
          <Image
            className="object-cover"
            src={typeof image.url === 'string' ? image.url : ''}
            alt={image.alt || "Location Hero Image"}
            fill
          />
        </div>
      </div>
    </section>
  );
};
