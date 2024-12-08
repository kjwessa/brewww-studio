import React, { ElementType, forwardRef } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const aspectBoxVariants = cva('relative', {
  variants: {
    ratio: {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
      wide: 'aspect-[2/1]',
      ultrawide: 'aspect-[21/9]',
      golden: 'aspect-[1.618/1]',
      auto: 'aspect-auto',
    },
    fit: {
      contain: '[&>*]:object-contain [&>*]:w-full [&>*]:h-full',
      cover: '[&>*]:object-cover [&>*]:w-full [&>*]:h-full',
      fill: '[&>*]:object-fill [&>*]:w-full [&>*]:h-full',
      none: '',
    },
    position: {
      center: '[&>*]:object-center',
      top: '[&>*]:object-top',
      bottom: '[&>*]:object-bottom',
      left: '[&>*]:object-left',
      right: '[&>*]:object-right',
      'left-top': '[&>*]:object-left-top',
      'right-top': '[&>*]:object-right-top',
      'left-bottom': '[&>*]:object-left-bottom',
      'right-bottom': '[&>*]:object-right-bottom',
    },
    loading: {
      eager: '',
      lazy: '[&>img]:loading-lazy',
    },
  },
  defaultVariants: {
    ratio: 'square',
    fit: 'cover',
    position: 'center',
    loading: 'lazy',
  },
})

type AspectBoxVariants = VariantProps<typeof aspectBoxVariants>

interface AspectBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: React.ReactNode
  ratio?: AspectBoxVariants['ratio'] | number | string
  fit?: AspectBoxVariants['fit']
  position?: AspectBoxVariants['position']
  loading?: AspectBoxVariants['loading']
}

export const AspectBox = forwardRef<HTMLDivElement, AspectBoxProps>(
  (
    { as: Component = 'div', ratio, fit, position, loading, children, className, style, ...props },
    ref,
  ) => {
    let aspectStyle = style || {}
    let variantRatio: AspectBoxVariants['ratio'] = undefined

    if (typeof ratio === 'number') {
      aspectStyle = { ...aspectStyle, aspectRatio: ratio }
    } else if (typeof ratio === 'string') {
      if (ratio.includes('/')) {
        const [width, height] = ratio.split('/')
        const numeric = parseFloat(width) / parseFloat(height)
        if (!isNaN(numeric)) {
          aspectStyle = { ...aspectStyle, aspectRatio: numeric }
        }
      } else {
        variantRatio = ratio as AspectBoxVariants['ratio']
      }
    }

    return (
      <Component
        ref={ref}
        className={cn(
          aspectBoxVariants({
            ratio: variantRatio,
            fit,
            position,
            loading,
          }),
          className,
        )}
        style={aspectStyle}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

AspectBox.displayName = 'AspectBox'
