import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'
import { cva, type VariantProps } from 'class-variance-authority'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import typographyPresets from './presets'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<MediaBlockProps>

const richTextVariants = cva('', {
  variants: {
    enableGutter: {
      true: 'container',
      false: 'max-w-none',
    },
    preset: {
      default: '',
      blogPost: '',
      compact: '',
    },
  },
  defaultVariants: {
    enableGutter: true,
    preset: 'default',
  },
})

type Props = VariantProps<typeof richTextVariants> & {
  data: SerializedEditorState
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export function RichText(props: Props) {
  const { 
    className, 
    enableGutter = true, 
    preset = 'default',
    data,
    ...rest 
  } = props

  if (!data) return null

  const presetClasses = typographyPresets[preset as keyof typeof typographyPresets]

  const customConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => {
    return {
      ...defaultConverters,
      paragraph: ({ node, nodesToJSX }) => (
        <p className={presetClasses.paragraph}>
          {nodesToJSX({ nodes: node.children })}
        </p>
      ),
      heading: ({ node, nodesToJSX }) => {
        const Tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        const headingClass = presetClasses[node.tag as keyof typeof presetClasses]
        return (
          <Tag className={headingClass}>
            {nodesToJSX({ nodes: node.children })}
          </Tag>
        )
      },
      list: ({ node, nodesToJSX }) => {
        const Tag = node.tag as 'ul' | 'ol'
        return (
          <Tag className={presetClasses.list}>
            {nodesToJSX({ nodes: node.children })}
          </Tag>
        )
      },
      listitem: ({ node, nodesToJSX }) => (
        <li className={presetClasses.listItem}>
          {nodesToJSX({ nodes: node.children })}
        </li>
      ),
      quote: ({ node, nodesToJSX }) => (
        <blockquote className={presetClasses.quote}>
          {nodesToJSX({ nodes: node.children })}
        </blockquote>
      ),
      link: ({ node, nodesToJSX }) => (
        <a href={node.fields?.url} className={presetClasses.link}>
          {nodesToJSX({ nodes: node.children })}
        </a>
      ),
      blocks: {
        mediaBlock: ({ node }) => (
          <MediaBlock
            className="col-span-3 col-start-1"
            imgClassName="m-0"
            {...node.fields}
            captionClassName="mx-auto max-w-[48rem]"
            enableGutter={false}
            disableInnerContainer={true}
          />
        ),
      },
    }
  }
  
  return (
    <div className={cn(
      richTextVariants({ enableGutter, preset }),
      className
    )}>
      <RichTextWithoutBlocks
        data={data}
        converters={customConverters}
        {...rest}
      />
    </div>
  )
}
