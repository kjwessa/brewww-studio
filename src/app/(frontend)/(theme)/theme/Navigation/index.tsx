'use client'

import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

interface ThemeNavigationProps {
  theme: 'dark' | 'light'
  onThemeChange: (theme: 'dark' | 'light') => void
}

export function ThemeNavigation({ theme, onThemeChange }: ThemeNavigationProps) {
  const toggleTheme = () => {
    onThemeChange(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Section theme="inherit" background="default">
      <Container>
        <nav className="sticky top-4 flex justify-between items-center px-4">
          <Link
            href="/home"
            className="rounded-md bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
          >
            {'Back to Site'}
          </Link>
          <button
            onClick={toggleTheme}
            className="rounded-md bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </nav>
      </Container>
    </Section>
  )
}
