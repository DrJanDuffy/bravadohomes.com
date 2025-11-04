import RealScoutListings from '../../components/realscout-listings'
import RealScoutAdvancedSearch from '../../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residence 1792 - Bravado North Las Vegas | Dr. Janet Duffy',
  description: 'Discover Residence 1792 at Bravado in North Las Vegas. 1,792 sq ft, 3-4 bedrooms, 2.5 baths, from $459,990. Expert guidance from Dr. Janet Duffy, Century Communities Featured Partner.',
  keywords: [
    'Residence 1792',
    'Bravado North Las Vegas',
    '1792 sq ft homes',
    'North Las Vegas new homes',
    'Century Communities',
    'Dr. Janet Duffy',
    'new construction',
    '89031',
    'luxury homes Las Vegas'
  ],
  openGraph: {
    title: 'Residence 1792 - Bravado North Las Vegas | Dr. Janet Duffy',
    description: 'Discover Residence 1792 at Bravado in North Las Vegas. 1,792 sq ft, 3-4 bedrooms, 2.5 baths, from $459,990.',
    type: 'website',
    images: [
      {
        url: '/images/bravado/floor-plans/residence-1792.jpg',
        width: 1200,
        height: 630,
        alt: 'Residence 1792 Floor Plan - Bravado North Las Vegas',
      },
    ],
  },
  alternates: {
    canonical: 'https://bravadohomes.com/models/residence-1792',
  },
}

export default async function Residence1792Page() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Residence 1792 - Bravado North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            From $459,990 | 1,792 Sq Ft | 3-4 Bedrooms
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Tour
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Model Overview Section */}
      <div className="about-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About Residence 1792
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You'll fall in love with <strong>Residence 1792 at Bravado</strong>, a versatile open-concept plan offering two stories of inviting living space and stylish features. This exceptional home design from <strong>Century Communities</strong> combines modern functionality with elegant aesthetics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As you enter the home from a <strong>courtyard entrance</strong>, you'll find a <strong>two-story foyer</strong> leading to a wide-open great room and a well-appointed kitchen—boasting a spacious center island, a large walk-in pantry and a charming dining area with direct access to a patio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As you head upstairs, you'll find an <strong>expansive loft</strong>, two generous secondary bedrooms—sharing a hall bathroom—plus a convenient laundry room. Highlighting the upper level is a <strong>private primary suite</strong>—boasting a roomy walk-in closet and a deluxe bath with dual vanities and a walk-in shower.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/floor-plans/residence-1792.svg"
                alt="Residence 1792 Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">1,792</p>
                  <p className="text-sm text-gray-600">Square Feet</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">3-4</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">2.5</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Car Garage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Key Features of Residence 1792
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Main Level Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two-story foyer with courtyard entrance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Wide-open great room for entertaining
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Well-appointed kitchen with spacious center island
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Large walk-in pantry for storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Charming dining area with direct patio access
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Upper Level Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Expansive loft for flexible living space
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two generous secondary bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Shared hall bathroom for secondary bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Convenient laundry room upstairs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Private primary suite with roomy walk-in closet
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Deluxe bath with dual vanities and walk-in shower
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Residence 1792 Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current Residence 1792 homes available in the Bravado community. 
            Get real-time pricing, availability, and move-in dates.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="459990"
              priceMax="479990"
            />
          </div>
        </div>
      </div>

      {/* Customization Options Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Customization Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kitchen Options</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Premium granite countertops</li>
              <li>Stainless steel appliances</li>
              <li>Custom cabinet finishes</li>
              <li>Extended center island</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flooring Options</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Hardwood flooring upgrades</li>
              <li>Luxury vinyl plank</li>
              <li>Premium carpet selections</li>
              <li>Tile flooring options</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor Options</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Extended covered patio</li>
              <li>Outdoor kitchen setup</li>
              <li>Fire pit installation</li>
              <li>Landscaping packages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dr. Janet Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Janet Duffy for Your Residence 1792?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on your new home construction with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Construction Expert</h3>
              <p className="opacity-90">Specialized knowledge in new home construction and Century Communities processes</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to priority lot selection and builder incentives</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate throughout the entire construction and closing process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🔍 Advanced Property Search
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Use our advanced search to find similar properties or explore other options in North Las Vegas
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Tour Residence 1792?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for a private tour and expert guidance on your Residence 1792 purchase
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            EMAIL<br />
            {email}
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Bravado Sales Office</h3>
            <p>Dr. Janet Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 222-1964</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Model Home Hours</h3>
            <p>Monday-Sunday: 10:00 AM - 6:00 PM<br />
            5060 Wind Springs Street<br />
            North Las Vegas, NV 89031</p>
          </div>
        </div>
      </div>
    </section>
  )
}
