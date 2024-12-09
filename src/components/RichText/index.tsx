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
  },
  defaultVariants: {
    enableGutter: true,
  },
})

type RichTextProps = VariantProps<typeof richTextVariants> & {
  className?: string
  content: Record<string, any>
  customClasses?: Partial<TypographyPreset>
  preset?: keyof typeof typographyPresets
}

export const RichText: React.FC<RichTextProps> = ({
  className,
  content,
  enableGutter,
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
    <>
      {serializeLexical({
        nodes: content?.root?.children,
        customClasses: mergedClasses,
      })}
    </>
  )
}
