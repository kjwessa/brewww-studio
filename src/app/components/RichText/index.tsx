import React from "react";
import { serializeLexical } from "./serializeLexical";
import { LexicalNode } from "./lexicalNodeFormat";

type Props = {
  className?: string;
  content: Record<string, any> | string;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  const renderContent = () => {
    if (typeof content === "string") {
      // If content is a string, render it directly after decoding HTML entities
      return decodeHTMLEntities(content);
    } else if (content && content.root && content.root.children) {
      // If content is Lexical JSON, use serializeLexical
      return serializeLexical({
        nodes: content.root.children as LexicalNode[],
      });
    } else {
      return null;
    }
  };

  // TODO: Add dark:prose-invert to the className if I want dark mode later
  return (
    <div
      className={` ${enableGutter ? "container" : "max-w-none"} ${enableProse ? "prose mx-auto" : ""} ${className || ""} `.trim()}
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
