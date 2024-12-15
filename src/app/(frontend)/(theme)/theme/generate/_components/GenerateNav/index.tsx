'use client'

import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useThemeGenerate } from '../../_context/ThemeGenerateContext'

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: 'General', href: '/theme/generate' },
  { name: 'Headings', href: '/theme/generate#headings' },
  { name: 'Paragraphs', href: '/theme/generate#paragraphs' },
  { name: 'Spacing', href: '/theme/generate#spacing' },
  { name: 'Code', href: '/theme/generate#code' },
]

export function GenerateNav() {
  const pathname = usePathname()
  const { resetToDefaults } = useThemeGenerate()

  const handleResetValues = () => {
    resetToDefaults()
  }

  return (
    <div className="fixed right-0 bottom-0 left-0 border-t bg-white">
      <Container size="3xl" spacing="none">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              onClick={() => {}}
            >
              View Docs
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              onClick={handleResetValues}
            >
              Reset Values
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
              onClick={() => console.log('Copy code clicked')}
            >
              Copy Code
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
