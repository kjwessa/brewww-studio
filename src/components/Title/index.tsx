import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

const headingVariants = cva(
  // Add a base class that will help with specificity
  '[&.title]:tracking-tight [&.title]:leading-none',
  {
    variants: {
      el: {
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        p: '',
      },
      size: {
        // Make size classes more specific with a parent class
        'display-large': '[&.title]:text-display-large',
        'display-medium': '[&.title]:text-display-medium',
        'display-small': '[&.title]:text-display-small',
        'headline-large': '[&.title]:text-headline-large',
        'headline-medium': '[&.title]:text-headline-medium',
        'headline-small': '[&.title]:text-headline-small',
        'title-large': '[&.title]:text-title-large',
        'title-medium': '[&.title]:text-title-medium',
        'title-small': '[&.title]:text-title-small',
      },
      weight: {
        regular: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      weight: 'regular',
      size: 'headline-large',
      el: 'h2',
    },
    compoundVariants: [
      {
        size: ['display-large', 'display-medium', 'display-small'],
        weight: 'regular',
        className: 'font-normal tracking-tighter',
      },
    ],
  },
)

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof headingVariants>, 'el'> {
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ el = 'h2', size = 'headline-large', weight, children, className, ...props }, ref) => {
    const Component = el

    return (
      <Component
        ref={ref}
        // Add 'title' class to increase specificity
        className={cn(
          'title',
          headingVariants({
            el,
            size,
            weight,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Title.displayName = 'Title'
