import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function SchemaMarkup() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const location = config.location
  const contact = config.contact
  const agent = config.realEstateAgent

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#business`,
        "name": config.businessName,
        "description": `${agent?.name || 'Dr. Janet Duffy'}, Featured New Home Construction & Buyer Representation Specialist. Located in ${location.city}, ${location.state}. Premium new construction homes with expert guidance.`,
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
          "streetAddress": "5060 Wind Springs Street"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.253435600755466",
          "longitude": "-115.13597331838079"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Monday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Tuesday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Wednesday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Thursday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Friday",
            "opens": "12:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Saturday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Sunday",
            "opens": "10:00:00"
          }
        ],
        "telephone": contact.phone,
        "email": contact.email,
        "foundingDate": "2024",
        "areaServed": {
          "@type": "City",
          "name": "North Las Vegas",
          "containedInPlace": {
            "@type": "State",
            "name": "Nevada"
          }
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "36.253435600755466",
            "longitude": "-115.13597331838079"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bravado Home Models",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Residence 1792",
                "description": "1,792 sq ft, 3-4 bedrooms, 2.5 bathrooms",
                "category": "New Home Construction"
              },
              "price": "459790",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Residence 1943",
                "description": "1,943 sq ft, 3 bedrooms, 2.5 bathrooms",
                "category": "New Home Construction"
              },
              "price": "469790",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Residence 2119",
                "description": "2,119 sq ft, 3 bedrooms, 2.5 bathrooms",
                "category": "New Home Construction"
              },
              "price": "479790",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            }
          ]
        },
        "memberOf": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "One of America's Top 10 Homebuilders"
        },
        "sameAs": [
          "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/north-las-vegas/bravado/"
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${baseUrl}/#agent`,
        "name": agent?.name || "Dr. Janet Duffy",
        "description": "Featured New Home Construction & Buyer Representation Specialist",
        "url": baseUrl,
        "telephone": contact.phone,
        "email": contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address !== 'TBD' ? location.address : '',
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip !== 'TBD' ? location.zip : '',
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        },
        "licenseNumber": agent?.licenseNumber || "S.0197614",
        "areaServed": {
          "@type": "City",
          "name": location.city,
          "containedInPlace": {
            "@type": "State",
            "name": location.state
          }
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            },
            "name": "Nevada Real Estate License"
          }
        ],
        "memberOf": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "Featured Partner"
        },
        "worksFor": {
          "@id": "https://bravadohomes.com/#business"
        },
        "knowsAbout": [
          "New Home Construction",
          "Buyer Representation",
          "Century Communities",
          "Bravado Community",
          "North Las Vegas Real Estate"
        ],
        "sameAs": [
          "https://bravadohomes.com"
        ]
      },
      {
        "@type": "ResidentialComplex",
        "@id": "https://bravadohomes.com/#community",
        "name": "Bravado",
        "description": "Luxury gated community in North Las Vegas featuring new construction homes by Century Communities",
        "url": "https://bravadohomes.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5060 Wind Springs Street",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
          "addressCountry": "US"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gated Community",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Community Parks",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Walking Paths",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Smart Home Technology",
            "value": true
          }
        ],
        "numberOfUnits": "Limited",
        "petsAllowed": true,
        "isAccessibleForFree": false,
        "publicAccess": false,
        "smokingAllowed": false,
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Residence 1792",
            "description": "1,792 sq ft, 3-4 bedrooms, 2.5 bathrooms",
            "value": "459790",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 1943",
            "description": "1,943 sq ft, 3 bedrooms, 2.5 bathrooms",
            "value": "469790",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 2119",
            "description": "2,119 sq ft, 3 bedrooms, 2.5 bathrooms",
            "value": "479790",
            "unitCode": "USD"
          }
        ],
        "provider": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "One of America's Top 10 Homebuilders"
        },
        "hasMap": location.address !== 'TBD' && location.zip !== 'TBD' 
          ? `https://maps.google.com/?q=${encodeURIComponent(`${location.address} ${location.city} ${location.state} ${location.zip}`)}`
          : `https://maps.google.com/?q=${encodeURIComponent(`${location.city} ${location.state}`)}`
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": config.businessName,
        "description": `Featured New Home Construction & Buyer Representation in ${location.city}`,
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
          baseUrl
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": contact.phone,
            "contactType": "Primary Phone",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "email": contact.email,
            "contactType": "Email",
            "availableLanguage": "English"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address !== 'TBD' ? location.address : '',
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip !== 'TBD' ? location.zip : '',
          "addressCountry": "US"
        },
        "founder": {
          "@id": `${baseUrl}/#agent`
        },
        "memberOf": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "Featured Partner"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": config.businessName,
        "description": `Featured New Home Construction & Buyer Representation in ${location.city}`,
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        // Note: SearchAction removed to prevent Google from crawling search URL templates
        // Real estate sites don't typically have on-site search functionality
        // Contact information is the primary search "action" for this site
        "potentialAction": [],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": `${config.businessName} - New Homes in ${location.city}`,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "description": `Discover luxury new homes in ${location.city}. ${agent?.name || 'Dr. Janet Duffy'}, Featured New Home Construction & Buyer Representation Specialist.`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            }
          ]
        },
        "inLanguage": "en-US"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
