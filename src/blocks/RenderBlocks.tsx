// Import necessary types and components
import type { Page } from "@/payload-types";
import React, { Fragment } from "react";
import { CoverBlock } from "@/blocks/Cover/Component";
import { FormBlock } from "@/blocks/Form/Component";

// Define a mapping of block types to their corresponding components
const blockComponents = {
  cover: CoverBlock,
  formBlock: FormBlock,
};

// Define the RenderBlocks component
export const RenderBlocks: React.FC<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  // Check if there are valid blocks to render
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          // Check if the block type exists in our component mapping
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                // Render the block with some vertical margin
                <div className="my-32" key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              );
            }
          }
          // If the block type is not recognized, render nothing
          return null;
        })}
      </Fragment>
    );
  }

  // If there are no blocks, render nothing
  return null;
};
