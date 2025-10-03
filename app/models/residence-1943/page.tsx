import RealScoutListings from '../../components/realscout-listings'
import RealScoutAdvancedSearch from '../../components/realscout-advanced-search'
import Image from 'next/image'

export default function Residence1943Page() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge inline-block mb-4">MOST POPULAR</div>
          <h1 className="text-5xl font-bold mb-6">
            Residence 1943 - Bravado North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            From $469,990 | 1,943 Sq Ft | 3-4 Bedrooms
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
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
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About Residence 1943 - Most Popular Choice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong>Residence 1943</strong> is the most popular floor plan at Bravado, offering the perfect balance of space, functionality, and luxury. This exceptional home design from <strong>Century Communities</strong> provides 1,943 square feet of thoughtfully designed living space.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This two-story home features a <strong>spacious open-concept design</strong> with a gourmet kitchen, expansive great room, and premium finishes throughout. The main level includes a <strong>covered patio</strong> for outdoor entertaining and a <strong>two-car garage</strong> with direct access.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Upstairs, you'll find <strong>three to four bedrooms</strong> including a luxurious master suite with a spa-like bathroom, walk-in closet, and private retreat space. The additional bedrooms share a well-appointed hall bathroom, and there's a <strong>convenient laundry room</strong> on the upper level.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/floor-plans/residence-1943.svg"
                alt="Residence 1943 Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">1,943</p>
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
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Residence 1943 is Our Most Popular Choice
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Main Level Excellence</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Spacious open-concept great room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Gourmet kitchen with center island
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Large walk-in pantry for storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Covered patio for outdoor living
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two-car garage with direct access
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Upper Level Luxury</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Luxurious master suite with spa-like bath
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Generous walk-in closet in master
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two additional bedrooms with shared bath
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Convenient upstairs laundry room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Flexible fourth bedroom option
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Residence 1943 Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current Residence 1943 homes available in the Bravado community. 
            As our most popular model, these homes sell quickly!
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="469990"
              priceMax="489990"
            />
          </div>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Premium Features & Upgrades
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Gourmet Kitchen</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Granite countertops</li>
              <li>Stainless steel appliances</li>
              <li>Custom cabinetry</li>
              <li>Large center island</li>
              <li>Walk-in pantry</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🛁</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Master Suite</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Spa-like master bathroom</li>
              <li>Dual vanities</li>
              <li>Walk-in shower</li>
              <li>Large walk-in closet</li>
              <li>Private retreat space</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor Living</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Covered patio</li>
              <li>Outdoor kitchen ready</li>
              <li>Fire pit installation</li>
              <li>Professional landscaping</li>
              <li>Low-maintenance design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dr. Janet Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Janet Duffy for Your Residence 1943?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on your new home construction with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Most Popular Model</h3>
              <p className="opacity-90">Insider knowledge of why this model is the top choice at Bravado</p>
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
          Ready to Tour Residence 1943?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for a private tour and expert guidance on your Residence 1943 purchase
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            EMAIL<br />
            DrJanSells@BravadoHomes.com
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
            DrJanSells@BravadoHomes.com</p>
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
