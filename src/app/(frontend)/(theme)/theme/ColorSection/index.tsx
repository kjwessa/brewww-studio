import { Section } from '@/components/layout/Section'
import { useEffect, useState } from 'react'

interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
}

const Switch = ({ checked, onCheckedChange, label }: SwitchProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      {label && <span className="mr-2 text-sm">{label}</span>}
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors duration-200 ease-in-out ${
          checked ? 'bg-primary' : 'bg-muted'
        }`}
      >
        <span
          className={`block h-5 w-5 translate-y-0.5 rounded-full bg-background transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </label>
  )
}

interface ColorCardProps {
  name: string
  colorVar: string
}

interface ColorFormats {
  hex: string
  hsl: string
  oklch: string
}

const ColorCard = ({ name, colorVar }: ColorCardProps) => {
  const [colorFormats, setColorFormats] = useState<ColorFormats>({
    hex: '',
    hsl: '',
    oklch: '',
  })

  useEffect(() => {
    const getColorFormats = () => {
      // Create a temporary element to compute the color
      const tempDiv = document.createElement('div')
      tempDiv.style.color = `var(${colorVar})`
      document.body.appendChild(tempDiv)
      const computedColor = window.getComputedStyle(tempDiv).color
      document.body.removeChild(tempDiv)

      // Parse RGB values
      const rgbMatch = computedColor.match(/\d+/g)
      if (rgbMatch) {
        const [r, g, b] = rgbMatch.map(Number)

        // Convert to HEX
        const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase()

        // Convert to HSL
        const r1 = r / 255
        const g1 = g / 255
        const b1 = b / 255
        const max = Math.max(r1, g1, b1)
        const min = Math.min(r1, g1, b1)
        let h = 0, s = 0, l = (max + min) / 2

        if (max !== min) {
          const d = max - min
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
          switch (max) {
            case r1:
              h = (g1 - b1) / d + (g1 < b1 ? 6 : 0)
              break
            case g1:
              h = (b1 - r1) / d + 2
              break
            case b1:
              h = (r1 - g1) / d + 4
              break
          }
          h /= 6
        }

        const hsl = `hsl(${Math.round(h * 360)}° ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`

        // Get OKLCH from CSS variable directly
        const oklchValue = getComputedStyle(document.documentElement)
          .getPropertyValue(colorVar.replace('--', ''))
          .trim()

        setColorFormats({
          hex,
          hsl,
          oklch: oklchValue,
        })
      }
    }

    getColorFormats()
  }, [colorVar])

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="h-52 w-52 rounded-lg border shadow-sm"
        style={{ backgroundColor: `var(${colorVar})` }}
      />
      <div className="space-y-1 text-center">
        <span className="text-body-medium font-medium">{name}</span>
        <div className="space-y-0.5 font-mono text-xs text-muted-foreground">
          <span className="block">{colorFormats.hex}</span>
          <span className="block">{colorFormats.hsl}</span>
          <span className="block">{colorFormats.oklch}</span>
        </div>
      </div>
    </div>
  )
}

interface ColorSectionProps {
  defaultTheme: 'light' | 'dark'
}

export const ColorSection = ({ defaultTheme }: ColorSectionProps) => {
  const [overrideTheme, setOverrideTheme] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(defaultTheme)

  // Update current theme when default theme changes, unless overridden
  useEffect(() => {
    if (!overrideTheme) {
      setCurrentTheme(defaultTheme)
    }
  }, [defaultTheme, overrideTheme])

  const colors = currentTheme === 'light' ? [
    { name: 'Background', var: '--color-background-light' },
    { name: 'Foreground', var: '--color-foreground-light' },
    { name: 'Card', var: '--color-card-light' },
    { name: 'Card Foreground', var: '--color-card-foreground-light' },
    { name: 'Popover', var: '--color-popover-light' },
    { name: 'Popover Foreground', var: '--color-popover-foreground-light' },
    { name: 'Primary', var: '--color-primary-light' },
    { name: 'Primary Foreground', var: '--color-primary-foreground-light' },
    { name: 'Secondary', var: '--color-secondary-light' },
    { name: 'Secondary Foreground', var: '--color-secondary-foreground-light' },
    { name: 'Muted', var: '--color-muted-light' },
    { name: 'Muted Foreground', var: '--color-muted-foreground-light' },
    { name: 'Accent', var: '--color-accent-light' },
    { name: 'Accent Foreground', var: '--color-accent-foreground-light' },
    { name: 'Destructive', var: '--color-destructive-light' },
    { name: 'Destructive Foreground', var: '--color-destructive-foreground-light' },
    { name: 'Border', var: '--color-border-light' },
    { name: 'Input', var: '--color-input-light' },
    { name: 'Ring', var: '--color-ring-light' },
  ] : [
    { name: 'Background', var: '--color-background-dark' },
    { name: 'Foreground', var: '--color-foreground-dark' },
    { name: 'Card', var: '--color-card-dark' },
    { name: 'Card Foreground', var: '--color-card-foreground-dark' },
    { name: 'Popover', var: '--color-popover-dark' },
    { name: 'Popover Foreground', var: '--color-popover-foreground-dark' },
    { name: 'Primary', var: '--color-primary-dark' },
    { name: 'Primary Foreground', var: '--color-primary-foreground-dark' },
    { name: 'Secondary', var: '--color-secondary-dark' },
    { name: 'Secondary Foreground', var: '--color-secondary-foreground-dark' },
    { name: 'Muted', var: '--color-muted-dark' },
    { name: 'Muted Foreground', var: '--color-muted-foreground-dark' },
    { name: 'Accent', var: '--color-accent-dark' },
    { name: 'Accent Foreground', var: '--color-accent-foreground-dark' },
    { name: 'Destructive', var: '--color-destructive-dark' },
    { name: 'Destructive Foreground', var: '--color-destructive-foreground-dark' },
    { name: 'Border', var: '--color-border-dark' },
    { name: 'Input', var: '--color-input-dark' },
    { name: 'Ring', var: '--color-ring-dark' },
  ]

  const handleThemeToggle = () => {
    if (!overrideTheme) {
      setOverrideTheme(true)
    }
    setCurrentTheme(current => current === 'light' ? 'dark' : 'light')
  }

  const handleOverrideToggle = (checked: boolean) => {
    setOverrideTheme(checked)
    if (!checked) {
      setCurrentTheme(defaultTheme)
    }
  }

  return (
    <Section theme={currentTheme}>
      <div className="container">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-headline-small">Color System</h2>
          <div className="flex items-center gap-8">
            <Switch
              checked={overrideTheme}
              onCheckedChange={handleOverrideToggle}
              label="Override Navigation Theme"
            />
            {overrideTheme && (
              <Switch
                checked={currentTheme === 'dark'}
                onCheckedChange={handleThemeToggle}
                label="Dark Mode"
              />
            )}
          </div>
        </div>
        <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
          {colors.map((color) => (
            <ColorCard key={color.var} name={color.name} colorVar={color.var} />
          ))}
        </div>
      </div>
    </Section>
  )
}
