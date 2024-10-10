"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Browser() {
  useEffect(() => {
    const pulseElement = document.getElementById("pulse-effect");
    if (pulseElement) {
      pulseElement.style.display = "block"; // Ensure the element is visible
      pulseElement.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.2)" },
          { transform: "scale(1)" },
        ],
        {
          duration: 10000, // Adjusted duration for a smoother pulse
          iterations: Infinity,
        },
      );
    }
  }, []);

  return (
    <>
      <div
        className="flex w-full flex-col overflow-hidden rounded-lg"
        id="browser"
      >
        <div className="w-full" id="action-bar">
          <div className="flex items-center justify-between bg-gray-950 px-5 py-3 text-sm text-white">
            <div className="flex w-44 items-center justify-between">
              <Image
                className="inline-block h-3 w-12 max-w-full align-middle"
                src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127c54d2588c079ccac_Lights.svg"
                alt="Lights"
                width={48}
                height={12}
              />
              <div className="flex h-8 w-8 items-center justify-center">
                <Image
                  className="inline-block h-5 w-8 max-w-full align-middle"
                  src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127b85b65a2be6dcff0_Icon%20button-2.svg"
                  alt="Icon button 2"
                  width={32}
                  height={20}
                />
              </div>
              <div className="flex">
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    className="inline-block h-6 w-6 max-w-full align-middle"
                    src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127c54d2510c179ccab_Group-1.svg"
                    alt="Group 1"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    className="inline-block h-6 w-6 max-w-full align-middle"
                    src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127e067452af6405262_Group-2.svg"
                    alt="Group 2"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-full flex-grow text-xs" id="input">
              <div className="flex h-7 w-full items-center justify-center rounded-md bg-neutral-900 py-1 text-center text-white">
                https://brewww.studio
              </div>
            </div>
            <div className="flex w-44 items-center justify-end">
              <div className="flex w-28 items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    className="inline-block h-6 w-8 max-w-full align-middle"
                    src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127378b7ccfb212f01e_Group.svg"
                    alt="Group"
                    width={32}
                    height={24}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    className="inline-block h-6 w-8 max-w-full align-middle"
                    src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127b09fb126afbcbb22_Icon%20button.svg"
                    alt="Icon button"
                    width={32}
                    height={24}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    className="inline-block h-5 w-8 max-w-full align-middle"
                    src="https://assets.website-files.com/6136b007901e59633bd62692/6136b12770d10d043b021647_Icon%20button-1.svg"
                    alt="Icon button 1"
                    width={32}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative h-[75vh] w-full bg-white bg-opacity-[0.05] text-white backdrop-blur-md"
          id="content"
        >
          <div
            id="pulse-effect"
            className="absolute left-1/2 top-[75%] h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-80 blur-3xl"
          ></div>
        </div>
      </div>
    </>
  );
}
