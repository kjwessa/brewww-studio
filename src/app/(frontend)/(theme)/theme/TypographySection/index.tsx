'use client'

import { Title } from '@/components/Title'
import { useEffect, useState } from 'react'

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
      document.querySelectorAll('[data-typography-item] h2').forEach((element) => {
        const parentDiv = element.closest('[data-typography-item]')
        const id = parentDiv?.getAttribute('data-typography-item')
        if (id) {
          const computedStyle = window.getComputedStyle(element)
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

  return (
    <div className="space-y-12">
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
  )
}
