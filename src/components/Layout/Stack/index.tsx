// Stack.tsx
import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const stackVariants = cva('flex flex-col', {
  variants: {
    gap: {
      none: 'gap-0',
      small: 'gap-4',
      medium: 'gap-6',
      large: 'gap-8',
      xlarge: 'gap-12',
    },
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
    },
  },
  defaultVariants: {
    gap: 'medium',
    align: 'stretch',
    justify: 'start',
  },
})

interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const Stack = ({
  as: Component = 'div',
  gap,
  align,
  justify,
  children,
  className,
  ...props
}: StackProps) => {
  return (
    <Component className={cn(stackVariants({ gap, align, justify }), className)} {...props}>
      {children}
    </Component>
  )
}
