import React from "react";
import { serializeLexical } from "./serialize";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@root/utils/cn";

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
    theme: {
      light: "text-black",
      dark: "text-white",
    },
  },
  defaultVariants: {
    colorLinks: true,
    enableGutter: true,
    enableProse: true,
    theme: "dark",
  },
});

const defaultStyles = {
  paragraph: "text-body-medium mb-4",
  h1: "text-headline-large mb-4 mb-6",
  h2: "text-headline-medium mb-4 mb-6",
  h3: "text-headline-small mb-4 mb-6",
  h4: "text-title-large mb-4 mb-6",
  h5: "text-title-medium mb-4 mb-6",
  h6: "text-title-small mb-4 mb-6",
  list: "list-disc list-inside mb-4 text-body-medium",
  listItem: "mb-2 ",
  quote: "border-l-4  pl-4 mb-4",
  link: "text-blue-600 hover:text-blue-800 visited:text-purple-600",
};

type RichTextProps = VariantProps<typeof richTextVariants> & {
  className?: string;
  content: any;
  theme?: "light" | "dark";
  customClasses?: Partial<typeof defaultStyles>;
};

export const RichText: React.FC<RichTextProps> = ({
  className,
  content,
  colorLinks,
  enableGutter,
  enableProse,
  theme,
  customClasses = {},
}) => {
  if (!content) {
    return null;
  }

  if (
    Array.isArray(content) ||
    typeof content !== "object" ||
    !("root" in content)
  ) {
    return null;
  }

  const mergedClasses = { ...defaultStyles, ...customClasses };

  try {
    return (
      <div
        className={cn(
          richTextVariants({ colorLinks, enableGutter, enableProse, theme }),
          "first:mt-0 last:mb-0 [&_span]:whitespace-pre-wrap",
          className,
        )}
      >
        {serializeLexical({
          nodes: content?.root?.children,
          customClasses: mergedClasses,
        })}
      </div>
    );
  } catch (error) {
    return null;
  }
};

export default RichText;
