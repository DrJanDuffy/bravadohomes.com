export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://bravadohomes.com/#agent",
        "name": "Dr. Janet Duffy",
        "alternateName": "Dr. Jan Duffy",
        "description": "Featured New Home Construction & Buyer Representation Specialist for Century Communities",
        "url": "https://bravadohomes.com",
        "telephone": "+17025001955",
        "email": "DrJanSells@BravadoHomes.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5060 Wind Springs Street",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
          "addressCountry": "US"
        },
        "licenseNumber": "S.0197614",
        "areaServed": {
          "@type": "City",
          "name": "North Las Vegas",
          "containedInPlace": {
            "@type": "State",
            "name": "Nevada"
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
            "value": "459990",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 1943",
            "description": "1,943 sq ft, 3-4 bedrooms, 2.5 bathrooms",
            "value": "469990",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 2119",
            "description": "2,119 sq ft, 3-4 bedrooms, 2.5 bathrooms",
            "value": "479990",
            "unitCode": "USD"
          }
        ],
        "provider": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "One of America's Top 10 Homebuilders"
        },
        "hasMap": "https://maps.google.com/?q=5060+Wind+Springs+Street+North+Las+Vegas+NV+89031"
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
            "telephone": "+17025001955",
            "contactType": "Primary Phone",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+17022221964",
            "contactType": "Urgent/Marketing",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "email": "DrJanSells@BravadoHomes.com",
            "contactType": "Email",
            "availableLanguage": "English"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5060 Wind Springs Street",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
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
        "@id": "https://bravadohomes.com/#website",
        "url": "https://bravadohomes.com",
        "name": "Bravado Homes by Dr. Janet Duffy",
        "description": "Featured New Home Construction & Buyer Representation for Century Communities in North Las Vegas",
        "publisher": {
          "@id": "https://bravadohomes.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bravadohomes.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://bravadohomes.com/#webpage",
        "url": "https://bravadohomes.com",
        "name": "Bravado North Las Vegas - New Homes by Dr. Janet Duffy",
        "isPartOf": {
          "@id": "https://bravadohomes.com/#website"
        },
        "about": {
          "@id": "https://bravadohomes.com/#community"
        },
        "description": "Discover luxury new homes at Bravado in North Las Vegas. Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities, offers expert guidance on homes from $459,990.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://bravadohomes.com"
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
