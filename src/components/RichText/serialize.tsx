import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import RichTextUpload from "@/components/RichText/Upload";
import React, { Fragment, JSX } from "react";

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";
import type { Page } from "@/payload-types";
import { MediaTest, MediaTestProps } from "@/blocks/Test/Component";

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<MediaTestProps>;

type Props = {
  nodes: NodeTypes[];
  customClasses?: Record<string, string>;
};

export function serializeLexical({ nodes, customClasses }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          console.error(
            "[src/components/RichText/serialize.tsx] Encountered null node",
          );
          return null;
        }

        if (node.type === "text") {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>;
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: "line-through" }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: "underline" }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            console.warn(
              "[src/components/RichText/serialize.tsx] Node has no children",
            );
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

          console.log(
            "[src/components/RichText/serialize.tsx] Block type:",
            blockType,
          );

          if (!block || !blockType) {
            console.error(
              "[src/components/RichText/serialize.tsx] Invalid block or blockType",
            );
            return null;
          }
          console.log(
            "[src/components/RichText/serialize.tsx] Block contents:",
            block,
          );

          switch (blockType) {
            case "media-test":
              return <MediaTest key={index} text={block.text} />;
            default:
              console.warn(
                `[src/components/RichText/serialize.tsx] Unknown block type: ${blockType}`,
              );
              return null;
          }
        } else {
          switch (node.type) {
            case "linebreak": {
              return <br key={index} />;
            }
            case "paragraph": {
              return (
                <p key={index} className={customClasses?.paragraph}>
                  {serializedChildren}
                </p>
              );
            }
            case "heading": {
              const HeadingTag = `${node.tag}` as keyof JSX.IntrinsicElements;
              return (
                <HeadingTag
                  key={index}
                  className={customClasses?.[`${node.tag}`]}
                >
                  {serializedChildren}
                </HeadingTag>
              );
            }
            case "list": {
              const Tag = node?.tag as keyof JSX.IntrinsicElements;
              return (
                <Tag className={customClasses?.list} key={index}>
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
                    key={index}
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
                  <li
                    key={index}
                    value={node?.value}
                    className={customClasses?.listItem}
                  >
                    {serializedChildren}
                  </li>
                );
              }
            }
            case "quote": {
              return (
                <blockquote key={index} className={customClasses?.quote}>
                  {serializedChildren}
                </blockquote>
              );
            }
            case "link": {
              // CMS links are hidden for now
              return (
                <span key={index} className={customClasses?.link}>
                  {serializedChildren}
                </span>
              );
            }
            case "upload": {
              return <RichTextUpload key={index} node={node} />;
            }
            default:
              console.warn(
                `[src/components/RichText/serialize.tsx] Unknown node type: ${node.type}`,
              );
              return null;
          }
        }
      })}
    </Fragment>
  );
}
