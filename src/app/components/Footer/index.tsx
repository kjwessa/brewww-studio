import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({ slug: "footer" });
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-zinc-950 pt-28 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="font-bold">
            <h6 className="mb-6 text-xl">Lets Explore</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/about-brewww-studio" className="hover:underline">
                  Our Studio
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:underline">
                  Our Insights
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h6 className="mb-6 text-xl">Lets Work</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/work" className="hover:underline">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:underline">
                  Our Capabilities
                </Link>
              </li>
              <li>
                <Link href="/hire-us" className="uppercase hover:underline">
                  Hire Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-bold">
            <h6 className="mb-6 text-xl">Lets Chat</h6>
            <div className="space-y-3">
              <a
                href="mailto:hello@brewww.co"
                className="block hover:underline"
              >
                hello@brewww.co
              </a>
              <a
                href="https://www.facebook.com/brewwwstudio"
                className="block hover:underline"
              >
                @brewwwstudio
              </a>
              <a
                href="https://www.instagram.com/brewwwstudio/"
                className="block hover:underline"
              >
                @brewwwstudio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 py-4 text-center text-white/60">
        <p>© {getCurrentYear()} Brewww Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
