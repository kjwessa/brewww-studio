import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page, MediaBlock as MediaBlockType } from '@/payload-types'

import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents = {
  mediaBlock: MediaBlock,
} as const

// Define the block type using the non-null array element type
type PageLayoutBlock = NonNullable<Page['layout']>[number]

/**
 * RenderBlocks Component
 * 
 * Renders an array of content blocks from Payload CMS.
 * Each block is rendered using its corresponding React component from blockComponents.
 * 
 * @param props.blocks - Array of content blocks from the page layout
 * @returns React elements for each block or null if no blocks exist
 */
export const RenderBlocks: React.FC<{
  blocks: PageLayoutBlock[]
}> = (props) => {
  const { blocks } = props

  // Validate that blocks exist and contain content
  // This triple check ensures we have valid data before attempting to render
  // - blocks exists (not null/undefined)
  // - blocks is an array
  // - blocks has at least one item
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          // Extract the blockType from the current block
          // blockType is defined in the Payload config and matches keys in blockComponents
          const { blockType } = block

          // Type guard: ensure blockType exists and has a matching component
          // This prevents runtime errors from unknown block types
          if (blockType && blockType in blockComponents) {
            // Get the React component for this block type
            const Block = blockComponents[blockType]

            // Additional check to ensure Block component exists
            // TypeScript knows Block must exist here, but we check anyway
            if (Block) {
              return (
                // Wrap each block in a div with consistent vertical spacing
                // Use index as key since blocks don't have guaranteed unique IDs
                <div className="my-16" key={index}>
                  {/* Spread all block properties to the component */}
                  <Block {...block} />
                </div>
              )
            }
          }
          // Return null for any blocks that don't have matching components
          // This prevents the page from breaking if a block type is removed
          return null
        })}
      </Fragment>
    )
  }

  // Return null if there are no blocks to render
  // This allows the page to render without blocks
  return null
}
