export default function FloorPlansPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bravado Floor Plans
          </h1>
          <p className="text-2xl mb-4">
            Luxury Two-Story Homes from $459,990
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
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* About Floor Plans Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado Floor Plans
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          From <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—<strong>Bravado</strong> offers exceptional <strong>new homes for sale in North Las Vegas, NV</strong>. This prestigious North Las Vegas community features a luxurious lineup of <strong>two-story homes</strong> with <strong>modern designs</strong>, optional smart home features, and contemporary layouts.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
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
      </div>

      {/* Standard Features Section */}
      <div className="mb-16">
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
      <div className="mb-16">
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
