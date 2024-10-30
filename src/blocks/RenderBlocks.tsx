import React, { Fragment } from "react";
import type { Page } from "@/payload-types";

//* Import Block Components
import { FormBlock } from "@/blocks/Form/Component";

// Define a mapping of block types to their corresponding components
const blockComponents = {
  formBlock: FormBlock,
};

// Define the RenderBlocks component
export const RenderBlocks: React.FC<{
  blocks: Page["layout"][];
}> = (props) => {
  const { blocks } = props;

  // Check if there are valid blocks to render
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return <>Hello</>;
  }

  // If there are no blocks, render nothing
  return null;
};
