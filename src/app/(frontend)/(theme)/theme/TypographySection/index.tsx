'use client'

import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { useEffect, useState } from 'react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

type TitleSize =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'

type TextSize =
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'

type StyleMeasurements = {
  fontSize: { rem: string; px: string }
  fontWeight: string
  letterSpacing: string
}

export function TypographySection() {
  const [styles, setStyles] = useState<{ [key: string]: StyleMeasurements }>({})

  useEffect(() => {
    const updateStyles = () => {
      const newStyles: { [key: string]: StyleMeasurements } = {}
      document.querySelectorAll('[data-typography-item]').forEach((element) => {
        const id = element.getAttribute('data-typography-item')
        if (id) {
          const targetElement = element.querySelector('h2, p')
          if (targetElement) {
            const computedStyle = window.getComputedStyle(targetElement)
            const fontSize = computedStyle.fontSize
            const remSize = (parseFloat(fontSize) / 16).toFixed(3)
            newStyles[id] = {
              fontSize: {
                rem: `${remSize}rem`,
                px: fontSize,
              },
              fontWeight: computedStyle.fontWeight,
              letterSpacing: computedStyle.letterSpacing,
            }
          }
        }
      })
      setStyles((styles) => ({ ...styles, ...newStyles }))
    }

    // Initial measurement after a short delay to ensure styles are applied
    const timeoutId = setTimeout(updateStyles, 100)
    window.addEventListener('resize', updateStyles)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updateStyles)
    }
  }, [])

  const typographyItems: Array<{ size: TitleSize; label: string }> = [
    { size: 'display-large', label: 'Display Large' },
    { size: 'display-medium', label: 'Display Medium' },
    { size: 'display-small', label: 'Display Small' },
    { size: 'headline-large', label: 'Headline Large' },
    { size: 'headline-medium', label: 'Headline Medium' },
    { size: 'headline-small', label: 'Headline Small' },
    { size: 'title-large', label: 'Title Large' },
    { size: 'title-medium', label: 'Title Medium' },
    { size: 'title-small', label: 'Title Small' },
  ]

  const textItems: Array<{ size: TextSize; label: string }> = [
    { size: 'body-large', label: 'Body Large' },
    { size: 'body-medium', label: 'Body Medium' },
    { size: 'body-small', label: 'Body Small' },
    { size: 'label-large', label: 'Label Large' },
    { size: 'label-medium', label: 'Label Medium' },
    { size: 'label-small', label: 'Label Small' },
  ]

  return (
    <Section theme="inherit" background="default">
      <Container size="3xl" spacing="large">
        <div className="space-y-12">
          <div className="space-y-12">
            <h3 className="text-xl font-semibold">Titles</h3>
            {typographyItems.map(({ size, label }) => (
              <div key={size} className="space-y-2">
                <div data-typography-item={size}>
                  <Title size={size} el="h2">
                    We craft brands beyond tomorrow
                  </Title>
                </div>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>{label}</div>
                  {styles[size] && (
                    <div className="space-y-1 pl-4">
                      <div>
                        <span className="text-gray-400">font-size: </span>
                        {styles[size].fontSize.rem} / {styles[size].fontSize.px}
                      </div>
                      <div>
                        <span className="text-gray-400">font-weight: </span>
                        {styles[size].fontWeight}
                      </div>
                      <div>
                        <span className="text-gray-400">letter-spacing: </span>
                        {styles[size].letterSpacing}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <h3 className="text-xl font-semibold">Text</h3>
            {textItems.map(({ size, label }) => (
              <div key={size} className="space-y-2">
                <div data-typography-item={size}>
                  <Text size={size}>
                    {size.startsWith('body')
                      ? "In a world obsessed with the next big thing, we're focused on crafting the next right thing. Our studio exists to transform bold visions into enduring brand realities."
                      : '+ About Our Studio'}
                  </Text>
                </div>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>{label}</div>
                  {styles[size] && (
                    <div className="space-y-1 pl-4">
                      <div>
                        <span className="text-gray-400">font-size: </span>
                        {styles[size].fontSize.rem} / {styles[size].fontSize.px}
                      </div>
                      <div>
                        <span className="text-gray-400">font-weight: </span>
                        {styles[size].fontWeight}
                      </div>
                      <div>
                        <span className="text-gray-400">letter-spacing: </span>
                        {styles[size].letterSpacing}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
