"use client";

import React, { useState } from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import BrewwwLogo from "/public/images/brewww-logotype-gold.png";

export default function Header() {
  // TODO: bring back the Payload call when the design is completed
  // const payload = await getPayloadHMR({ config });
  // TODO: bring back the header when the design is completed
  // const header = (await payload.findGlobal({ slug: "header" })) as HeaderData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-dark-bg text-sm text-neutral-400">
        <div className="mx-auto max-w-[120rem] px-12">
          <div className="grid grid-cols-3 items-center py-4">
            <nav className="flex items-center space-x-4 font-semibold uppercase text-white">
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/about"
              >
                About
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/why-brewww"
              >
                Why
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/play"
              >
                Play
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/work"
              >
                Work
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/work/individual"
              >
                /IN
              </Link>

              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/services/individual"
              >
                /IN
              </Link>
            </nav>
            <div className="flex justify-center">
              <Link href="/home">
                <Image
                  className="w-36 max-w-full cursor-pointer"
                  src={BrewwwLogo}
                  alt="Brewww Logo"
                  width={144}
                  height={40}
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
                  href="/contact"
                >
                  <span className="flex h-full w-full cursor-pointer items-center justify-center">
                    Let's talk
                  </span>
                </Link>
              </div>
              <button
                className="h-12 min-w-8 cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="flex h-full w-full items-center justify-center">
                  {!isMenuOpen ? (
                    <svg
                      width="24"
                      height="24"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M3 5H21"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 12H21"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 19H21"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M9.87871 14.1213L12 12M14.1213 9.87868L12 12M12 12L9.87871 9.87868M12 12L14.1213 14.1213"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 h-screen w-screen bg-brand-gold transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative m-2 flex h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] flex-col justify-between overflow-hidden rounded-md bg-brand-dark-surface p-6">
          <div className="relative z-10 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                width="32"
                height="32"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#FFFFFF"
              >
                <path
                  d="M9.87871 14.1213L12 12M14.1213 9.87868L12 12M12 12L9.87871 9.87868M12 12L14.1213 14.1213"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative z-10 flex flex-col gap-y-4 pb-6 pl-6">
            <div className="w-full overflow-hidden text-8xl uppercase leading-none text-white">
              <Link
                className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
                href=""
              >
                <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                  <div className="col-span-1 row-span-1 -mb-1">Work</div>
                </div>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="w-full overflow-hidden text-8xl uppercase leading-none text-white">
              <Link
                className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
                href=""
              >
                <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                  <div className="col-span-1 row-span-1 -mb-1">About</div>
                </div>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="w-full overflow-hidden text-8xl uppercase leading-none text-white">
              <Link
                className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
                href=""
              >
                <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                  <div className="col-span-1 row-span-1 -mb-1">Play</div>
                </div>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="w-full overflow-hidden text-8xl uppercase leading-none text-white">
              <Link
                className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
                href=""
              >
                <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                  <div className="col-span-1 row-span-1 -mb-1">Contact</div>
                </div>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
