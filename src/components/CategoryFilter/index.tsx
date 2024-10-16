"use client";

import Link from "next/link";

export const CategoryFilter = ({
  title,
  count,
  slug,
  isActive = false,
}: {
  title: string;
  count: number;
  slug?: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      className={`inline-flex items-end ${isActive ? "text-white" : "text-neutral-400"}`}
      href={slug || "#"}
    >
      <div
        className={`cursor-pointer text-headline-small lowercase leading-none ${title.toLowerCase() === "explore all" ? "indent-48" : ""}`}
      >
        {title}
      </div>
      <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">{count}</div>
    </Link>
  );
};
