import Image from 'next/image'
import RealScoutListings from './components/realscout-listings'
import RealScoutHomeValue from './components/realscout-home-value'
import RealScoutAdvancedSearch from './components/realscout-advanced-search'
import RealScoutSimpleSearch from './components/realscout-simple-search'
import SchemaMarkup from './components/schema'
import PhotoGallery from './components/photo-gallery'

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bravado/exterior/community-hero.svg"
            alt="Bravado Community Exterior"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="vip-badge">
            ⭐ VIP ACCESS
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Bravado North Las Vegas
      </h1>
          <p className="text-2xl mb-4 text-white drop-shadow-md font-semibold">
            $459K+ Luxury Homes in Gated Community
          </p>
          <p className="text-xl mb-8 text-white drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="#property-search" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🔍 Search Properties
            </a>
          </div>
          <p className="text-lg text-white drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm inline-block">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* RealScout Property Search Section */}
      <div id="property-search" className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              🔍 Search Bravado & North Las Vegas Properties
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              Use our advanced property search to find your perfect home in Bravado and throughout North Las Vegas. 
              Get real-time market data and personalized recommendations from Dr. Janet Duffy.
            </p>
            
            {/* Quick Simple Search */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Property Search</h3>
              <p className="text-white mb-6 opacity-90">Start your search with our streamlined search tool</p>
              <div className="max-w-2xl mx-auto">
                <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>
            
            {/* RealScout Search Widget */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏡 Bravado Community Search</h3>
                  <p className="text-gray-700 mb-4">
                    Search specifically within the Bravado community for available homes, 
                    floor plans, and pricing information.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <RealScoutListings
                      agentEncodedId="QWdlbnQtMjI1MDUw"
                      sortOrder="PRICE_LOW"
                      listingStatus="For Sale"
                      propertyTypes=",SFR,OTHER"
                      priceMin="500000"
                      priceMax="600000"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🗺️ North Las Vegas Market Search</h3>
                  <p className="text-gray-700 mb-4">
                    Explore the broader North Las Vegas market with advanced filters 
                    for price, size, features, and location.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
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
            </div>

            {/* Market Insights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-gray-900 mb-2">Market Trends</h4>
                <p className="text-sm text-gray-700">Real-time North Las Vegas market data and pricing trends</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏘️</div>
                <h4 className="font-bold text-gray-900 mb-2">Neighborhood Info</h4>
                <p className="text-sm text-gray-700">Detailed insights on schools, amenities, and local attractions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Property Values</h4>
                <p className="text-sm text-gray-700">Accurate home valuations and investment potential analysis</p>
              </div>
            </div>

            {/* Home Value Widget */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                🏡 Get Your Home's Current Market Value
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Find out what your home is worth in today's North Las Vegas market. 
                Get an instant valuation from Dr. Janet Duffy's RealScout system.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            {/* Advanced Search Widget */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                🔍 Advanced Property Search
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Use our powerful advanced search to find exactly what you're looking for. 
                Filter by price, size, features, location, and more with Dr. Janet Duffy's RealScout system.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="text-center">
              <a href="/contact" className="cta-button inline-block">
                Get Personalized Property Alerts from Dr. Janet Duffy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Bravado Community Gallery
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
          Explore the stunning homes and beautiful community at Bravado. From modern exteriors to luxurious interiors, 
          discover why Bravado is the perfect place to call home in North Las Vegas.
        </p>
        <PhotoGallery />
      </div>

      {/* About Bravado Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado by Century Communities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          From <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—<strong>Bravado</strong> offers exceptional <strong>new homes for sale in North Las Vegas, NV</strong>. This prestigious North Las Vegas community features a luxurious lineup of <strong>two-story homes</strong> with <strong>modern designs</strong>, optional smart home features, and contemporary layouts.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado combines luxury and convenience for the ideal home in Clark County.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <a href="/community" className="cta-button w-full text-center">
              🏘️ Community Features
            </a>
          </div>
          <div className="text-center">
            <a href="/amenities" className="cta-button w-full text-center">
              🌳 Amenities & Lifestyle
            </a>
          </div>
          <div className="text-center">
            <a href="/smart-home-technology" className="cta-button w-full text-center">
              🏠 Smart Home Tech
            </a>
          </div>
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Floor Plans
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Choose from three stunning two-story home designs, each featuring expansive living spaces, premium finishes, and room for customization
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residence 1792 */}
          <div className="floor-plan-card card-hover relative">
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/bravado/floor-plans/residence-1792.svg"
                  alt="Residence 1792 Floor Plan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1792</h3>
                <p className="price-highlight">From $459,990</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">1,792</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3-4</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Two-story foyer with courtyard entrance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Wide-open great room and well-appointed kitchen
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spacious center island and large walk-in pantry
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Charming dining area with direct patio access
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expansive loft and convenient laundry room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Private primary suite with deluxe bath
              </li>
            </ul>
            
            <a href="/models/residence-1792" className="cta-button w-full text-center">
              View Residence 1792 Details
            </a>
          </div>

          {/* Residence 1943 */}
          <div className="floor-plan-card card-hover relative">
            <div className="most-popular-badge">MOST POPULAR</div>
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/bravado/floor-plans/residence-1943.svg"
                  alt="Residence 1943 Floor Plan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1943</h3>
                <p className="price-highlight">From $469,990</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">1,943</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expansive Primary Suite with luxury amenities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Model Now Open for viewing
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced kitchen with premium appliances
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Flexible living spaces for family activities
              </li>
            </ul>
            
            <a href="/models/residence-1943" className="cta-button w-full text-center">
              View Residence 1943 Details
            </a>
          </div>

          {/* Residence 2119 */}
          <div className="floor-plan-card card-hover relative">
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/bravado/floor-plans/residence-2119.svg"
                  alt="Residence 2119 Floor Plan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 2119</h3>
                <p className="price-highlight">From $479,990</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2,119</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Modeled Downstairs Den for flexible living
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Largest floor plan in the community
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spacious great room perfect for entertaining
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Gourmet kitchen with large island
              </li>
            </ul>
            
            <a href="/models/residence-2119" className="cta-button w-full text-center">
              View Residence 2119 Details
            </a>
          </div>
        </div>
      </div>

      {/* North Las Vegas Location Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          North Las Vegas Location
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">5 Miles to Craig Ranch Regional Park</h3>
            <p className="text-gray-700">World-class recreational facilities, sports fields, and community events at your doorstep</p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🌆</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">15 Miles to Downtown Las Vegas</h3>
            <p className="text-gray-700">Easy access to world-class entertainment, dining, and culture</p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">⛰️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">35 Miles to Mount Charleston</h3>
            <p className="text-gray-700">Alpine escape with skiing, hiking, and 20°F cooler temperatures</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">📍 Parks & Recreation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Craig Ranch Regional Park</li>
              <li>• Centennial Hills Park</li>
              <li>• Aliante Nature Discovery Park</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">🛒 Shopping & Dining</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Target, Walmart, Kohl's</li>
              <li>• Northstar Bar & Grill, Chili's</li>
              <li>• Pier 88 Boiling Seafood & Bar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* VIP Partnership Section */}
      <div className="vip-partnership mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="vip-badge mb-6">
            ⭐ VIP CENTURY COMMUNITIES PARTNERSHIP ⭐
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Elite Builder Relationship = Your Advantage
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's VIP Century Communities partnership delivers exclusive access, priority lot selection, and expert negotiation backed by premier relationships.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Early Phase Access</h3>
              <p className="opacity-90">First access to new phases before public release</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">⚡</div>
              <h3 className="text-xl font-bold mb-3">Priority Treatment</h3>
              <p className="opacity-90">VIP status throughout the entire process</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🎯</div>
              <h3 className="text-xl font-bold mb-3">Expert Negotiation</h3>
              <p className="opacity-90">Premier relationship-backed negotiation power</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="/contact" className="cta-button">
              Learn More About VIP Partnership
            </a>
          </div>
        </div>
      </div>

      {/* Why Work With Dr. Janet Duffy Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Work With Dr. Janet Duffy?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="feature-icon mx-auto">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
            <p className="text-gray-700">I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">📊</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expertise</h3>
            <p className="text-gray-700">I'll show you comparable communities and help you understand true market value—not just what the builder tells you.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
            <p className="text-gray-700">Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Specialist</h3>
            <p className="text-gray-700">Nevada License S.0197614. Deep knowledge of North Las Vegas and the entire metro area.</p>
          </div>
        </div>
      </div>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Explore Bravado?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Call or email Dr. Janet Duffy today for a private tour and expert guidance on your Bravado home purchase
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
            <h3 className="text-xl font-bold mb-3">Bravado North Las Vegas</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            DrJanSells@BravadoHomes.com</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Bravado Sales Office</h3>
            <p>Dr. Janet Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 222-1964<br /><br />
            Model Home Hours<br />
            Monday-Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            © 2025 Bravado | Homes by Dr Janet Duffy. All rights reserved.<br />
            Independent real estate resource. Not affiliated with or endorsed by Century Communities. Dr. Janet Duffy is an independent real estate agent providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
