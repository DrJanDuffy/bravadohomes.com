import OptimizedImage, { FALLBACK_IMAGES } from './components/optimized-image'
import RealScoutListings from './components/realscout-listings'
import RealScoutHomeValue from './components/realscout-home-value'
import RealScoutAdvancedSearch from './components/realscout-advanced-search'
import RealScoutSimpleSearch from './components/realscout-simple-search'
import SchemaMarkup from './components/schema'
import PhotoGallery from './components/photo-gallery'
import KCMRSSFeed from './components/kcm-rss-feed'

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Bravado Community Exterior - Luxury New Homes in North Las Vegas"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
            fallbackSrc={FALLBACK_IMAGES.exterior}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="vip-badge">
            ⭐ VIP ACCESS
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Bravado North Las Vegas Luxury Homes
          </h1>
          <p className="text-2xl mb-4 text-white drop-shadow-md font-semibold">
            Now Selling! Starting at $459,790 - Luxury Homes in Gated Community
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
            <a href="/services" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏗️ View Services
            </a>
          </div>
          <p className="text-lg text-white drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm inline-block">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Quick Property Search */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          🔍 Find Your Dream Home in North Las Vegas
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
          Start your search for the perfect home in <strong>Bravado</strong> or throughout North Las Vegas. 
          Get expert guidance from <strong>Dr. Janet Duffy</strong>.
        </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Property Search</h3>
              <p className="text-white mb-6 opacity-90">Enter your criteria to find available homes</p>
              <div className="max-w-2xl mx-auto">
                <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏡</div>
                <h4 className="font-bold text-gray-900 mb-2">Bravado Homes</h4>
                <p className="text-sm text-gray-700">New construction homes starting at $459K</p>
                <a href="/floor-plans" className="text-blue-600 font-medium hover:underline">View Floor Plans</a>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold text-gray-900 mb-2">New Construction</h4>
                <p className="text-sm text-gray-700">Expert guidance through the build process</p>
                <a href="/services" className="text-blue-600 font-medium hover:underline">Learn More</a>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Market Value</h4>
                <p className="text-sm text-gray-700">Get instant home valuations</p>
                <a href="/services" className="text-blue-600 font-medium hover:underline">Get Valuation</a>
              </div>
            </div>

            <div className="text-center">
              <a href="/services" className="cta-button inline-block">
                Explore All Services & Tools
              </a>
            </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Bravado Community Gallery
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
          Explore the stunning homes and beautiful community at <strong>Bravado</strong>. From modern exteriors to luxurious interiors, 
          discover why Bravado is the perfect place to call home in North Las Vegas.
        </p>
        <PhotoGallery />
      </div>

      {/* About Bravado Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado by Century Communities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          <strong>Dr. Janet Duffy</strong>, Featured New Home Construction & Buyer Representation Specialist, is proud to represent <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—at <strong>Bravado in North Las Vegas, NV</strong>. This prestigious gated community showcases stunning two-story floor plans ranging from 1,792 to 2,119 square feet, featuring up to 5 bedrooms and contemporary open layouts. Each home includes the innovative <strong>Century Connect® smart home package</strong>, modern design elements, and premium finishes that define luxury living in the 89031 zip code.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Strategically located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado offers unparalleled access to <strong>Craig Ranch Regional Park</strong>—North Las Vegas' premier recreational destination featuring 170 acres of trails, sports fields, and community amenities. Residents enjoy convenient proximity to <strong>Aliante Casino + Hotel</strong>, <strong>Las Vegas Premium Outlets North</strong>, and <strong>I-15 access</strong> for easy commuting to downtown Las Vegas, McCarran International Airport, and the Las Vegas Strip.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          This master-planned community represents the pinnacle of North Las Vegas living, combining the tranquility of suburban life with the excitement of nearby attractions including <strong>Topgolf Las Vegas</strong>, <strong>M Resort Spa Casino</strong>, world-class golf courses, and convenient access to <strong>Nellis AFB</strong>. Bravado's location in the heart of North Las Vegas's fastest-growing corridor ensures strong property values and exceptional lifestyle amenities for discerning homebuyers.
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
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Floor Plans
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Now Selling!</strong> Choose from <strong>3 two-story floor plans</strong> with <strong>3 to 5 bedrooms</strong> and up to <strong>2,119 sq. ft.</strong> Each home features <strong>expansive living spaces</strong>, <strong>premium finishes</strong>, and <strong>smart tech included</strong> with the Century Connect® package.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residence 1792 */}
          <div className="floor-plan-card card-hover relative">
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 1792 - Modern Contemporary Two-Story Home with Premium Features"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1792</h3>
                    <p className="price-highlight">From $459,790</p>
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
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 1943 - Spanish Mission Style Two-Story Home with Luxury Amenities"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1943</h3>
                    <p className="price-highlight">From $469,790</p>
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
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 2119 - Mediterranean Style Luxury Two-Story Home with Smart Features"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 2119</h3>
                    <p className="price-highlight">From $479,790</p>
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
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Work With Dr. Janet Duffy?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
            <p className="text-gray-700 leading-relaxed">I work directly with Century Communities to give you insider access while representing <strong>YOUR interests</strong>, not theirs.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expertise</h3>
            <p className="text-gray-700 leading-relaxed">I'll show you comparable communities and help you understand <strong>true market value</strong>—not just what the builder tells you.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
            <p className="text-gray-700 leading-relaxed">Even with new construction, there's room to negotiate. I know how to <strong>maximize your leverage</strong> and protect your interests.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Specialist</h3>
            <p className="text-gray-700 leading-relaxed"><strong>Nevada License S.0197614</strong>. Deep knowledge of North Las Vegas and the entire metro area.</p>
          </div>
        </div>
      </div>

      {/* Market Insights Section */}
      <div className="mb-16">
        <KCMRSSFeed />
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
