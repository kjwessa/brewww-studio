import React from "react";
import { serializeLexical } from "./serializeLexical";
import { LexicalNode } from "./lexicalNodeFormat";

type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  console.log("RichText content:", content); // Debug log

  if (!content || !content.root || !content.root.children) {
    console.log("Invalid content structure"); // Debug log
    return null;
  }

  return (
    <div
      className={` ${enableGutter ? "container" : "max-w-none"} ${enableProse ? "prose mx-auto dark:prose-invert" : ""} ${className || ""} `.trim()}
    >
      {serializeLexical({ nodes: content.root.children as LexicalNode[] })}
    </div>
  );
};

export default RichText;
