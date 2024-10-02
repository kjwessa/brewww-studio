import React, { Fragment, JSX } from "react";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utilities/cn";

// import escapeHTML from "escape-html";

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";
// import { Highlight } from "@components/Highlight";
// import SplitAnimate from "@components/SplitAnimate";
// import { BrBlock, SpotlightBlock, VideoBlock } from "@types";
import { Video } from "@components/RichText/Video";
// import { AllowedElements } from "@components/SpotlightAnimation/types";
// import SpotlightAnimation from "@components/SpotlightAnimation";
import { CMSLink, Reference } from "@components/CMSLink";
// import { Label } from "@components/Label";
// import { LargeBody } from "@components/LargeBody";
// import { SerializedLabelNode } from "@root/fields/richText/features/label/LabelNode";
// import { SerializedLargeBodyNode } from "@root/fields/richText/features/largeBody/LargeBodyNode";
import RichTextUpload from "@components/RichText/Upload";

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<any>; // Placeholder for SpotlightBlock | VideoBlock | BrBlock
// | SerializedLabelNode
// | SerializedLargeBodyNode;

type Props = {
  textInSplitAnimate?: boolean;
  nodes: NodeTypes[];
};

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

export function serializeLexical({
  nodes,
  textInSplitAnimate,
}: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, i): JSX.Element | null => {
        if (node == null) {
          console.error("[RichText/index.tsx] Encountered null node");
          return null;
        }

        if (node.type === "text") {
          // const escapedText = escapeHTML(node.text);
          const escapedText = node.text; // Temporary solution until escapeHTML is imported
          let text = (
            <span key={i} dangerouslySetInnerHTML={{ __html: escapedText }} />
          );
          if (node.format & IS_BOLD) {
            text = <strong key={i}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={i}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={i} style={{ textDecoration: "line-through" }}>
                {escapedText}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            // text = <Highlight key={i} {...node} text={escapedText} />;
            text = <u key={i}>{escapedText}</u>; // Temporary solution until Highlight is imported
          }
          if (node.format & IS_CODE) {
            text = <code key={i}>{escapedText}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={i}>{escapedText}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={i}>{escapedText}</sup>;
          }

          // if (textInSplitAnimate) {
          //   text = <SplitAnimate key={i} text={escapedText} />;
          // }

          return text;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            console.warn("[RichText/index.tsx] Node has no children");
            return null;
          } else {
            if (node?.type === "list" && node?.listType === "check") {
              for (const item of node.children) {
                if ("checked" in item) {
                  if (!item?.checked) {
                    item.checked = false;
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] });
          }
        };

        const serializedChildren =
          "children" in node ? serializedChildrenFn(node) : "";

        if (node.type === "block") {
          const block = node.fields;

          const blockType = block?.blockType;

          if (!block || !blockType) {
            console.error("[RichText/index.tsx] Invalid block or blockType");
            return null;
          }

          switch (blockType) {
            case "br":
              return <br key={i} />;
            case "video":
              const { url } = block;

              if (url && (url.includes("vimeo") || url.includes("youtube"))) {
                const source = url.includes("vimeo") ? "vimeo" : "youtube";
                const id =
                  source === "vimeo"
                    ? url.split("/").pop()
                    : url.split("v=").pop();

                return <Video key={i} platform={source} id={id as string} />;
              }

              console.warn("[RichText/index.tsx] Invalid video URL");
              return null;
            // case "spotlight":
            //   const { element, richText } = block;

            //   const as: AllowedElements = (element as AllowedElements) ?? "h2";

            //   const Children = serializeLexical({
            //     nodes: richText?.root?.children as NodeTypes[],
            //   });

            //   return (
            //     <SpotlightAnimation
            //       key={i}
            //       as={as}
            //       richTextChildren={node.children}
            //     >
            //       {Children}
            //     </SpotlightAnimation>
            //   );
            default:
              console.warn(
                `[RichText/index.tsx] Unknown block type: ${blockType}`,
              );
              return null;
          }
        } else {
          switch (node.type) {
            case "linebreak": {
              return <br className="col-start-2" key={i} />;
            }
            case "paragraph": {
              return (
                <p className="col-start-2" key={i}>
                  {serializedChildren}
                </p>
              );
            }
            case "heading": {
              const Tag = node?.tag;
              return (
                <Tag className="col-start-2" key={i}>
                  {serializedChildren}
                </Tag>
              );
            }
            case "list": {
              const Tag = node?.tag;
              return (
                <Tag className="list col-start-2" key={i}>
                  {serializedChildren}
                </Tag>
              );
            }
            case "listitem": {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? "true" : "false"}
                    className={` ${node.checked ? "" : ""}`}
                    key={i}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    {serializedChildren}
                  </li>
                );
              } else {
                return (
                  <li key={i} value={node?.value}>
                    {serializedChildren}
                  </li>
                );
              }
            }
            case "quote": {
              return <blockquote key={i}>{serializedChildren}</blockquote>;
            }
            case "link": {
              const fields = node.fields;

              return (
                <CMSLink
                  key={i}
                  newTab={Boolean(fields?.newTab)}
                  reference={fields.doc as Reference}
                  type={fields.linkType === "internal" ? "reference" : "custom"}
                  url={fields.url}
                >
                  {serializedChildren}
                </CMSLink>
              );
            }

            case "upload": {
              return <RichTextUpload key={i} node={node} />;
            }

            // case "label":
            //   return <Label key={i}>{serializedChildren}</Label>;

            // case "largeBody": {
            //   return <LargeBody key={i}>{serializedChildren}</LargeBody>;
            // }

            default:
              console.warn(
                `[RichText/index.tsx] Unknown node type: ${node.type}`,
              );
              return null;
          }
        }
      })}
    </Fragment>
  );
}

export const RichText: React.FC<RichTextProps> = ({
  className,
  content,
  colorLinks,
  enableGutter,
  enableProse,
}) => {
  if (!content) {
    console.warn("[RichText/index.tsx] No content provided");
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
        nodes: content.root.children as NodeTypes[],
      });
    }
    console.error("[RichText/index.tsx] Invalid content format");
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
