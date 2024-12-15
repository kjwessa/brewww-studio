'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { useThemeGenerate } from '../../_context/ThemeGenerateContext'

export function GenerateInputsHero() {
  const { settings, setSettings } = useThemeGenerate()

  return (
    <Section theme="inherit" background="default">
      <Container size="large">
        <h1 className="text-4xl font-bold">Fluid Builder</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Webflow Site Width */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <label htmlFor="maxWidth" className="block">
                Site Width
                <span className="block text-sm text-gray-500">
                  stop scaling up at this screen size
                </span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="siteWidth"
                  type="number"
                  className="w-full rounded border px-3 py-2"
                  value={settings.maxWidth}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      maxWidth: Number(e.target.value),
                    })
                  }
                />
                <span className="text-gray-500">REM</span>
              </div>
            </div>
          </div>

          {/* Figma Design Width */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <label htmlFor="figmaWidth" className="block">
                Figma Design Width
                <span className="block text-sm text-gray-500">scale from this screen size</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="figmaWidth"
                  type="number"
                  className="w-full rounded border px-3 py-2"
                  value={settings.figmaWidth}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      figmaWidth: Number(e.target.value),
                    })
                  }
                />
                <span className="text-gray-500">REM</span>
              </div>
            </div>
          </div>

          {/* Min Screen Width */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <label htmlFor="minWidth" className="block">
                Min Screen Width
                <span className="block text-sm text-gray-500">
                  stop scaling down at this screen size
                </span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="minWidth"
                  type="number"
                  className="w-full rounded border px-3 py-2"
                  value={settings.minWidth}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      minWidth: Number(e.target.value),
                    })
                  }
                />
                <span className="text-gray-500">REM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Values */}
        <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Generated Values</h2>
          {/* Add fluid calculation display here */}
        </div>
      </Container>
    </Section>
  )
}
