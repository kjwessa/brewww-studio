import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const gridVariants = cva('grid w-full', {
  variants: {
    // Basic and responsive column layouts
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-4 md:grid-cols-8 lg:grid-cols-12',

      // Auto-fitting layouts
      'auto-fit': 'grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))]',
      'auto-fill': 'grid-cols-[repeat(auto-fill,minmax(min(250px,100%),1fr))]',

      // Implicit grid features
      auto: 'grid-cols-auto',
      min: 'grid-auto-cols-min',
      max: 'grid-auto-cols-max',
      fr: 'grid-auto-cols-fr',

      // Common layout patterns
      'main-sidebar': 'grid-cols-1 lg:grid-cols-[1fr_300px]',
      'sidebar-main': 'grid-cols-1 lg:grid-cols-[300px_1fr]',
      featured: 'grid-cols-1 lg:grid-cols-[2fr_1fr]',
    },
    // Grid flow control
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      dense: 'grid-flow-dense',
      'row-dense': 'grid-flow-row-dense',
      'col-dense': 'grid-flow-col-dense',
    },
    // Standard gap sizes
    gap: {
      none: 'gap-0',
      small: 'gap-4',
      medium: 'gap-6',
      large: 'gap-8',
      xlarge: 'gap-12',
    },
    // Alignment utilities
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    cols: 1,
    gap: 'medium',
    flow: 'row',
    align: 'stretch',
    justify: 'start',
  },
})

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const GridSimple = ({
  as: Component = 'div',
  cols,
  flow,
  gap,
  align,
  justify,
  children,
  className,
  ...props
}: GridProps) => {
  return (
    <Component
      className={cn(gridVariants({ cols, flow, gap, align, justify }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}
