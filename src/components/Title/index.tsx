import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

// Type scale following Material Design. Update settings in the Tailwind config.
const headingVariants = cva(
  // Base styles - removed font-default as it's not defined
  'tracking-tight leading-none',
  {
    variants: {
      level: {
        h1: '', // Using font-sans instead of font-default
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        p: '',
      },
      size: {
        // Display sizes
        'display-large': 'text-display-large',
        'display-medium': 'text-display-medium',
        'display-small': 'text-display-small',

        // Headline sizes
        'headline-large': 'text-headline-large',
        'headline-medium': 'text-headline-medium',
        'headline-small': 'text-headline-small',

        // Title sizes
        'title-large': 'text-title-large',
        'title-medium': 'text-title-medium',
        'title-small': 'text-title-small',
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
      level: 'h2',
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

interface TitleProps extends VariantProps<typeof headingVariants> {
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
  className?: string
}

export const Title: React.FC<TitleProps> = ({
  el = 'h2',
  size = 'headline-large',
  weight,
  children,
  className,
}) => {
  const Component = el

  return (
    <Component
      className={cn(
        headingVariants({
          level: el,
          size,
          weight,
        }),
        className,
      )}
    >
      {children}
    </Component>
  )
}
