import React from 'react'
import { LandingHero } from '@/heros/LandingHero/Component'
import type { Page } from '@/payload-types'

// Define hero components registry with type safety
const heroComponents = {
  landing: LandingHero,
} as const

type HeroTypes = keyof typeof heroComponents

/**
 * RenderHero Component
 *
 * Renders a hero section from a Payload page field group.
 * Each hero type is rendered using its corresponding React component.
 *
 * @param props - Hero field group data from the page
 * @returns React element for the hero or null if invalid
 */
export const RenderHero: React.FC<{
  type: HeroTypes
  heroTitle?: string | null
  locationText?: string | null
  descriptionText?: string | null
  image?: Page['hero']['image']
}> = (props) => {
  const { type, ...heroProps } = props

  // Get the component for this hero type
  const HeroComponent = heroComponents[type]

  // Type guard for hero-specific props
  switch (type) {
    case 'landing':
      if (
        heroProps.heroTitle &&
        heroProps.locationText &&
        heroProps.descriptionText &&
        heroProps.image &&
        typeof heroProps.image === 'object'
      ) {
        return (
          <HeroComponent
            heroTitle={heroProps.heroTitle}
            locationText={heroProps.locationText}
            descriptionText={heroProps.descriptionText}
            image={heroProps.image}
          />
        )
      }
      break
  }

  return null
}
