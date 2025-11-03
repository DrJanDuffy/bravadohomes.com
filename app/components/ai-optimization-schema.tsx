/**
 * AI-Optimized Schema Markup for Better Indexing
 * This component adds additional structured data optimized for AI search engines
 * like Perplexity, ChatGPT, Claude, and other AI assistants
 */
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function AIOptimizationSchema() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const location = config.location
  const contact = config.contact
  const agent = config.realEstateAgent
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${config.businessName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${config.businessName} is a luxury community in ${location.city}, ${location.state}, featuring new construction homes. Expert guidance from ${agent?.name || 'Dr. Janet Duffy'}, Featured New Home Construction & Buyer Representation Specialist.${location.address !== 'TBD' ? ` Located at ${location.address}${location.zip !== 'TBD' ? `, ${location.zip}` : ''}.` : ''}`
        }
      },
      {
        "@type": "Question",
        "name": `Who is ${agent?.name || 'Dr. Janet Duffy'}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${agent?.name || 'Dr. Janet Duffy'} is a Featured New Home Construction & Buyer Representation Specialist. ${agent?.licenseNumber ? `Holds Nevada Real Estate License ${agent.licenseNumber}. ` : ''}Specializes in new home construction and buyer representation in ${location.city}. Provides expert guidance for new construction homes.`
        }
      },
      {
        "@type": "Question",
        "name": `What homes are available at ${config.businessName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${config.businessName} offers new construction homes with expert guidance from ${agent?.name || 'Dr. Janet Duffy'}. Contact ${contact.phone} or ${contact.email} for current availability and floor plan information.`
        }
      },
      {
        "@type": "Question",
        "name": `Where is ${config.businessName} located?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${config.businessName} is located in ${location.city}, ${location.state}.${location.address !== 'TBD' ? ` Address: ${location.address}${location.zip !== 'TBD' ? `, ${location.zip}` : ''}.` : ''} Contact ${contact.phone} for directions and to schedule a tour.`
        }
      },
      {
        "@type": "Question",
        "name": "What is Century Communities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Century Communities is one of America's Top 10 Homebuilders, known for quality new construction homes. Dr. Janet Duffy is a Featured Partner with Century Communities, providing VIP access and expert guidance for their communities including Bravado in North Las Vegas."
        }
      },
      {
        "@type": "Question",
        "name": `How do I contact ${agent?.name || 'Dr. Janet Duffy'} about ${config.businessName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can contact ${agent?.name || 'Dr. Janet Duffy'} at ${contact.phone} or email ${contact.email}. Schedule a consultation to learn about available homes and floor plans.`
        }
      },
      {
        "@type": "Question",
        "name": `What amenities are included in ${config.businessName} homes?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${config.businessName} homes feature premium finishes, expansive living spaces, and modern design. Contact ${contact.phone} for detailed information about available amenities and features.`
        }
      }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${config.businessName} - Luxury New Homes in ${location.city}`,
    "description": `Discover ${config.businessName}, a luxury community in ${location.city} featuring new construction homes. Expert guidance from ${agent?.name || 'Dr. Janet Duffy'}, Featured Partner.`,
    "author": {
      "@type": "Person",
      "name": agent?.name || "Dr. Janet Duffy",
      "identifier": agent?.licenseNumber || "S.0197614"
    },
    "publisher": {
      "@type": "Organization",
      "name": config.businessName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": baseUrl
    },
    "about": {
      "@type": "Place",
      "name": config.businessName,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address !== 'TBD' ? location.address : '',
        "addressLocality": location.city,
        "addressRegion": location.state,
        "postalCode": location.zip !== 'TBD' ? location.zip : '',
        "addressCountry": "US"
      }
    }
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Buy a New Home at ${config.businessName} in ${location.city}`,
    "description": `Step-by-step guide to purchasing a new construction home at ${config.businessName} with expert guidance from ${agent?.name || 'Dr. Janet Duffy'}`,
    "step": [
      {
        "@type": "HowToStep",
        "name": `Contact ${agent?.name || 'Dr. Janet Duffy'}`,
        "text": `Call ${contact.phone} or email ${contact.email} to schedule a consultation`,
        "url": `${baseUrl}/contact`
      },
      {
        "@type": "HowToStep",
        "name": "Tour the Model Homes",
        "text": `Visit ${config.businessName} in ${location.city}, ${location.state}.${location.address !== 'TBD' ? ` Address: ${location.address}.` : ''} Contact ${contact.phone} for tour hours and availability.`,
        "url": baseUrl
      },
      {
        "@type": "HowToStep",
        "name": "Explore Floor Plans",
        "text": "Review available floor plans and home features with expert guidance",
        "url": `${baseUrl}/floor-plans`
      },
      {
        "@type": "HowToStep",
        "name": "Get Pre-Approved",
        "text": `Work with ${agent?.name || 'Dr. Janet Duffy'} to explore financing options and builder incentives`,
        "url": `${baseUrl}/financing-incentives`
      },
      {
        "@type": "HowToStep",
        "name": "Select Your Home",
        "text": `Choose your preferred floor plan and lot with ${agent?.name || 'Dr. Janet Duffy'}'s expert guidance`,
        "url": `${baseUrl}/models`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  )
}

