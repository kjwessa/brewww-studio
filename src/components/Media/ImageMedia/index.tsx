"use client";

import type { StaticImageData } from "next/image";

import { cn } from "@root/utils/cn";
import NextImage from "next/image";
import React from "react";

import type { Props as MediaProps } from "../types";

import cssVariables from "@cssVariables";

const { breakpoints } = cssVariables;

console.log(
  "[src/components/Media/ImageMedia/index.tsx] Initializing ImageMedia component",
);

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
  } = props;

  console.log(
    "[src/components/Media/ImageMedia/index.tsx] ImageMedia props:",
    props,
  );

  const [isLoading, setIsLoading] = React.useState(true);

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || "";

  if (!src && resource && typeof resource === "object") {
    const {
      alt: altFromResource,
      filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource;

    width = fullWidth!;
    height = fullHeight!;
    alt = altFromResource;
    src =
      url && url.startsWith("http")
        ? url
        : url
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`
          : "";
    console.log(
      "[src/components/Media/ImageMedia/index.tsx] Constructed src:",
      src,
    );
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value}px`)
        .join(", ");

  console.log(
    "[src/components/Media/ImageMedia/index.tsx] Calculated sizes:",
    sizes,
  );

  return (
    <NextImage
      alt={alt || ""}
      className={cn(imgClassName)}
      fill={fill}
      height={!fill ? height : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        console.log("[src/components/Media/ImageMedia/index.tsx] Image loaded");
        if (typeof onLoadFromProps === "function") {
          onLoadFromProps();
        }
      }}
      onError={(e) => {
        console.error(
          "[src/components/Media/ImageMedia/index.tsx] Error loading image:",
          e,
        );
      }}
      priority={priority}
      quality={90}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  );
};
