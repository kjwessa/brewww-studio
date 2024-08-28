import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({ slug: "footer" });

  return (
    <footer className="h-32 bg-white text-black">
      <div className="mx-auto mt-12 max-w-lg">
        {footer.nav.map((item, index) => {
          return (
            <Link key={index} href={item.link} className="mr-2">
              {item.label}
            </Link>
          );
        })}
      </div>
      <div>
        <p>{footer.copyrightNotice}</p>
      </div>
    </footer>
  );
}
