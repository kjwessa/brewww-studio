import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utilities/cn";
import { serializeLexical } from "./serialize";
import { LexicalNode } from "./nodeFormat";

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
  if (!content) {
    return null;
  }

  const renderContent = () => {
    if (typeof content === "string") {
      return decodeHTMLEntities(content);
    } else if (
      content &&
      !Array.isArray(content) &&
      typeof content === "object" &&
      "root" in content
    ) {
      return serializeLexical({
        nodes: content.root.children as LexicalNode[],
      });
    }
    return null;
  };

  return (
    <div
      className={cn(
        richTextVariants({ colorLinks, enableGutter, enableProse }),
        "first:mt-0 last:mb-0",
        className,
      )}
    >
      {renderContent()}
    </div>
  );
};

// Helper function to decode HTML entities
function decodeHTMLEntities(text: string): string {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

export default RichText;
