import React from "react";
import { serializeLexical } from "./serialize";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utilities/cn";

const richTextVariants = cva("", {
  variants: {
    colorLinks: {
      true: "[&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a:visited]:text-purple-600",
    },
    enableGutter: {
      true: "container",
      false: "max-w-none",
    },
    enableProse: {
      true: "prose mx-auto",
      false: "",
    },
  },
  defaultVariants: {
    colorLinks: true,
    enableGutter: true,
    enableProse: true,
  },
});

type RichTextProps = VariantProps<typeof richTextVariants> & {
  className?: string;
  content: any;
};

export const RichText: React.FC<RichTextProps> = ({
  className,
  content,
  colorLinks,
  enableGutter,
  enableProse,
}) => {
  console.log("[RichText/index.tsx] Rendering RichText component", {
    className,
    content,
  });

  if (!content) {
    console.warn(
      "[RichText/index.tsx] No content provided to RichText component",
    );
    return null;
  }

  if (
    Array.isArray(content) ||
    typeof content !== "object" ||
    !("root" in content)
  ) {
    console.error("[RichText/index.tsx] Invalid content structure", content);
    return null;
  }

  try {
    return (
      <div
        className={cn(
          richTextVariants({ colorLinks, enableGutter, enableProse }),
          "first:mt-0 last:mb-0 [&_span]:whitespace-pre-wrap",
          className,
        )}
      >
        {serializeLexical({ nodes: content?.root?.children })}
      </div>
    );
  } catch (error) {
    console.error(
      "[RichText/index.tsx] Error rendering RichText component",
      error,
    );
    return null;
  }
};

export default RichText;
