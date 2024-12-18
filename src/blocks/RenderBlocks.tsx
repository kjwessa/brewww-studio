import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { LandingAboutBlock } from '@/blocks/LandingAbout/Component'
import { LandingWorkBlock } from '@/blocks/LandingWork/Component'
import { LandingFooterBlock } from '@/blocks/LandingFooter/Component'
import { LandingServiceBlock } from '@/blocks/LandingService/Component'
import { LandingImageBlock } from '@/blocks/LandingImage/Component'
import { FormBlock } from '@/blocks/Form/Component'

/**
 * Block Components Registry
 *
 * IMPORTANT: The keys in this object MUST match the 'slug' property defined in each block's config file.
 * For example, if a block config has:
 *   export const MyBlock: Block = {
 *     slug: 'myBlock',
 *     ...
 *   }
 * Then the key in this object must be 'myBlock', NOT 'myBlockBlock' or anything else.
 *
 * This is because Payload CMS uses the slug to identify block types in the data it sends.
 * If the keys don't match the slugs exactly, the blocks won't render.
 */
const blockComponents = {
  mediaBlock: MediaBlock, // matches slug: 'mediaBlock' in MediaBlock/config.ts
  bannerBlock: BannerBlock, // matches slug: 'banner' in Banner/config.ts
  ctaBlock: CallToActionBlock, // matches slug: 'cta' in CallToAction/config.ts
  landingAbout: LandingAboutBlock, // matches slug: 'landingAbout' in LandingAbout/config.ts
  landingWork: LandingWorkBlock, // matches slug: 'landingWork' in LandingWork/config.ts
  landingFooter: LandingFooterBlock, // matches slug: 'landingFooter' in LandingFooter/config.ts
  landingService: LandingServiceBlock, // matches slug: 'landingService' in LandingService/config.ts
  landingImage: LandingImageBlock, // matches slug: 'landingImage' in LandingImage/config.ts
  form: FormBlock, // matches slug: 'form' in Form/config.ts
} as const

/**
 * RenderBlocks Component
 *
 * Renders an array of content blocks from Payload CMS.
 * Each block is rendered using its corresponding React component from blockComponents.
 *
 * @param props.blocks - Array of content blocks from the page layout
 * @returns React elements for each block or null if no blocks exist
 *
 * @example
 * // When adding a new block:
 * // 1. Create your block config with a slug
 * // export const MyBlock: Block = { slug: 'myBlock', ... }
 * //
 * // 2. Add your component to blockComponents using the EXACT SAME slug
 * // const blockComponents = {
 * //   myBlock: MyBlockComponent,  // Key must match slug
 * //   ...
 * // }
 */
export const RenderBlocks: React.FC<{
  blocks: NonNullable<Page['layout']>[number][]
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
                  {/* Spread block properties except blockType to the component */}
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
