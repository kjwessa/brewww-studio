/**
 * Section Component
 *
 * A foundational layout component that provides theme and background management.
 * Designed to work with the Container component for proper spacing and width control.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Section>
 *   <Container>
 *     <h2>Default Section</h2>
 *   </Container>
 * </Section>
 *
 * // Themed section
 * <Section theme="dark" background="primary">
 *   <Container>
 *     <h2>Dark Primary Section</h2>
 *   </Container>
 * </Section>
 *
 * // With motion
 * const MotionSection = motion(Section)
 *
 * <MotionSection
 *   theme="dark"
 *   initial={{ opacity: 0 }}
 *   animate={{ opacity: 1 }}
 * >
 *   <Container>
 *     <h2>Animated Section</h2>
 *   </Container>
 * </MotionSection>
 * ```
 */

import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Background types for semantic color application
 * @default 'default'
 */
type BackgroundType = 'default' | 'primary' | 'secondary' | 'accent'

/**
 * Theme types for controlling light/dark mode
 * @default 'inherit'
 */
type ThemeType = 'light' | 'dark' | 'inherit' | 'invert'

const sectionVariants = cva('relative w-full transition-colors duration-200', {
  variants: {
    theme: {
      light: '[data-theme="light"]',
      dark: '[data-theme="dark"]',
      inherit: '',
      invert: '[data-theme-invert]',
    },
    background: {
      default: 'bg-background text-foreground',
      primary: 'bg-card text-card-foreground',
      secondary: 'bg-muted text-muted-foreground',
      accent: 'bg-accent text-accent-foreground',
    },
  },
  defaultVariants: {
    theme: 'inherit',
    background: 'default',
  },
})

type SectionVariantProps = VariantProps<typeof sectionVariants>

/**
 * Base props for the Section component
 */
type SectionBaseProps = {
  /** Optional element type to render as. Defaults to 'section' */
  as?: ElementType
  /** Content to be rendered within the section */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type SectionProps = SectionBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof SectionBaseProps> &
  SectionVariantProps

/**
 * Section component for theme and background management.
 *
 * @component
 * @param {SectionProps} props - The component props
 * @param {ElementType} [props.as='section'] - Element type to render as
 * @param {ThemeType} [props.theme='inherit'] - Theme mode
 * @param {BackgroundType} [props.background='default'] - Background color scheme
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional CSS classes
 *
 * @returns {React.ForwardRefExoticComponent} A themed section component
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      children,
      theme = 'inherit',
      background = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        data-theme={theme === 'light' || theme === 'dark' ? theme : undefined}
        data-theme-invert={theme === 'invert' || undefined}
        className={cn(sectionVariants({ theme, background }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Section.displayName = 'Section'
