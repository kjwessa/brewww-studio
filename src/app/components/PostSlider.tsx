"use client";

import { useState, useRef } from "react";
import { Post } from "@/payload-types";
import { PostFeatCard } from "./PostFeatCard";

export const PostSlider = ({ posts }: { posts: Post[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto" ref={sliderRef}>
        <div className="flex gap-6">
          {posts.map((post) => (
            <PostFeatCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-20 p-2"
        aria-label="Previous posts"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-20 p-2"
        aria-label="Next posts"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <path
            d="M9 18l6-6-6-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
