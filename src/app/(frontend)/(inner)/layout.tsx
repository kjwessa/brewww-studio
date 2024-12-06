import localFont from 'next/font/local'
import '@/styles/globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GridGuide } from '@/components/Layout/GridGuide/index'
import { Grain } from '@/components/Grain/index'
import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
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
      <body className="bg-gray-950 text-gray-50 antialiased">
        <AdminBar adminBarProps={{ preview: isEnabled }} />
        <Grain>
          <LivePreviewListener />
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </Grain>
        <GridGuide />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://brewww.studio'),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@brewwwstudio',
  },
}
