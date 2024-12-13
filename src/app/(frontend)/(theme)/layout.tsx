import localFont from 'next/font/local'
import '@/styles/globals.css'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GridGuide } from '@/components/layout/GridGuide/index'
import { Grain } from '@/components/Grain/index'
import { AdminBar } from '@/components/AdminBar'
import { draftMode } from 'next/headers'

const DMSans = localFont({
  variable: '--font-dm-sans',
  display: 'swap',
  src: [
    {
      path: '../../fonts/DMSans.ttf',
      weight: '100 400 900',
      style: 'normal',
    },
  ],
})

const BebasNeue = localFont({
  variable: '--font-bebas-neue',
  display: 'swap',
  src: [
    {
      path: '../../fonts/BebasNeue.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default async function InnerLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" className={`${DMSans.variable} ${BebasNeue.variable}`} suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
      </head>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <AdminBar adminBarProps={{ preview: isEnabled }} />
        <Grain>
          <LivePreviewListener />
          {children}
        </Grain>
        <GridGuide />
      </body>
    </html>
  )
}
