import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Bravado Homes Las Vegas Floor Plans | Century Communities | Now Selling $459,790+',
    description: 'Bravado Homes Las Vegas floor plans - 3 two-story floor plans available starting at $459,790. View Residence 1792, 1943, and 2119 floor plans with 3-5 bedrooms, smart tech included. Expert guidance from Dr. Janet Duffy, Featured Century Communities Partner.',
    keywords: [
      'bravado homes las vegas floor plans',
      'bravado floor plans',
      'bravado homes floor plans',
      'century communities bravado floor plans',
      'bravado las vegas floor plans',
      'new construction floor plans las vegas',
      'two-story floor plans north las vegas',
      agent?.name || 'Dr. Janet Duffy',
      'residence 1792',
      'residence 1943',
      'residence 2119',
      'bravado homes for sale',
      'starting at $459,790',
    ],
    alternates: {
      canonical: `${baseUrl}/floor-plans`,
    },
    openGraph: {
      title: 'Bravado Homes Las Vegas Floor Plans | Century Communities',
      description: 'Bravado Homes Las Vegas floor plans - 3 two-story floor plans available starting at $459,790. View all floor plans with expert guidance from Dr. Janet Duffy.',
      url: `${baseUrl}/floor-plans`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bravado Homes Las Vegas Floor Plans',
      description: 'View 3 two-story floor plans at Bravado Homes Las Vegas starting at $459,790.',
    },
  }
}

export default async function FloorPlansPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ LIMITED TIME: 3 FLOOR PLANS REMAINING ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado Homes Las Vegas Floor Plans
          </h1>
          <p className="text-2xl mb-4">
            Now Selling! Luxury Two-Story Homes Starting at $459,790
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Janet
            </a>
            <a href="#floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 View Floor Plans
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">🚨 ACT FAST - LIMITED AVAILABILITY!</h2>
        <p className="text-lg mb-4">
          <strong>Only 3 floor plans left at Bravado!</strong> These luxury homes are selling out fast. 
          Get your VIP tour with Dr. Janet Duffy before they're gone forever.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            📞 SECURE YOUR HOME: (702) 500-1955
          </a>
          <a href="#floor-plans" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
            👀 VIEW FLOOR PLANS NOW
          </a>
        </div>
      </div>

      {/* Floor Plans Section - Move up for immediate engagement */}
      <div id="floor-plans" className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Floor Plans - Now Selling!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Limited Availability!</strong> Choose from <strong>3 two-story floor plans</strong> with <strong>3 to 5 bedrooms</strong> and up to <strong>2,119 sq. ft.</strong> Each home features <strong>expansive living spaces</strong>, <strong>premium finishes</strong>, and <strong>smart tech included</strong> with the Century Connect® package.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residence 1792 */}
          <div className="floor-plan-card card-hover relative">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1792</h3>
              <p className="price-highlight">From $459,990</p>
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
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 1792
            </a>
          </div>

          {/* Residence 1943 */}
          <div className="floor-plan-card card-hover relative">
            <div className="most-popular-badge">MOST POPULAR</div>
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1943</h3>
              <p className="price-highlight">From $469,990</p>
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
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 1943
            </a>
          </div>

          {/* Residence 2119 */}
          <div className="floor-plan-card card-hover relative">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 2119</h3>
              <p className="price-highlight">From $479,990</p>
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
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 2119
            </a>
          </div>
        </div>

        {/* Urgent CTA after floor plans */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">⚡ ACT NOW - LIMITED TIME OFFER!</h3>
          <p className="text-lg mb-6">
            Get VIP access to Bravado floor plans with Dr. Janet Duffy's expert guidance. 
            <strong> Schedule your private tour today!</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 CALL NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg">
              📧 EMAIL DR. JANET
            </a>
          </div>
        </div>
      </div>

      {/* About Floor Plans Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado Floor Plans
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          <strong>Dr. Janet Duffy</strong>, Featured New Home Construction & Buyer Representation Specialist, represents <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—at <strong>Bravado</strong>, offering exceptional <strong>new homes for sale in North Las Vegas, NV</strong>. This prestigious North Las Vegas community features a luxurious lineup of <strong>two-story homes</strong> with <strong>modern designs</strong>, optional smart home features, and contemporary layouts.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>I-15 & Craig Ranch Regional Park</strong> provides easy connectivity to downtown Las Vegas, the Las Vegas Strip, and Mount Charleston.
        </p>
      </div>

      {/* RealScout Available Homes Section - Move down for secondary engagement */}
      <div id="available-homes" className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              🏠 Available Homes in Bravado
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              See real-time availability, pricing, and move-in dates for Bravado homes. 
              Get instant alerts when new homes become available.
            </p>
            
            {/* RealScout Available Homes Widget */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏡 Quick Move-In Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Browse homes that are move-in ready or nearing completion. 
                    Perfect for buyers who want to move quickly.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
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
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏗️ New Construction Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Explore homes currently under construction with estimated 
                    completion dates and customization options.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <RealScoutListings
                      agentEncodedId="QWdlbnQtMjI1MDUw"
                      sortOrder="PRICE_LOW"
                      listingStatus="For Sale"
                      propertyTypes=",SFR,OTHER"
                      priceMin="450000"
                      priceMax="750000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Home Status Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-bold text-gray-900 mb-2">Move-In Ready</h4>
                <p className="text-sm text-gray-700">Homes completed and ready for immediate occupancy</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-bold text-gray-900 mb-2">Coming Soon</h4>
                <p className="text-sm text-gray-700">Homes nearing completion with estimated move-in dates</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold text-gray-900 mb-2">Under Construction</h4>
                <p className="text-sm text-gray-700">Customizable homes with construction timelines</p>
              </div>
            </div>

            {/* Advanced Search Widget */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                🔍 Advanced Floor Plan Search
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Looking for something specific? Use our advanced search to find homes with 
                exact features, square footage, bedrooms, and more in North Las Vegas.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="text-center">
              <a href="/contact" className="cta-button inline-block">
                Get Notified When New Homes Become Available
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Features Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Standard Features in Every Bravado Home
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Century Connect® Smart Home Technology</h3>
            <p className="mb-6 text-gray-700 leading-relaxed text-center">
              Every Bravado home comes equipped with Century Connect®, bringing smart home 
              convenience to your fingertips. Control your thermostat, lighting, security 
              system, and more from anywhere using your smartphone or tablet.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart thermostat with energy monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Integrated security system
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart lighting controls
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Mobile app integration
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Premium Finishes & Materials</h3>
            <p className="mb-6 text-gray-700 leading-relaxed text-center">
              Bravado homes feature carefully selected finishes and materials that combine 
              durability with aesthetic appeal. Every detail has been chosen to enhance your 
              daily living experience and provide lasting value.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Energy-efficient appliances
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Premium countertop options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Quality flooring throughout
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Modern lighting fixtures
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customization Options Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Customization Options & Upgrades
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Make your Bravado home uniquely yours with a variety of customization options 
          and upgrades available through Century Communities. From kitchen cabinet colors 
          to flooring selections, you can personalize your home to match your style and 
          preferences while staying within your budget.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🍳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kitchen Options</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                White or dark cabinet finishes
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Granite or quartz countertops
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Stainless steel appliances
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Kitchen island upgrades
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flooring Selections</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Luxury vinyl plank flooring
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Carpet upgrades
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Tile options for wet areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Hardwood alternatives
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Covered patio extensions
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Landscaping packages
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Outdoor kitchen prep areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Enhanced lighting
              </li>
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
        </div>
      </div>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Find Your Perfect Floor Plan?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Call or email Dr. Janet Duffy today for a private tour and expert guidance on your Bravado floor plan selection
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
            <h3 className="text-xl font-bold mb-3">Bravado North Las Vegas</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Century Communities</h3>
            <p>One of America's Top 10 Homebuilders<br /><br />
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
  )
}
