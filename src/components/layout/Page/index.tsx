/**
 * Page Component
 *
 * A top-level component that establishes theme context and basic page structure.
 * Designed to work with Next.js layouts and nested Section components.
 *
 * Theme inheritance flow:
 * - Page sets the base theme (light/dark)
 * - Child Sections can:
 *   - Inherit the theme
 *   - Explicitly set light/dark
 *   - Invert the current theme
 *
 * @example
 * ```tsx
 * // Basic usage with default (light) theme
 * <Page>
 *   <Section>
 *     <h1>My Page Content</h1>
 *   </Section>
 * </Page>
 *
 * // Dark theme with nested sections
 * <Page theme="dark">
 *   <Section theme="inherit">
 *     <h1>Inherits Dark Theme</h1>
 *   </Section>
 *   <Section theme="light">
 *     <h1>Explicitly Light</h1>
 *   </Section>
 *   <Section theme="invert">
 *     <h1>Inverts to Light Theme</h1>
 *   </Section>
 * </Page>
 * ```
 */

import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Theme types for page-level theme control
 * @default 'dark'
 */
type ThemeType = 'light' | 'dark'

const pageVariants = cva('min-h-screen w-full', {
  variants: {
    theme: {
      light: '[data-theme="light"]',
      dark: '[data-theme="dark"]',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
})

type PageVariantProps = VariantProps<typeof pageVariants>

/**
 * Base props for the Page component
 */
type PageBaseProps = {
  /** Optional element type to render as. Defaults to 'main' */
  as?: ElementType
  /** Content to be rendered within the page */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type PageProps = PageBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof PageBaseProps> &
  PageVariantProps

/**
 * Page component for theme management and basic page structure.
 *
 * @component
 * @param {PageProps} props - The component props
 * @param {ElementType} [props.as='main'] - Element type to render as
 * @param {ThemeType} [props.theme='light'] - Theme mode
 * @param {React.ReactNode} props.children - Page content
 * @param {string} [props.className] - Additional CSS classes
 *
 * @returns {React.ForwardRefExoticComponent} A themed page component
 */
export const Page = forwardRef<HTMLElement, PageProps>(
  ({ as: Component = 'main', children, theme = 'light', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-theme={theme}
        className={cn(pageVariants({ theme }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Page.displayName = 'Page'
