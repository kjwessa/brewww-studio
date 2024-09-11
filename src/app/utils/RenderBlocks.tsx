import type { Page } from "@/payload-types";
import React, { Fragment } from "react";
import { CoverBlock } from "../blocks/Cover/Component";

// Object mapping block types to their corresponding components
const blockComponents = {
  cover: CoverBlock,
};

// RenderBlocks component to render an array of layout blocks
export const RenderBlocks: React.FC<{ blocks: Page["layout"][0][] }> = (
  props,
) => {
  const { blocks } = props;

  // Check if blocks exist and are in the correct format
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;
          // Check if the block type exists in our components mapping
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              // Render the block component with its props
              return (
                <div className="my-16" key={index}>
                  <Block id={blockName} {...block} />
                </div>
              );
            }
          }
          // Return null for unknown block types
          return null;
        })}
      </Fragment>
    );
  }
  // If no blocks, component doesn't render anything
};
