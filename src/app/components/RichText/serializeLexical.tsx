import React, { Fragment } from "react";
import escapeHTML from "escape-html";
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

// Main function to serialize Lexical nodes into React elements
export const serializeLexical = ({
  nodes,
}: {
  nodes: LexicalNode[];
}): React.ReactNode => {
  return nodes.map((node, i) => {
    // Handle text nodes
    if (node.type === "text") {
      const textNode = node as TextNode;
      let text = <Fragment key={i}>{escapeHTML(textNode.text)}</Fragment>;

      // Apply text formatting based on the format bitfield
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

    // Return null for undefined nodes
    if (!node) {
      return null;
    }

    const elementNode = node as ElementNode;

    // Handle different types of element nodes
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
        const Tag = `h${elementNode.tag}` as keyof JSX.IntrinsicElements;
        return (
          <Tag key={i}>{serializeLexical({ nodes: elementNode.children })}</Tag>
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
          <a href={escapeHTML(elementNode.url || "")} key={i}>
            {serializeLexical({ nodes: elementNode.children })}
          </a>
        );
      default:
        // Default to a paragraph if the element type is not recognized
        return (
          <p key={i}>{serializeLexical({ nodes: elementNode.children })}</p>
        );
    }
  });
};
