'use client'

import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'

interface ThemeNavigationProps {
  theme: 'dark' | 'light'
  onThemeChange: (theme: 'dark' | 'light') => void
}

export function ThemeNavigation({ theme, onThemeChange }: ThemeNavigationProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)

      // Check which section is currently in view
      const sections = ['typography', 'colors']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  const toggleTheme = () => {
    onThemeChange(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Section
      theme="inherit"
      background="default"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        hasScrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <Container size="3xl" spacing="none" className="py-3">
        <nav className="flex items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link
              href="/home"
              className="flex items-center gap-2 rounded-md p-2 text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('typography')}
                className={`cursor-pointer text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'typography'
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Typography
              </button>
              <button
                onClick={() => scrollToSection('colors')}
                className={`cursor-pointer text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'colors' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Colors
              </button>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </nav>
      </Container>
    </Section>
  )
}
