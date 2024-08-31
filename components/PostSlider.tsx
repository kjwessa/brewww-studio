"use client";

import { useState, useRef, useEffect } from "react";
import { Post } from "@/payload-types";
import { PostFeatCard } from "../src/app/components/PostFeatCard";

export const PostSlider = ({ posts }: { posts: Post[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.4; // 40% of container width
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const cardWidth = sliderRef.current.offsetWidth * 0.4;
        sliderRef.current.scrollLeft = currentIndex * cardWidth;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="scrollbar-hide overflow-x-auto" ref={sliderRef}>
        <div className="flex">
          {posts.map((post, index) => (
            <div key={post.id} className="w-[40%] flex-shrink-0 pr-[5%]">
              <PostFeatCard post={post} />
            </div>
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
