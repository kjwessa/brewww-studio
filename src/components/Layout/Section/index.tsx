import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionVariants = cva('relative w-full', {
  variants: {
    theme: {
      light: 'text-gray-900',
      dark: 'text-brand-dark-text',
    },
    bg: {
      default: '',
      primary: '',
      secondary: '',
    },
    transparent: {
      true: 'bg-transparent',
      false: '',
    },
  },
  compoundVariants: [
    // Light theme backgrounds
    {
      theme: 'light',
      transparent: false,
      bg: 'default',
      className: 'bg-white',
    },
    {
      theme: 'light',
      bg: 'primary',
      className: 'bg-gray-50',
    },
    {
      theme: 'light',
      bg: 'secondary',
      className: 'bg-gray-100',
    },
    // Dark theme backgrounds
    {
      theme: 'dark',
      transparent: false,
      bg: 'default',
      className: 'bg-brand-dark-bg',
    },
    {
      theme: 'dark',
      bg: 'primary',
      className: 'bg-brand-dark-surface',
    },
    {
      theme: 'dark',
      bg: 'secondary',
      className: 'bg-zinc-900',
    },
  ],
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
    <Component className={cn(sectionVariants({ theme, bg, transparent }), className)} {...props}>
      {children}
    </Component>
  )
}
