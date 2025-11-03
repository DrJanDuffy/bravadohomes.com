/**
 * AI-Optimized Schema Markup for Better Indexing
 * This component adds additional structured data optimized for AI search engines
 * like Perplexity, ChatGPT, Claude, and other AI assistants
 */
export default function AIOptimizationSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bravado in North Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bravado is a luxury gated community in North Las Vegas, NV, featuring new construction homes by Century Communities. The community offers two-story floor plans ranging from 1,792 to 2,119 square feet with 3 to 5 bedrooms, starting at $459,790. Located at 5060 Wind Springs Street in the 89031 zip code, Bravado includes smart home technology and premium finishes."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Dr. Janet Duffy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Janet Duffy is a Featured New Home Construction & Buyer Representation Specialist for Century Communities. She holds Nevada Real Estate License S.0197614 and specializes in new home construction and buyer representation in North Las Vegas. She provides expert guidance for Bravado homes and other Century Communities properties."
        }
      },
      {
        "@type": "Question",
        "name": "What floor plans are available at Bravado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bravado offers three two-story floor plans: Residence 1792 (1,792 sq ft, 3-4 bedrooms, from $459,790), Residence 1943 (1,943 sq ft, 3 bedrooms, from $469,790), and Residence 2119 (2,119 sq ft, 3 bedrooms, from $479,790). All homes include Century Connect® smart home technology and premium finishes."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Bravado located in North Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bravado is located at 5060 Wind Springs Street, North Las Vegas, NV 89031. The community is strategically positioned near Craig Ranch Regional Park, Aliante Casino + Hotel, Las Vegas Premium Outlets North, and provides easy I-15 access to downtown Las Vegas and the Las Vegas Strip."
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
        "name": "How do I contact Dr. Janet Duffy about Bravado homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Dr. Janet Duffy at (702) 500-1955 or email DrJanSells@BravadoHomes.com. The model home is open Monday-Sunday from 10:00 AM to 6:00 PM at 5060 Wind Springs Street, North Las Vegas, NV 89031."
        }
      },
      {
        "@type": "Question",
        "name": "What amenities are included in Bravado homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bravado homes include Century Connect® smart home technology, premium finishes, expansive living spaces, gourmet kitchens, and contemporary open layouts. The community is gated and features parks, walking paths, and convenient access to nearby recreational facilities."
        }
      }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bravado North Las Vegas - Luxury New Homes by Century Communities",
    "description": "Discover Bravado, a luxury gated community in North Las Vegas featuring new construction homes by Century Communities. Expert guidance from Dr. Janet Duffy, Featured Partner.",
    "author": {
      "@type": "Person",
      "name": "Dr. Janet Duffy",
      "identifier": "S.0197614"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bravado Homes by Dr. Janet Duffy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bravadohomes.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bravadohomes.com"
    },
    "about": {
      "@type": "Place",
      "name": "Bravado",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5060 Wind Springs Street",
        "addressLocality": "North Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89031",
        "addressCountry": "US"
      }
    }
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy a New Home at Bravado in North Las Vegas",
    "description": "Step-by-step guide to purchasing a new construction home at Bravado with expert guidance from Dr. Janet Duffy",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Contact Dr. Janet Duffy",
        "text": "Call (702) 500-1955 or email DrJanSells@BravadoHomes.com to schedule a consultation",
        "url": "https://bravadohomes.com/contact"
      },
      {
        "@type": "HowToStep",
        "name": "Tour the Model Homes",
        "text": "Visit the model homes at 5060 Wind Springs Street, North Las Vegas, NV 89031. Open Monday-Sunday 10:00 AM - 6:00 PM",
        "url": "https://bravadohomes.com"
      },
      {
        "@type": "HowToStep",
        "name": "Explore Floor Plans",
        "text": "Review the three available floor plans: Residence 1792, Residence 1943, and Residence 2119",
        "url": "https://bravadohomes.com/floor-plans"
      },
      {
        "@type": "HowToStep",
        "name": "Get Pre-Approved",
        "text": "Work with Dr. Janet Duffy to explore financing options and builder incentives",
        "url": "https://bravadohomes.com/financing-incentives"
      },
      {
        "@type": "HowToStep",
        "name": "Select Your Home",
        "text": "Choose your preferred floor plan and lot with Dr. Janet Duffy's expert guidance",
        "url": "https://bravadohomes.com/models"
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

