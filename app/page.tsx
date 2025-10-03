export default function Page() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ VIP ACCESS
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado North Las Vegas
      </h1>
          <p className="text-2xl mb-4">
            $459K+ Luxury Homes in Gated Community
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17021234567" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 123-4567
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* About Bravado Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          About Bravado by Century Communities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—<strong>Bravado</strong> offers exceptional <strong>new homes for sale in North Las Vegas, NV</strong>. This prestigious North Las Vegas community features a luxurious lineup of <strong>two-story homes</strong> with <strong>modern designs</strong>, optional smart home features, and contemporary layouts.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>I-15 & Craig Ranch Regional Park</strong> provides easy connectivity to downtown Las Vegas, the Las Vegas Strip, and Mount Charleston.
        </p>
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
                Covered Patio for outdoor living
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Vaulted Entry creating impressive first impression
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Open concept living and dining areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Modern kitchen with island seating
              </li>
            </ul>
            
            <a href="/floor-plans" className="cta-button w-full text-center">
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
            
            <a href="/floor-plans" className="cta-button w-full text-center">
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
            
            <a href="/floor-plans" className="cta-button w-full text-center">
              Learn More About Plan 2119
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
          <a href="tel:+17021234567" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 123-4567</span>
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
            (702) 123-4567</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            DrJanSells@BravadoHomes.com</p>
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
