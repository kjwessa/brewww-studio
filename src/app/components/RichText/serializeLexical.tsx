import React, { Fragment } from "react";
import {
  LexicalNode,
  TextNode,
  ElementNode,
  IS_BOLD,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_UNDERLINE,
  IS_CODE,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
} from "./lexicalNodeFormat";

let headingCounter = 0;

export const serializeLexical = ({
  nodes,
}: {
  nodes: LexicalNode[];
}): React.ReactNode => {
  return nodes.map((node, i) => {
    if (node.type === "text") {
      const textNode = node as TextNode;
      let text = <Fragment key={i}>{textNode.text}</Fragment>;

      if (textNode.format & IS_BOLD) {
        text = <strong key={i}>{text}</strong>;
      }
      if (textNode.format & IS_ITALIC) {
        text = <em key={i}>{text}</em>;
      }
      if (textNode.format & IS_STRIKETHROUGH) {
        text = <s key={i}>{text}</s>;
      }
      if (textNode.format & IS_UNDERLINE) {
        text = <u key={i}>{text}</u>;
      }
      if (textNode.format & IS_CODE) {
        text = <code key={i}>{text}</code>;
      }
      if (textNode.format & IS_SUBSCRIPT) {
        text = <sub key={i}>{text}</sub>;
      }
      if (textNode.format & IS_SUPERSCRIPT) {
        text = <sup key={i}>{text}</sup>;
      }

      return text;
    }

    if (!node) {
      return null;
    }

    const elementNode = node as ElementNode;

    switch (elementNode.type) {
      case "root":
        return (
          <Fragment key={i}>
            {serializeLexical({ nodes: elementNode.children })}
          </Fragment>
        );
      case "paragraph":
        return (
          <p key={i}>{serializeLexical({ nodes: elementNode.children })}</p>
        );
      case "heading":
        const HeadingTag = `h${elementNode.tag}` as
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6";
        const headingId = `heading-${headingCounter++}`;
        return (
          <HeadingTag key={i} id={headingId}>
            {serializeLexical({ nodes: elementNode.children })}
          </HeadingTag>
        );
      case "quote":
        return (
          <blockquote key={i}>
            {serializeLexical({ nodes: elementNode.children })}
          </blockquote>
        );
      case "list":
        const ListTag = elementNode.listType === "number" ? "ol" : "ul";
        return (
          <ListTag key={i}>
            {serializeLexical({ nodes: elementNode.children })}
          </ListTag>
        );
      case "listitem":
        return (
          <li key={i}>{serializeLexical({ nodes: elementNode.children })}</li>
        );
      case "link":
        return (
          <a href={elementNode.url} key={i}>
            {serializeLexical({ nodes: elementNode.children })}
          </a>
        );
      default:
        console.warn(`Unhandled node type: ${elementNode.type}`);
        return (
          <p key={i}>{serializeLexical({ nodes: elementNode.children })}</p>
        );
    }
  });
};
