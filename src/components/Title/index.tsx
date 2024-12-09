import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

const headingVariants = cva('title', {
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
      'display-large': '[&]:text-display-large',
      'display-medium': '[&]:text-display-medium',
      'display-small': '[&]:text-display-small',
      'headline-large': '[&]:text-headline-large',
      'headline-medium': '[&]:text-headline-medium',
      'headline-small': '[&]:text-headline-small',
      'title-large': '[&]:text-title-large',
      'title-medium': '[&]:text-title-medium',
      'title-small': '[&]:text-title-small',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    leading: {
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    size: 'headline-large',
    el: 'h2',
  },
})

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof headingVariants>, 'el'> {
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      el = 'h2',
      size = 'headline-large',
      weight,
      leading,
      tracking,
      font,
      italic,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = el

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            el,
            size,
            weight,
            leading,
            tracking,
            font,
            italic,
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
