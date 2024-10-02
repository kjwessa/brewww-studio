import { BannerBlock } from "@blocks/Banner/Component";
import { CallToActionBlock } from "@blocks/CallToAction/Component";
import { CodeBlock, CodeBlockProps } from "@blocks/Code/Component";
import RichTextUpload from "@components/RichText/Upload";
import React, { Fragment, JSX } from "react";
// import { CMSLink } from "@components/CMSLink/index";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import type { BannerBlock as BannerBlockProps } from "@types";

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";
import type { Page } from "@types";

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      | Extract<Page["layout"][0], { blockType: "cta" }>
      | Extract<Page["layout"][0], { blockType: "mediaBlock" }>
      | BannerBlockProps
      | CodeBlockProps
    >;

type Props = {
  nodes: NodeTypes[];
};

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          console.error("[RichText/serialize.tsx] Encountered null node");
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
            console.warn("[RichText/serialize.tsx] Node has no children");
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
            console.error(
              "[RichText/serialize.tsx] Invalid block or blockType",
            );
            return null;
          }

          switch (blockType) {
            case "banner":
              return (
                <BannerBlock
                  className="col-start-2 mb-4"
                  key={index}
                  {...(block as BannerBlockProps)}
                />
              );
            case "code":
              return (
                <CodeBlock
                  className="col-start-2"
                  key={index}
                  {...(block as CodeBlockProps)}
                />
              );
            default:
              console.warn(
                `[RichText/serialize.tsx] Unknown block type: ${blockType}`,
              );
              return null;
          }
        } else {
          switch (node.type) {
            case "linebreak": {
              return <br className="col-start-2" key={index} />;
            }
            case "paragraph": {
              return (
                <p className="col-start-2" key={index}>
                  {serializedChildren}
                </p>
              );
            }
            case "heading": {
              const Tag = node?.tag as keyof JSX.IntrinsicElements;
              return (
                <Tag className="col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              );
            }
            case "list": {
              const Tag = node?.tag as keyof JSX.IntrinsicElements;
              return (
                <Tag className="list col-start-2" key={index}>
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
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                );
              }
            }
            case "quote": {
              return (
                <blockquote className="col-start-2" key={index}>
                  {serializedChildren}
                </blockquote>
              );
            }
            case "link": {
              // CMS links are hidden for now
              return <span key={index}>{serializedChildren}</span>;
            }
            case "upload": {
              return <RichTextUpload key={index} node={node} />;
            }
            default:
              console.warn(
                `[RichText/serialize.tsx] Unknown node type: ${node.type}`,
              );
              return null;
          }
        }
      })}
    </Fragment>
  );
}
