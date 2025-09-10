import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import '@/app/globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import localFont from 'next/font/local'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Miss Hoian Muehldorf - Authentic Vietnamese Restaurant',
  description:
    'Experience authentic Vietnamese cuisine in the heart of Muehldorf. Traditional flavors, warm hospitality, and cultural dining experience.',
  generator: 'v0.app',
}

const hsMische = localFont({
  src: [
    { path: '../../../public/fonts/hs-mische-display.otf', weight: '400', style: 'normal' },
    { path: '../../../public/fonts/hs-mische-display.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-hs-mische',
  display: 'swap',
})

const SFProDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/sf-pro-display/SFPRODISPLAYREGULAR.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
  display: 'swap',
})

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${manrope.variable} ${hsMische.variable} ${SFProDisplay.variable}`}
      >
        <NextIntlClientProvider>
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
