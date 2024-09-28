// Constants for text formatting
// These use bitwise flags for efficient storage and checking of multiple formats
export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;

// Type definition for a text node in the Lexical structure
export type TextNode = {
  type: "text";
  text: string;
  format: number; // Bitwise combination of formatting constants
  version: number;
};

// Type definition for an element node in the Lexical structure
export type ElementNode = {
  type:
    | "root"
    | "paragraph"
    | "heading"
    | "quote"
    | "list"
    | "listitem"
    | "link";
  children: LexicalNode[];
  direction?: "ltr" | "rtl";
  format?: number;
  indent?: number;
  version: number;
  tag?: string; // Used for heading levels (h1, h2, etc.)
  listType?: "bullet" | "number";
  url?: string; // Used for links
};

// Union type for all possible Lexical nodes
export type LexicalNode = TextNode | ElementNode;
