import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import BrewwwLogo from "/public/images/brewww-logotype-gold.png";

interface HeaderData {
  logo: {
    url: string;
  };
}
export default async function Header() {
  const payload = await getPayloadHMR({ config });
  const header = (await payload.findGlobal({ slug: "header" })) as HeaderData;

  return (
    <>
      <div className="flex h-32 flex-row items-center">
        <Link href="/">
          <div className="relative h-12 w-44">
            <Image
              src={header.logo.url}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <header className="w-full bg-brand-black text-sm text-neutral-400">
        <div className="mx-auto max-w-[120rem] px-12">
          <div className="grid grid-cols-3 items-center py-4">
            <nav className="flex items-center space-x-10 font-semibold uppercase text-white">
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/work"
              >
                Our work
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/services"
              >
                Services
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/why-brewww"
              >
                Why Brewww?
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/about"
              >
                About
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/play"
              >
                Play
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/new/blog"
              >
                Blog
              </Link>
            </nav>
            <div className="flex justify-center">
              <Link href="/new">
                <img
                  className="w-36 max-w-full cursor-pointer"
                  src={BrewwwLogo.src}
                  alt="Brewww Logo"
                />
              </Link>
            </div>
            <div className="flex items-center justify-end space-x-4 text-white">
              <div className="flex items-center space-x-4 uppercase">
                <Link
                  className="relative inline-block min-w-max font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href="mailto:hello@brewww.studio"
                >
                  hello@brewww.studio
                </Link>
                <Link
                  className="inline-block h-12 min-w-[9.88rem] rounded-sm bg-brand-gold px-5 font-bold text-black md:min-w-[10.63rem] min-[1680px]:h-16 min-[1680px]:min-w-[13.75rem]"
                  href="/new/contact"
                >
                  <span className="flex h-full w-full cursor-pointer items-center justify-center">
                    Let's talk
                  </span>
                </Link>
              </div>
              <button className="h-12 min-w-8 cursor-pointer">
                <span className="flex h-full w-full items-center justify-center">
                  <svg
                    className="block h-4 w-4 max-w-full"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 5H0v2h16V5Zm0 4H0v2h16V9Z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
