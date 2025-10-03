import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bravado Homes | Dr. Janet Duffy - Century Communities',
    template: '%s | Bravado Homes by Dr. Janet Duffy',
  },
  description: 'Discover your dream home at Bravado in North Las Vegas. Dr. Janet Duffy, featured partner with Century Communities, offers stunning new homes from $459,990 with modern amenities and smart home features.',
  openGraph: {
    title: 'Bravado Homes | Dr. Janet Duffy - Century Communities',
    description: 'Discover your dream home at Bravado in North Las Vegas. Dr. Janet Duffy, featured partner with Century Communities, offers stunning new homes from $459,990 with modern amenities and smart home features.',
    url: baseUrl,
    siteName: 'Bravado Homes by Dr. Janet Duffy',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
