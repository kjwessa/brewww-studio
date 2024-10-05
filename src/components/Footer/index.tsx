import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import BrewwwLogo from "/public/images/brewww-logotype-gold.png";

export default async function Footer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({ slug: "footer" });
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer className="border-b-6 border-[#f8ac43] bg-[#060D0E] text-white">
        <div className="pt-28">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-3 gap-8">
              <div className="font-bold">
                <h6 className="mb-6 text-xl">Let's Explore</h6>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about-brewww-studio"
                      className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Our Studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Our Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h6 className="mb-6 text-xl">Let's Work</h6>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/work"
                      className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/capabilities"
                      className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Our Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-us"
                      className="relative inline-block min-w-max uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Hire Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h6 className="mb-6 text-xl">Let's Chat</h6>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@brewww.co"
                    className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    hello@brewww.co
                  </a>
                  <a
                    href="https://www.facebook.com/brewwwstudio"
                    className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    @brewwwstudio
                  </a>
                  <a
                    href="https://www.instagram.com/brewwwstudio/"
                    className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    @brewwwstudio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="py-12 text-lg text-white">
            <div className="m-auto w-full px-12 min-[100px]:max-w-full min-[100px]:px-16 min-[1920px]:max-w-[120rem] min-[1920px]:px-10">
              <div className="m-auto w-full">
                <Image
                  className="m-auto h-auto w-full max-w-full"
                  src={BrewwwLogo}
                  alt="Brewww Logo"
                />
              </div>
              <div className="mt-8 text-center text-white/60">
                <p>© {getCurrentYear()} Brewww Studio. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
