import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionVariants = cva('relative w-full', {
  variants: {
    theme: {
      light: 'text-foreground [data-theme="light"]',
      dark: 'text-foreground [data-theme="dark"]',
    },
    bg: {
      default: 'bg-background',
      primary: 'bg-card',
      secondary: 'bg-muted',
      accent: 'bg-accent',
    },
    transparent: {
      true: 'bg-transparent',
      false: '',
    },
  },
  defaultVariants: {
    theme: 'dark',
    bg: 'default',
    transparent: false,
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof sectionVariants>, 'transparent'> {
  as?: ElementType
  transparent?: boolean
  children: React.ReactNode
}

export const Section = ({
  as: Component = 'section',
  theme,
  bg,
  transparent = false,
  children,
  className,
  ...props
}: SectionProps) => {
  return (
    <Component
      data-theme={theme}
      className={cn(sectionVariants({ theme, bg, transparent }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}
