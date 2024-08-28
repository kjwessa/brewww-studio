import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";

interface HeaderData {
  logo: {
    url: string;
  };
}
export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config });
  const header = (await payload.findGlobal({ slug: "header" })) as HeaderData;

  return (
    <header>
      <div className="relative h-20 w-44">
        <Image
          src={header.logo.url}
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}
