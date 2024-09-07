import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

interface HeaderData {
  logo: {
    url: string;
  };
}
export default async function Header() {
  const payload = await getPayloadHMR({ config });
  const header = (await payload.findGlobal({ slug: "header" })) as HeaderData;

  return (
    <div className="flex h-32 flex-row items-center">
      <Link href={"/"}>
        <div className="relative h-12 w-44">
          <Image
            src={header.logo.url}
            alt="logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
}
