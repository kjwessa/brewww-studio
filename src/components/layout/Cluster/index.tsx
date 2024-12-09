import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

// Cluster.tsx
const clusterVariants = cva('flex flex-wrap', {
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
    gap: {
      none: 'gap-0',
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
      xlarge: 'gap-8',
    },
  },
  defaultVariants: {
    align: 'center',
    justify: 'start',
    gap: 'medium',
  },
})

interface ClusterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof clusterVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const Cluster = ({
  as: Component = 'div',
  align,
  justify,
  gap,
  children,
  className,
  ...props
}: ClusterProps) => {
  return (
    <Component className={cn(clusterVariants({ align, justify, gap }), className)} {...props}>
      {children}
    </Component>
  )
}
