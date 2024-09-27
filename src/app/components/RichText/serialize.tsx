import { BannerBlock } from "@/blocks/Banner/Component";
// import { CallToActionBlock } from "@/blocks/CallToAction/Component";
import { CodeBlock, CodeBlockProps } from "@/blocks/Code/Component";
import { MediaBlock } from "@/blocks/MediaBlock/Component";
import React, { Fragment, JSX } from "react";
// import { CMSLink } from "@/components/Link";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import type { BannerBlock as BannerBlockProps } from "@/payload-types";

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

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      // @ts-ignore // TODO: Fix this
      | Extract<Page["layout"][0], { blockType: "cta" }>
      | Extract<Page["layout"][0], { blockType: "mediaBlock" }>
      | BannerBlockProps
      // | CodeBlockProps
    >;

type Props = {
  nodes: NodeTypes[];
};

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
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
            return null;
          }

          switch (blockType) {
            case "cta":
              // return <CallToActionBlock key={index} {...block} />;
              return null;
            case "mediaBlock":
              return (
                <MediaBlock
                  className="col-span-3 col-start-1"
                  imgClassName="m-0"
                  key={index}
                  {...block}
                  captionClassName="mx-auto max-w-[48rem]"
                  enableGutter={false}
                  disableInnerContainer={true}
                />
              );
            case "banner":
              return (
                <BannerBlock
                  className="col-start-2 mb-4"
                  key={index}
                  {...block}
                />
              );
              return null;
            case "code":
              // return (
              //   <CodeBlock className="col-start-2" key={index} {...block} />
              // );
              return null;
            default:
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
              const Tag = node?.tag;
              return (
                <Tag className="col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              );
            }
            case "list": {
              const Tag = node?.tag;
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
              const fields = node.fields;

              // return (
              //   <CMSLink
              //     key={index}
              //     newTab={Boolean(fields?.newTab)}
              //     reference={fields.doc as any}
              //     type={fields.linkType === "internal" ? "reference" : "custom"}
              //     url={fields.url}
              //   >
              //     {serializedChildren}
              //   </CMSLink>
              // );
              return null;
            }

            default:
              return null;
          }
        }
      })}
    </Fragment>
  );
}

// import React, { Fragment } from "react";
// import {
//   LexicalNode,
//   TextNode,
//   ElementNode,
//   IS_BOLD,
//   IS_ITALIC,
//   IS_STRIKETHROUGH,
//   IS_UNDERLINE,
//   IS_CODE,
//   IS_SUBSCRIPT,
//   IS_SUPERSCRIPT,
// } from "./nodeFormat";

// let headingCounter = 0;

// export const serializeLexical = ({
//   nodes,
// }: {
//   nodes: LexicalNode[];
// }): React.ReactNode => {
//   return nodes.map((node, i) => {
//     if (node.type === "text") {
//       const textNode = node as TextNode;
//       let text = <Fragment key={i}>{textNode.text}</Fragment>;

//       if (textNode.format & IS_BOLD) {
//         text = <strong key={i}>{text}</strong>;
//       }
//       if (textNode.format & IS_ITALIC) {
//         text = <em key={i}>{text}</em>;
//       }
//       if (textNode.format & IS_STRIKETHROUGH) {
//         text = <s key={i}>{text}</s>;
//       }
//       if (textNode.format & IS_UNDERLINE) {
//         text = <u key={i}>{text}</u>;
//       }
//       if (textNode.format & IS_CODE) {
//         text = <code key={i}>{text}</code>;
//       }
//       if (textNode.format & IS_SUBSCRIPT) {
//         text = <sub key={i}>{text}</sub>;
//       }
//       if (textNode.format & IS_SUPERSCRIPT) {
//         text = <sup key={i}>{text}</sup>;
//       }

//       return text;
//     }

//     if (!node) {
//       return null;
//     }

//     const elementNode = node as ElementNode;

//     switch (elementNode.type) {
//       case "root":
//         return (
//           <Fragment key={i}>
//             {serializeLexical({ nodes: elementNode.children })}
//           </Fragment>
//         );
//       case "paragraph":
//         return (
//           <p key={i}>{serializeLexical({ nodes: elementNode.children })}</p>
//         );
//       case "heading":
//         const headingLevel = parseInt(elementNode.tag?.slice(1) || "1", 10);
//         const headingId = `heading-${headingCounter++}`;
//         switch (headingLevel) {
//           case 1:
//             return (
//               <h1 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h1>
//             );
//           case 2:
//             return (
//               <h2 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h2>
//             );
//           case 3:
//             return (
//               <h3 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h3>
//             );
//           case 4:
//             return (
//               <h4 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h4>
//             );
//           case 5:
//             return (
//               <h5 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h5>
//             );
//           case 6:
//             return (
//               <h6 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h6>
//             );
//           default:
//             return (
//               <h1 key={i} id={headingId}>
//                 {serializeLexical({ nodes: elementNode.children })}
//               </h1>
//             );
//         }
//       case "quote":
//         return (
//           <blockquote key={i}>
//             {serializeLexical({ nodes: elementNode.children })}
//           </blockquote>
//         );
//       case "list":
//         const ListTag = elementNode.listType === "number" ? "ol" : "ul";
//         return (
//           <ListTag key={i}>
//             {serializeLexical({ nodes: elementNode.children })}
//           </ListTag>
//         );
//       case "listitem":
//         return (
//           <li key={i}>{serializeLexical({ nodes: elementNode.children })}</li>
//         );
//       case "link":
//         return (
//           <a href={elementNode.url} key={i}>
//             {serializeLexical({ nodes: elementNode.children })}
//           </a>
//         );
//       default:
//         console.warn(`Unhandled node type: ${elementNode.type}`);
//         return (
//           <p key={i}>{serializeLexical({ nodes: elementNode.children })}</p>
//         );
//     }
//   });
// };
