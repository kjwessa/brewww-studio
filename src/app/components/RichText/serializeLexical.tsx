import React, { Fragment, JSX } from "react";
import {
  IS_BOLD,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_UNDERLINE,
  IS_CODE,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
} from "./lexicalNodeFormat";

type NodeTypes = any; // Define this more precisely based on your Payload types

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

        const serializedChildren =
          "children" in node
            ? serializeLexical({ nodes: node.children as NodeTypes[] })
            : null;

        switch (node.type) {
          case "paragraph":
            return <p key={index}>{serializedChildren}</p>;
          case "heading":
            const HeadingTag = `h${node.tag}` as
              | "h1"
              | "h2"
              | "h3"
              | "h4"
              | "h5"
              | "h6";
            return <HeadingTag key={index}>{serializedChildren}</HeadingTag>;
          case "list":
            const ListTag = node.listType === "number" ? "ol" : "ul";
            return <ListTag key={index}>{serializedChildren}</ListTag>;
          case "listitem":
            return <li key={index}>{serializedChildren}</li>;
          case "quote":
            return <blockquote key={index}>{serializedChildren}</blockquote>;
          case "link":
            return (
              <a
                href={node.fields?.url}
                key={index}
                target={node.fields?.newTab ? "_blank" : undefined}
              >
                {serializedChildren}
              </a>
            );
          case "linebreak":
            return <br key={index} />;
          default:
            console.warn(`Unhandled node type: ${node.type}`);
            return null;
        }
      })}
    </Fragment>
  );
}
