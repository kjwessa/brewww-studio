import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({ slug: "footer" });
  const getCurrentYear = (): number => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <footer className="relative flex w-full flex-col items-center justify-end bg-zinc-950 pt-28 font-light text-white">
      <div className="m-auto grid auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto] gap-4 px-12 pb-8">
        <div
          className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-center font-bold"
          style={{
            gridArea: "2/1/3/2",
          }}
        >
          <h6 className="mb-8 min-h-[0vw] text-[1.38rem] leading-7">
            Lets Explore
          </h6>
          <ul className="mb-6 flex list-none flex-col">
            <li className="mb-3.5 list-item pr-5">
              <a
                className="relative inline-block max-w-full justify-end"
                href="/about-brewww-studio"
              >
                <div className="flex">Our Studio</div>
                <div className="relative h-0 w-full bg-white/[0.25]">
                  <div className="absolute bottom-auto left-0 right-auto top-0 h-0 w-0 bg-white" />
                </div>
              </a>
            </li>
            <li className="mb-3.5 list-item pr-5">
              <a
                className="relative inline-block max-w-full justify-end"
                href="/insights"
              >
                <div className="flex">Our Insights</div>
                <div className="relative h-0 w-full bg-white/[0.25]">
                  <div className="absolute bottom-auto left-0 right-auto top-0 h-0 w-0 bg-white" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3 justify-self-center font-bold">
          <h6 className="mb-8 min-h-[0vw] text-[1.38rem] leading-7">
            Lets Chat
          </h6>
          <a className="mb-1 flex max-w-full items-center" href="">
            <div className="w-11 pr-5"></div>
            hello@brewww.co
          </a>
          <a
            className="mb-1 flex max-w-full items-center"
            href="https://www.facebook.com/brewwwstudio"
          >
            <div className="w-11 pr-5"></div>
            @brewwwstudio
          </a>
          <a
            className="mb-1 flex max-w-full items-center"
            href="https://www.instagram.com/brewwwstudio/"
            id="a-5"
          >
            <div className="w-11 pr-5" id="div-6"></div>
            @brewwwstudio
          </a>
        </div>
        <div
          className="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-center font-bold"
          id="div-7"
          style={{
            gridArea: "2/2/3/3",
          }}
        >
          <h6 className="mb-8 min-h-[0vw] text-[1.38rem] leading-7">
            Lets Work
          </h6>
          <ul className="mb-6 flex list-none flex-col">
            <li className="mb-3.5 list-item pr-5">
              <a
                className="relative inline-block max-w-full justify-end"
                href="/work"
              >
                <div className="flex">Our Projects</div>
                <div className="relative h-0 w-full bg-white/[0.25]">
                  <div className="absolute bottom-auto left-0 right-auto top-0 h-0 w-0 bg-white" />
                </div>
              </a>
            </li>
            <li className="mb-3.5 list-item pr-5">
              <a
                className="relative inline-block max-w-full justify-end"
                href="/capabilities"
              >
                <div className="flex">Our Capabilities</div>
                <div className="relative h-0 w-full bg-white/[0.25]">
                  <div className="absolute bottom-auto left-0 right-auto top-0 h-0 w-0 bg-white" />
                </div>
              </a>
            </li>
            <li className="mb-3.5 list-item pr-5">
              <a
                className="relative inline-block max-w-full justify-end"
                href="/hire-us"
              >
                <div className="flex uppercase">
                  <div>Hire Us</div>
                </div>
                <div className="relative h-0 w-full bg-white/[0.25]">
                  <div className="absolute bottom-auto left-0 right-auto top-0 h-0 w-0 bg-white" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-4 text-white/[0.11]">
          <div className="flex items-center justify-around text-white/[0.6]">
            <div>
              © {getCurrentYear()} Brewww Studio. All Rights Reserved.{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
