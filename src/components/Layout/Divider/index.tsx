import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const dividerVariants = cva('flex w-full items-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col h-full',
    },
    variant: {
      solid: '',
      dashed: '[&>hr]:border-dashed',
      dotted: '[&>hr]:border-dotted',
    },
    spacing: {
      none: 'gap-0',
      small: 'gap-4',
      medium: 'gap-6',
      large: 'gap-8',
    },
    thickness: {
      thin: '[&>hr]:border-t',
      medium: '[&>hr]:border-t-2',
      thick: '[&>hr]:border-t-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    spacing: 'medium',
    thickness: 'thin',
  },
})

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  as?: ElementType
  children?: React.ReactNode
}

export const Divider = ({
  as: Component = 'div',
  orientation,
  variant,
  spacing,
  thickness,
  children,
  className,
  ...props
}: DividerProps) => {
  return (
    <Component
      role="separator"
      aria-orientation={orientation}
      className={cn(dividerVariants({ orientation, variant, spacing, thickness }), className)}
      {...props}
    >
      {children ? (
        <>
          <hr className="flex-1 border-current opacity-20" />
          <span className="text-muted-foreground text-sm whitespace-nowrap">{children}</span>
          <hr className="flex-1 border-current opacity-20" />
        </>
      ) : (
        <hr className="w-full border-current opacity-20" />
      )}
    </Component>
  )
}
