/**
 * Server-side domain detection and metadata generation
 * This file provides utilities for generating domain-specific metadata
 */

import { headers } from 'next/headers'
import { getCurrentDomainConfig, getCurrentDomain } from './utils/domain'
import type { Metadata } from 'next'

/**
 * Generate metadata based on current domain
 */
export async function generateDomainMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const hostname = headersList.get('host') || 'bravadohomes.com'
  const domain = hostname.split(':')[0]
  const config = getCurrentDomainConfig({ headers: headersList })
  
  // Extract domain-specific info
  const businessName = config.businessName
  const location = config.location
  const contact = config.contact
  
  return {
    metadataBase: new URL(config.baseUrl),
    title: {
      default: `${businessName} | New Homes in ${location.city}`,
      template: `%s | ${businessName}`,
    },
    description: `Discover luxury new homes in ${location.city}. Expert guidance from ${config.realEstateAgent?.name || 'Dr. Janet Duffy'}, Featured New Home Construction & Buyer Representation Specialist.`,
    keywords: [
      `${businessName}`,
      `new homes ${location.city}`,
      `${location.city} real estate`,
      location.zip !== 'TBD' ? location.zip : '',
      'new home construction',
      'buyer representation',
      config.realEstateAgent?.name || 'Dr. Janet Duffy',
    ].filter(Boolean),
    authors: [{ name: config.realEstateAgent?.name || 'Dr. Janet Duffy', url: config.baseUrl }],
    creator: config.realEstateAgent?.name || 'Dr. Janet Duffy',
    publisher: businessName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `${businessName} | New Homes in ${location.city}`,
      description: `Discover luxury new homes in ${location.city}. Expert guidance from ${config.realEstateAgent?.name || 'Dr. Janet Duffy'}.`,
      url: config.baseUrl,
      siteName: businessName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${config.baseUrl}/images/bravado/exterior/community-hero.jpg`,
          width: 1200,
          height: 630,
          alt: `${businessName} Community`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${businessName} | New Homes in ${location.city}`,
      description: `Discover luxury new homes in ${location.city}. Expert guidance from ${config.realEstateAgent?.name || 'Dr. Janet Duffy'}.`,
      images: [`${config.baseUrl}/images/bravado/exterior/community-hero.jpg`],
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
      // Optimize for AI search engines
      'GPTBot': {
        index: true,
        follow: true,
      },
      'ChatGPT-User': {
        index: true,
        follow: true,
      },
      'ClaudeBot': {
        index: true,
        follow: true,
      },
      'PerplexityBot': {
        index: true,
        follow: true,
      },
    },
    verification: {
      google: config.googleVerification || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    },
    category: 'Real Estate',
    classification: 'New Home Construction',
    referrer: 'origin-when-cross-origin',
    other: {
      'zip': location.zip !== 'TBD' ? location.zip : '',
      'geo.region': `US-${location.state}`,
      'geo.placename': location.city,
      'geo.position': `${location.coordinates.lat};${location.coordinates.lng}`,
      'ICBM': `${location.coordinates.lat}, ${location.coordinates.lng}`,
      'DC.title': businessName,
      'DC.description': `Discover luxury new homes in ${location.city}`,
      'DC.subject': `Real Estate, New Homes, ${location.city}`,
      'DC.language': 'en',
      'DC.coverage': `${location.city}, ${location.state}`,
      'business:contact_data:locality': location.city,
      'business:contact_data:region': location.state,
      'business:contact_data:postal_code': location.zip !== 'TBD' ? location.zip : '',
      'business:contact_data:country_name': 'United States',
    },
  }
}

