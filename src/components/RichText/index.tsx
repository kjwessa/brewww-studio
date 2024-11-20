import React from 'react'
import { serializeLexical } from './serialize'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import typographyPresets, {
  type TypographyPreset,
  type TextPreset,
  type StringPreset,
} from './presets'

const richTextVariants = cva('', {
  variants: {
    enableGutter: {
      true: 'container',
      false: 'max-w-none',
    },
    enableProse: {
      true: 'prose dark:prose-invert mx-auto [&>h1]:!mb-6 [&>h2]:!mb-6 [&>h3]:!mb-6 [&>h4]:!mb-4 [&>h5]:!mb-4 [&>h6]:!mb-4 [&>p]:!mb-4',
      false: '',
    },
  },
  defaultVariants: {
    enableGutter: true,
    enableProse: true,
  },
})

type RichTextProps = VariantProps<typeof richTextVariants> & {
  className?: string
  content: Record<string, any>
  customClasses?: Partial<TypographyPreset>
  preset?: keyof typeof typographyPresets
}

const RichText: React.FC<RichTextProps> = ({
  className,
  content,
  enableGutter,
  enableProse,
  customClasses = {},
  preset = 'default',
}) => {
  if (!content || Array.isArray(content) || typeof content !== 'object' || !('root' in content)) {
    return null
  }

  const mergedClasses = {
    ...typographyPresets[preset],
    ...customClasses,
  }

  return (
    <div
      className={cn(
        richTextVariants({ enableGutter, enableProse }),
        'first:mt-0 last:mb-0 [&_span]:whitespace-pre-wrap',
        className,
      )}
    >
      {serializeLexical({
        nodes: content?.root?.children,
        customClasses: mergedClasses,
      })}
    </div>
  )
}
export default RichText
