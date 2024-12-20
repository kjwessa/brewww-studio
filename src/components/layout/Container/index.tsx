import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const containerVariants = cva('mx-auto w-full px-4 md:px-6 lg:px-8', {
  variants: {
    size: {
      small: 'max-w-[var(--breakpoint-sm)]',
      medium: 'max-w-[var(--breakpoint-md)]',
      large: 'max-w-[var(--breakpoint-lg)]',
      xl: 'max-w-[var(--breakpoint-xl)]',
      '2xl': 'max-w-[var(--breakpoint-2xl)]',
      '3xl': 'max-w-[var(--breakpoint-3xl)]',
      full: 'max-w-full',
    },
    spacing: {
      none: 'py-0',
      small: 'py-4 md:py-6',
      medium: 'py-8 md:py-12',
      large: 'py-12 md:py-16',
      xlarge: 'py-16 md:py-24',
      '2xl': 'py-24 md:py-32',
      '3xl': 'py-32 md:py-40',
    },
    spacingTop: {
      none: 'pt-0',
      small: 'pt-4 md:pt-6',
      medium: 'pt-8 md:pt-12',
      large: 'pt-12 md:pt-16',
      xlarge: 'pt-16 md:pt-24',
      '2xl': 'pt-24 md:pt-32',
      '3xl': 'pt-32 md:pt-40',
    },
    spacingBottom: {
      none: 'pb-0',
      small: 'pb-4 md:pb-6',
      medium: 'pb-8 md:pb-12',
      large: 'pb-12 md:pb-16',
      xlarge: 'pb-16 md:pb-24',
      '2xl': 'pb-24 md:pb-32',
      '3xl': 'pb-32 md:pb-40',
    },
  },
  defaultVariants: {
    size: '3xl',
    spacing: 'large',
  },
})

interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof containerVariants>, 'spacing'> {
  as?: ElementType
  spacing?: VariantProps<typeof containerVariants>['spacing']
  children: React.ReactNode
}

export const Container = ({
  as: Component = 'div',
  size,
  spacing,
  spacingTop,
  spacingBottom,
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        containerVariants({
          size,
          spacing,
          // Only apply individual spacing if provided
          spacingTop: spacingTop,
          spacingBottom: spacingBottom,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
