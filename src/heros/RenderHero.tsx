import React from 'react'
import { LandingHero, type LandingHeroProps } from '@/heros/LandingHero/Component'
import type { Page } from '@/payload-types'

type BaseHeroProps = {
  type: string
}

type HeroProps = BaseHeroProps & {
  type: 'landing'
  heroTitle?: string | null
  locationText?: string | null
  descriptionText?: string | null
  image?: Page['hero']['image']
}

const heroes = {
  landing: LandingHero,
} as const

export const RenderHero: React.FC<HeroProps> = (props) => {
  const { type } = props
  if (!type) return null

  const HeroComponent = heroes[type]
  if (!HeroComponent) return null

  // Only render if all required props are present and image is an object
  if (
    type === 'landing' && 
    props.heroTitle && 
    props.locationText && 
    props.descriptionText && 
    props.image && 
    typeof props.image === 'object'
  ) {
    return <HeroComponent 
      heroTitle={props.heroTitle}
      locationText={props.locationText}
      descriptionText={props.descriptionText}
      image={props.image}
    />
  }

  return null
}
