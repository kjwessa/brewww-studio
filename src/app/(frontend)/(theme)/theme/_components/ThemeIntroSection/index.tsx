'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Title } from '@/components/Title'
import { SpecialButton } from '../SpecialButton'

export function ThemeIntroSection() {
  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large">
        <div className="text-center space-y-6">
          <Title size="display-medium" className="text-[var(--color-foreground)]">
            Brewww Theme
          </Title>
          <p className="text-[var(--text-lg)] text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Generate a custom theme for your Brewww project. Adjust spacing, colors, typography, and more to create a cohesive design system that matches your brand.
          </p>
          <div className="pt-4">
            <SpecialButton />
          </div>
        </div>
      </Container>
    </Section>
  )
}
