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
            "description": "Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist, is proud to represent Century Communities at Bravado in North Las Vegas, NV. This prestigious gated community showcases stunning two-story floor plans ranging from 1,792 to 2,119 square feet, featuring up to 5 bedrooms and contemporary open layouts. Each home includes the innovative Century Connect® smart home package, modern design elements, and premium finishes. Strategically located at 5060 Wind Springs Street in the 89031 zip code, Bravado offers unparalleled access to Craig Ranch Regional Park (170 acres), Aliante Casino + Hotel, Las Vegas Premium Outlets North, and I-15 access for easy commuting to downtown Las Vegas, McCarran International Airport, and the Las Vegas Strip.",
        "image": "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---003---02-exterior-front.jpg",
        "url": "https://bravadohomes.com",
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
        "telephone": "+17025001955",
        "email": "DrJanSells@BravadoHomes.com",
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
        "@id": "https://bravadohomes.com/#organization",
        "name": "Bravado Homes by Dr. Janet Duffy",
        "alternateName": "Bravado Homes",
        "description": "Featured New Home Construction & Buyer Representation for Century Communities in North Las Vegas",
        "url": "https://bravadohomes.com",
        "logo": "https://bravadohomes.com/logo.png",
        "sameAs": [
          "https://bravadohomes.com"
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
          "@id": "https://bravadohomes.com/#agent"
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
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
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
