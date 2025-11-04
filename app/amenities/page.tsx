import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function AmenitiesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bravado Community Amenities
          </h1>
          <p className="text-2xl mb-4">
            Luxury Lifestyle Features in North Las Vegas
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

      {/* Community Overview */}
      <div className="luxury-community-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Luxury Community Living at Bravado
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Bravado</strong> offers residents a <strong>premium lifestyle</strong> with carefully designed amenities and features that enhance daily living. This gated community in North Las Vegas combines <strong>luxury, convenience, and security</strong> to create the perfect environment for modern families.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado provides easy access to <strong>I-15, Craig Ranch Regional Park</strong>, and all the amenities that make North Las Vegas an exceptional place to call home.
            </p>
            <div className="luxury-highlight">
              <p>
                <strong>Dr. Janet Duffy</strong>, as a Featured New Home Construction & Buyer Representation Specialist, can help you understand all the <strong>community benefits and amenities</strong> that make Bravado the perfect choice for your new home.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/community/amenities.svg"
                alt="Bravado Community Amenities"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Community Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Gated</p>
                  <p className="text-sm text-gray-600">Security & Privacy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Parks</p>
                  <p className="text-sm text-gray-600">Recreation Areas</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Paths</p>
                  <p className="text-sm text-gray-600">Walking Trails</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Smart</p>
                  <p className="text-sm text-gray-600">Home Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Privacy Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Gated Security & Privacy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="text-4xl mb-4 text-center">🔒</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Gated Community Access</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Controlled access entry gates
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Enhanced security and privacy
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Reduced traffic and noise
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Peaceful residential environment
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="text-4xl mb-4 text-center">🏡</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Privacy & Exclusivity</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Private residential streets
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Exclusive community atmosphere
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Well-maintained common areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Professional property management
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recreation & Lifestyle Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Recreation & Active Lifestyle
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Community Parks</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Green spaces and landscaping</li>
              <li>• Playground areas for children</li>
              <li>• Picnic and gathering areas</li>
              <li>• Beautiful natural surroundings</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🚶‍♀️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Walking Paths</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Paved walking trails</li>
              <li>• Jogging and exercise paths</li>
              <li>• Pet-friendly walkways</li>
              <li>• Scenic route options</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Active Lifestyle</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Outdoor exercise opportunities</li>
              <li>• Family-friendly activities</li>
              <li>• Community fitness spaces</li>
              <li>• Healthy living environment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Smart Home Technology Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Century Connect® Smart Home Technology
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every Bravado home comes equipped with advanced smart home features for modern living
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">📱</div>
              <h3 className="text-xl font-bold mb-3">Smart Control</h3>
              <p className="opacity-90">Control lighting, temperature, and security from your phone</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🔋</div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="opacity-90">Smart thermostats and energy monitoring for lower bills</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏠</div>
              <h3 className="text-xl font-bold mb-3">Home Automation</h3>
              <p className="opacity-90">Automated scheduling and voice assistant integration</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🔒</div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="opacity-90">Smart locks and security system integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Homes with Full Amenities
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current homes available in Bravado with all community amenities included. 
            Get expert guidance on amenities and community features.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="450000"
              priceMax="800000"
            />
          </div>
        </div>
      </div>

      {/* Dr. Janet Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Janet Duffy for Your Bravado Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on community amenities and lifestyle benefits with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Community Expert</h3>
              <p className="opacity-90">Deep knowledge of Bravado amenities and community features</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities amenities and features</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate for understanding all community benefits</p>
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
            Use our advanced search to find properties with specific amenities and features
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Bravado Amenities?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for a private tour and expert guidance on Bravado's luxury amenities
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
