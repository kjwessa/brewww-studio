import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const flowVariants = cva(
  // Base styles - targets all direct children
  '[&>*]:max-w-prose',
  {
    variants: {
      spacing: {
        // Default spacing between elements
        small: '[&>*+*]:mt-4',
        medium: '[&>*+*]:mt-6',
        large: '[&>*+*]:mt-8',
        // Custom spacing for specific elements
        custom: `
          [&>*+*]:mt-6
          [&>h2]:mt-12
          [&>h3]:mt-8
          [&>h4]:mt-8
          [&>blockquote]:mt-8
          [&>ul]:mt-6
          [&>ol]:mt-6
          [&>pre]:mt-8
          [&>figure]:mt-8
          [&>table]:mt-8
        `,
      },
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      spacing: 'custom',
      textAlign: 'left',
    },
  },
)

interface FlowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flowVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const Flow = ({
  as: Component = 'div',
  spacing,
  textAlign,
  children,
  className,
  ...props
}: FlowProps) => {
  return (
    <Component className={cn(flowVariants({ spacing, textAlign }), className)} {...props}>
      {children}
    </Component>
  )
}
