import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'

export function ThemeIntroSection() {
  return (
    <Section theme="inherit" background="primary">
      <Container size="3xl" spacing="medium">
        <div className="flex flex-col items-center text-center">
          <Title size="display-small" className="mb-6">
            Forward Slash
          </Title>
          <Text size="body-large" className="max-w-2xl text-zinc-400">
            Explore our design system and theme configuration. This page showcases our typography,
            colors, components, and design tokens that create a consistent and beautiful user
            experience across our platform.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
