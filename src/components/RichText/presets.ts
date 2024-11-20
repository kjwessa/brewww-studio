import type { TextProps } from '@/components/Text'

export type TypographySize = 
  | 'display-large' | 'display-medium' | 'display-small'
  | 'headline-large' | 'headline-medium' | 'headline-small'
  | 'title-large' | 'title-medium' | 'title-small'
  | 'body-large' | 'body-medium' | 'body-small'
  | 'label-large' | 'label-medium' | 'label-small'

export type TextPreset = {
  size: TypographySize
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export type StringPreset = string

export type TypographyPreset = {
  paragraph: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  list: string
  listItem: string
  quote: string
  link: string
}

export const typographyPresets = {
  default: {
    paragraph: 'text-body-medium',
    h1: 'text-headline-large font-bold',
    h2: 'text-headline-medium font-bold',
    h3: 'text-headline-small font-bold',
    h4: 'text-title-large font-bold',
    h5: 'text-title-medium font-bold',
    h6: 'text-title-small font-bold',
    list: 'list-disc list-inside text-body-medium',
    listItem: 'mb-2',
    quote: 'border-l-4 pl-4 italic',
    link: 'underline hover:text-brand-gold',
  },
  blogPost: {
    paragraph: 'text-body-medium',
    h1: 'text-headline-large font-bold',
    h2: 'text-headline-medium font-bold',
    h3: 'text-headline-small font-bold',
    h4: 'text-title-large font-bold',
    h5: 'text-title-medium font-bold',
    h6: 'text-title-small font-bold',
    list: 'list-disc list-inside text-body-medium',
    listItem: 'mb-2',
    quote: 'border-l-4 pl-4 italic',
    link: 'underline hover:text-brand-gold',
  },
  compact: {
    paragraph: 'text-body-small',
    h1: 'text-title-large font-bold',
    h2: 'text-title-medium font-bold',
    h3: 'text-title-small font-bold',
    h4: 'text-body-large font-bold',
    h5: 'text-body-medium font-bold',
    h6: 'text-body-small font-bold',
    list: 'list-disc list-inside text-body-small',
    listItem: 'mb-1',
    quote: 'border-l-2 pl-3 italic',
    link: 'underline hover:text-brand-gold',
  },
} as const

export default typographyPresets 