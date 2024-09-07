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

  // Log the header data
  console.log("Header data:", JSON.stringify(header, null, 2));

  // Log the logo URL
  console.log("Logo URL:", header.logo.url);

  return (
    <div className="flex h-32 flex-row items-center">
      <Link href={"/"}>
        <div className="relative h-12 w-44">
          {header.logo && header.logo.url ? (
            <>
              <Image
                src={header.logo.url}
                alt="logo"
                fill
                className="object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                }}
                onLoad={() => {
                  console.log("Image loaded successfully");
                }}
              />
              <noscript>
                <img
                  src={header.logo.url}
                  alt="logo"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </noscript>
            </>
          ) : (
            <div>Logo not available</div>
          )}
        </div>
      </Link>
    </div>
  );
}
