'use client'

import Script from 'next/script'
import { getCurrentDomainConfig } from '../utils/domain'

/**
 * Google Analytics 4 (GA4) Component
 * Supports multiple domains with domain-specific measurement IDs
 */
export default function GoogleAnalytics() {
  // Get domain config (client-side)
  const domainConfig = typeof window !== 'undefined' 
    ? getCurrentDomainConfig({ headers: { get: (key: string) => key === 'host' ? window.location.hostname : null } })
    : null
  
  const measurementId = domainConfig?.gaMeasurementId 
    || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID 
    || 'G-6H8SG3KDBY'

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  )
}

