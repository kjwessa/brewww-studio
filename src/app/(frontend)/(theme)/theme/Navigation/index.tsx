'use client'

import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { useEffect, useState } from 'react'

interface ThemeNavigationProps {
  theme: 'dark' | 'light'
  onThemeChange: (theme: 'dark' | 'light') => void
}

export function ThemeNavigation({ theme, onThemeChange }: ThemeNavigationProps) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    onThemeChange(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Section 
      theme="inherit" 
      background="default" 
      className={`sticky top-0 z-50 transition-shadow duration-200 ${hasScrolled ? 'shadow-md' : ''}`}
    >
      <Container spacing="small">
        <nav className="flex items-center justify-between px-4">
          <Link
            href="/home"
            className="cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
          >
            {'Back to Site'}
          </Link>
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </nav>
      </Container>
    </Section>
  )
}
