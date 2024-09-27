import { cn } from "@/utilities/cn";
import React from "react";

import { serializeLexical } from "./serialize";

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
  console.log("RichText component rendering with props:", {
    className,
    content,
    enableGutter,
    enableProse,
  });

  if (!content) {
    console.warn("RichText received empty content");
    return null;
  }

  try {
    return (
      <div
        className={cn(
          {
            container: enableGutter,
            "max-w-none": !enableGutter,
            "prose mx-auto": enableProse,
          },
          className,
        )}
      >
        {content &&
          !Array.isArray(content) &&
          typeof content === "object" &&
          "root" in content &&
          serializeLexical({ nodes: content?.root?.children })}
      </div>
    );
  } catch (error) {
    console.error("Error rendering RichText component:", error);
    return <div>Error rendering content</div>;
  }
};

export default RichText;

// import React from "react";
// import { serializeLexical } from "./serialize";
// import { LexicalNode } from "./nodeFormat";

// type Props = {
//   className?: string;
//   content: Record<string, any> | string;
//   enableGutter?: boolean;
//   enableProse?: boolean;
// };

// const RichText: React.FC<Props> = ({
//   className,
//   content,
//   enableGutter = true,
//   enableProse = true,
// }) => {
//   const renderContent = () => {
//     if (typeof content === "string") {
//       // If content is a string, render it directly after decoding HTML entities
//       return decodeHTMLEntities(content);
//     } else if (content && content.root && content.root.children) {
//       // If content is Lexical JSON, use serializeLexical
//       return serializeLexical({
//         nodes: content.root.children as LexicalNode[],
//       });
//     } else {
//       return null;
//     }
//   };

//   // TODO: Add dark:prose-invert to the className if I want dark mode later
//   return (
//     <div
//       className={` ${enableGutter ? "container" : "max-w-none"} ${enableProse ? "prose mx-auto" : ""} ${className || ""} `.trim()}
//     >
//       {renderContent()}
//     </div>
//   );
// };

// // Helper function to decode HTML entities
// function decodeHTMLEntities(text: string): string {
//   const textArea = document.createElement("textarea");
//   textArea.innerHTML = text;
//   return textArea.value;
// }

// export default RichText;
