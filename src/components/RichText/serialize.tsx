import { MediaBlock } from '@/blocks/MediaBlock/Component'
import React, { Fragment, JSX } from 'react'
// import { CMSLink } from '@/components/Link'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { cn } from '@/utilities/cn'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { typographyPresets, type TextPreset, type TypographyPreset } from './presets'

// Extend DefaultNodeTypes to include custom MediaBlock type
export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<MediaBlockProps>

export type SerializeLexicalProps = {
  nodes: any[]
  customClasses?: {
    paragraph?: string
    h1?: string
    h2?: string
    h3?: string
    h4?: string
    h5?: string
    h6?: string
    list?: string
    listItem?: string
    quote?: string
    link?: string
  }
}

type Props = {
  nodes: NodeTypes[]
  customClasses?: Partial<TypographyPreset>
}

/**
 * Serializes Lexical editor content into React elements
 * Takes an array of nodes from the Lexical editor and converts them into React JSX
 */
export function serializeLexical({ nodes, customClasses = {} }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          return null
        }

        // Handle text nodes with formatting
        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>
          
          // Apply text formatting by wrapping in appropriate HTML elements
          // Uses bitwise operations to check for multiple format flags
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        /**
         * Helper function to serialize child nodes
         * Includes special handling for checklist items to ensure unchecked items have checked=false
         */
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null
          } else {
            // Fix for Lexical checklist implementation
            // Ensures unchecked items explicitly have checked=false
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] })
          }
        }

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : ''

        // Handle block-type nodes (custom blocks like media)
        if (node.type === 'block') {
          const block = node.fields
          const blockType = block?.blockType

          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            case 'mediaBlock':
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
              )
            default:
              return null
          }
        } else {
          // Handle standard HTML elements and special nodes
          switch (node.type) {
            case 'linebreak': {
              return <br className="col-start-2" key={index} />
            }
            case 'paragraph': {
              return (
                <p 
                  className={cn("col-start-2", customClasses?.paragraph)} 
                  key={index}
                >
                  {serializedChildren}
                </p>
              )
            }
            case 'heading': {
              const Tag = node?.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
              return (
                <Tag
                  className={cn("col-start-2", customClasses?.[Tag])}
                  key={index}
                >
                  {serializedChildren}
                </Tag>
              )
            }
            case 'list': {
              const Tag = node?.tag
              return (
                <Tag className={cn("list col-start-2", customClasses.list)} key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={cn(customClasses.listItem, node.checked ? '' : '')}
                    key={index}
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    {serializedChildren}
                  </li>
                )
              }
              return (
                <li className={cn(customClasses.listItem)} key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              )
            }
            case 'quote': {
              return (
                <blockquote className={cn("col-start-2", customClasses.quote)} key={index}>
                  {serializedChildren}
                </blockquote>
              )
            }
            // case 'link': {
            //   const fields = node.fields
            //   return (
            //     <CMSLink
            //       key={index}
            //       className={customClasses.link}
            //       newTab={Boolean(fields?.newTab)}
            //       reference={fields.doc as any}
            //       type={fields.linkType === 'internal' ? 'reference' : 'custom'}
            //       url={fields.url}
            //     >
            //       {serializedChildren}
            //     </CMSLink>
            //   )
            // }

            default:
              return null
          }
        }
      })}
    </Fragment>
  )
}
