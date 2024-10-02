import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utilities/cn";

import { VimeoPlayer } from "./Vimeo/index";
import { YouTubePlayer } from "./YouTube/index";

const videoPlayerStyles = cva("relative w-full", {
  variants: {
    platform: {
      vimeo: "",
      youtube: "",
    },
  },
  defaultVariants: {
    platform: "vimeo",
  },
});

export const Video: React.FC<{
  id?: string;
  platform?: "vimeo" | "youtube";
}> = (props) => {
  const { id, platform = "vimeo" } = props;

  return (
    <div className={cn(videoPlayerStyles({ platform }), "pt-[56.25%]")}>
      {platform === "youtube" && <YouTubePlayer videoID={id} />}
      {platform === "vimeo" && <VimeoPlayer videoID={id} />}
    </div>
  );
};

const richTextStyles = cva("", {
  variants: {
    colorLinks: {
      true: "text-blue-600 hover:text-blue-800",
    },
  },
});

export const RichText: React.FC<{
  children: React.ReactNode;
  colorLinks?: boolean;
}> = ({ children, colorLinks }) => {
  return (
    <div className={cn(richTextStyles({ colorLinks }), "first:mt-0 last:mb-0")}>
      {children}
    </div>
  );
};

export const RichTextSpan: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <span className="whitespace-pre-wrap">{children}</span>;
};
