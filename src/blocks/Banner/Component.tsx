// import type { Block } from "payload";
// import { RichTextContent } from "@payloadcms/richtext-lexical";

// import { cn } from "@/utilities/cn";
// import React from "react";
// import RichText from "@/components/RichText";

// type BannerBlockProps = {
//   style: "info" | "warning" | "error" | "success";
//   content: RichTextContent;
// };

// type Props = {
//   className?: string;
// } & BannerBlockProps;

// export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
//   return (
//     <div className={cn("mx-auto my-8 w-full", className)}>
//       <div
//         className={cn("flex items-center rounded border px-6 py-3", {
//           "border-border bg-card": style === "info",
//           "border-error bg-error/30": style === "error",
//           "border-success bg-success/30": style === "success",
//           "border-warning bg-warning/30": style === "warning",
//         })}
//       >
//         <RichText content={content} enableGutter={false} enableProse={false} />
//       </div>
//     </div>
//   );
// };
