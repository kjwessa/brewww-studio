/**
 * Mathematical Grid System
 *
 * A grid system based on precise mathematical relationships derived from the site's
 * max width. All measurements and proportions are calculated, not arbitrary.
 */

import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'

// Core calculation values that mirror our CSS system
const baseGridStyles = {
  '--site--max-width': 'min(var(--site--width, 1440px), 100vw)',
  '--container--main': 'calc(var(--site--max-width) - var(--site--margin, 2rem) * 2)',
  '--container--full': 'calc(100vw - var(--site--margin, 2rem) * 2)',
  '--site--gutter-total': 'calc(var(--site--gutter, 2rem) * (var(--site--column-count, 12) - 1))',
  '--column-width--1':
    'calc((var(--container--main) - var(--site--gutter-total)) / var(--site--column-count, 12))',
  '--column-width--plus-gutter': 'calc(var(--column-width--1) + var(--site--gutter, 2rem))',
} as const

// Types for grid configurations
interface GridConfig {
  /** Number of columns or special layout type */
  cols?: number | 'breakout' | 'content' | 'sidebar' | 'aside'
  /** Auto-grid settings */
  auto?: {
    mode: 'auto-fit' | 'auto-fill'
    minWidth?: string
    maxWidth?: string
  }
  /** Whether content should break out of container */
  breakout?: boolean
  /** Custom column template */
  template?: string
}

interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: React.ReactNode
  className?: string
  config?: GridConfig
}

/**
 * Grid Component
 *
 * @example
 * ```tsx
 * // Basic grid using mathematical columns
 * <Grid config={{ cols: 12 }}>
 *   <GridItem span={6}>Half Width</GridItem>
 * </Grid>
 *
 * // Breakout grid maintaining column relationships
 * <Grid config={{ cols: 'breakout' }}>
 *   <GridItem breakout>Full Width Content</GridItem>
 *   <GridItem contained>Main Content</GridItem>
 * </Grid>
 *
 * // Auto grid using column calculations
 * <Grid
 *   config={{
 *     auto: {
 *       mode: 'auto-fit',
 *       minWidth: 'var(--column-width--2)',
 *     }
 *   }}
 * >
 *   <GridItem>Card</GridItem>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ as: Component = 'div', children, className, config, style, ...props }, ref) => {
    // Generate grid template based on configuration
    const gridTemplate = React.useMemo(() => {
      if (!config) return {}

      const { cols, auto, breakout, template } = config

      // Handle special layouts
      if (template) {
        return { gridTemplateColumns: template }
      }

      if (breakout) {
        return {
          gridTemplateColumns: `
          [full-start] minmax(0, 1fr)
          [content-start] min(var(--container--main), 100% - var(--site--margin, 2rem) * 2)
          [content-end] minmax(0, 1fr)
          [full-end]
        `,
        }
      }

      // Handle auto grid
      if (auto) {
        return {
          gridTemplateColumns: `repeat(
          ${auto.mode},
          minmax(${auto.minWidth || 'var(--column-width--2)'}, ${auto.maxWidth || '1fr'})
        )`,
        }
      }

      // Handle standard columns
      if (typeof cols === 'number') {
        return {
          gridTemplateColumns: `repeat(${cols}, minmax(0, var(--column-width--1)))`,
        }
      }

      // Handle named layouts
      switch (cols) {
        case 'sidebar':
          return {
            gridTemplateColumns: `
            minmax(var(--column-width--2), 280px)
            1fr
          `,
          }
        case 'content':
          return {
            gridTemplateColumns: `
            minmax(var(--column-width--6), 720px)
            1fr
          `,
          }
        case 'aside':
          return {
            gridTemplateColumns: `
            1fr
            minmax(var(--column-width--3), 380px)
          `,
          }
        default:
          return {}
      }
    }, [config])

    return (
      <Component
        ref={ref}
        className={cn('grid w-full', className)}
        style={{
          ...baseGridStyles,
          ...gridTemplate,
          gap: 'var(--site--gutter, 2rem)',
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Grid.displayName = 'Grid'