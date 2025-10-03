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
    default: 'Bravado Homes by Dr. Janet Duffy | New Homes in North Las Vegas',
    template: '%s | Bravado Homes by Dr. Janet Duffy',
  },
  description: 'Discover luxury new homes at Bravado in North Las Vegas. Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities, offers expert guidance on homes from $459,990.',
  keywords: [
    'Bravado North Las Vegas',
    'new homes Las Vegas',
    'Century Communities',
    'Dr. Janet Duffy',
    'new home construction',
    'buyer representation',
    'luxury homes North Las Vegas',
    '89031',
    'North Las Vegas real estate',
    'new construction homes',
    'gated community Las Vegas',
    'smart home technology',
    'Century Connect',
    'Residence 1792',
    'Residence 1943',
    'Residence 2119'
  ],
  authors: [{ name: 'Dr. Janet Duffy', url: 'https://bravadohomes.com' }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Bravado Homes by Dr. Janet Duffy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Bravado Homes by Dr. Janet Duffy | New Homes in North Las Vegas',
    description: 'Discover luxury new homes at Bravado in North Las Vegas. Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities, offers expert guidance on homes from $459,990.',
    url: baseUrl,
    siteName: 'Bravado Homes by Dr. Janet Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/bravado/exterior/community-hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bravado Community in North Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravado Homes by Dr. Janet Duffy | New Homes in North Las Vegas',
    description: 'Discover luxury new homes at Bravado in North Las Vegas. Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities.',
    images: [`${baseUrl}/images/bravado/exterior/community-hero.jpg`],
    creator: '@DrJanSells',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Real Estate',
  classification: 'New Home Construction',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1d4ed8' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    'zip': '89031',
    'geo.region': 'US-NV',
    'geo.placename': 'North Las Vegas',
    'geo.position': '36.1989;-115.1175',
    'ICBM': '36.1989, -115.1175',
    'DC.title': 'Bravado Homes by Dr. Janet Duffy',
    'DC.description': 'Discover luxury new homes at Bravado in North Las Vegas',
    'DC.subject': 'Real Estate, New Homes, North Las Vegas',
    'DC.language': 'en',
    'DC.coverage': 'North Las Vegas, Nevada',
    'business:contact_data:locality': 'North Las Vegas',
    'business:contact_data:region': 'NV',
    'business:contact_data:postal_code': '89031',
    'business:contact_data:country_name': 'United States',
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
