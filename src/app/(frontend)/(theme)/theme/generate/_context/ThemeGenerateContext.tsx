'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface HeadingVariable {
  id: string
  name: string
  desktopSize: number
  mobileSize: number
  scaleIndex: number
  unit: string
}

interface Settings {
  maxWidth: number
  figmaWidth: number
  minWidth: number
}

interface ThemeGenerateContextType {
  settings: Settings
  setSettings: (settings: Settings) => void
  variables: HeadingVariable[]
  setVariables: React.Dispatch<React.SetStateAction<HeadingVariable[]>>
  resetToDefaults: () => void
}

const defaultSettings: Settings = {
  maxWidth: 90,
  figmaWidth: 90,
  minWidth: 20,
}

const defaultVariables: HeadingVariable[] = [
  { id: '1', name: '--display-font-size', desktopSize: 7.21, mobileSize: 4.00, scaleIndex: 6, unit: 'rem' },
  { id: '2', name: '--h1-font-size', desktopSize: 5.19, mobileSize: 3.18, scaleIndex: 5, unit: 'rem' },
  { id: '3', name: '--h2-font-size', desktopSize: 3.73, mobileSize: 2.52, scaleIndex: 4, unit: 'rem' },
  { id: '4', name: '--h3-font-size', desktopSize: 2.69, mobileSize: 2.00, scaleIndex: 3, unit: 'rem' },
  { id: '5', name: '--h4-font-size', desktopSize: 1.93, mobileSize: 1.59, scaleIndex: 2, unit: 'rem' },
  { id: '6', name: '--h5-font-size', desktopSize: 1.39, mobileSize: 1.26, scaleIndex: 1, unit: 'rem' },
  { id: '7', name: '--h6-font-size', desktopSize: 1.00, mobileSize: 1.00, scaleIndex: 0, unit: 'rem' },
]

const ThemeGenerateContext = createContext<ThemeGenerateContextType | undefined>(undefined)

export function ThemeGenerateProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState(defaultSettings)
  const [variables, setVariables] = useState(defaultVariables)

  const resetToDefaults = () => {
    setSettings(defaultSettings)
    setVariables(defaultVariables)
  }

  return (
    <ThemeGenerateContext.Provider
      value={{
        settings,
        setSettings,
        variables,
        setVariables,
        resetToDefaults,
      }}
    >
      {children}
    </ThemeGenerateContext.Provider>
  )
}

export function useThemeGenerate() {
  const context = useContext(ThemeGenerateContext)
  if (context === undefined) {
    throw new Error('useThemeGenerate must be used within a ThemeGenerateProvider')
  }
  return context
}
