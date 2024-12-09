import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const masonryVariants = cva('w-full', {
  variants: {
    cols: {
      2: 'columns-1 md:columns-2',
      3: 'columns-1 md:columns-2 lg:columns-3',
      4: 'columns-1 md:columns-2 lg:columns-4',
      5: 'columns-1 md:columns-2 lg:columns-3 xl:columns-5',
      // Auto sizing based on minimum width
      auto: '[column-width:300px]',
    },
    gap: {
      none: 'gap-0',
      small: 'gap-4',
      medium: 'gap-6',
      large: 'gap-8',
      xlarge: 'gap-12',
    },
  },
  defaultVariants: {
    cols: 3,
    gap: 'medium',
  },
})

interface MasonryProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof masonryVariants> {
  as?: ElementType
  children: React.ReactNode
  supports?: 'modern' | 'columns'
}

export const Masonry = ({
  as: Component = 'div',
  cols,
  gap,
  supports = 'columns',
  children,
  className,
  ...props
}: MasonryProps) => {
  // Modern browsers that support grid-template-rows: masonry
  if (supports === 'modern') {
    return (
      <div
        className={cn(
          'grid',
          {
            'grid-cols-1 md:grid-cols-2': cols === 2,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': cols === 3,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': cols === 4,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5': cols === 5,
          },
          className,
        )}
        style={{ gridTemplateRows: 'masonry' }}
        {...props}
      >
        {children}
      </div>
    )
  }

  // Fallback using CSS columns
  return (
    <Component className={cn(masonryVariants({ cols, gap }), className)} {...props}>
      {children}
    </Component>
  )
}

// MasonryItem component to handle individual items
const masonryItemVariants = cva('break-inside-avoid mb-[var(--gap)]', {
  variants: {
    padding: {
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    },
  },
  defaultVariants: {
    padding: 'none',
  },
})

interface MasonryItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof masonryItemVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const MasonryItem = ({
  as: Component = 'div',
  padding,
  children,
  className,
  ...props
}: MasonryItemProps) => {
  return (
    <Component className={cn(masonryItemVariants({ padding }), className)} {...props}>
      {children}
    </Component>
  )
}
