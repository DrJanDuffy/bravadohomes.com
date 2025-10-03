import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'

export default function SmartHomeTechnologyPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Century Connect® Smart Home Technology
          </h1>
          <p className="text-2xl mb-4">
            Advanced Smart Home Features in Every Bravado Home
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
              🏠 Schedule Demo
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Smart Home Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What is Century Connect® Smart Home Technology?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Century Connect®</strong> is Century Communities' innovative smart home technology platform that comes standard in every Bravado home. This advanced system integrates multiple smart devices and features to create a connected, efficient, and secure living environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From <strong>smart thermostats</strong> and <strong>automated lighting</strong> to <strong>security systems</strong> and <strong>energy monitoring</strong>, Century Connect® provides you with complete control over your home's comfort, security, and energy efficiency.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Janet Duffy</strong>, as a Featured New Home Construction & Buyer Representation Specialist, can provide expert guidance on all Century Connect® features and help you understand how this technology enhances your daily living experience.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Smart Home Features</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Smart Thermostat</h4>
                <p className="text-gray-700">Energy-efficient temperature control with mobile app</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Smart Lighting</h4>
                <p className="text-gray-700">Automated lighting control and scheduling</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Smart Locks</h4>
                <p className="text-gray-700">Keyless entry and remote access control</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Energy Monitoring</h4>
                <p className="text-gray-700">Real-time energy usage tracking and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Home Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Connect® Smart Home Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Climate Control & Energy Efficiency</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart thermostat with mobile app control
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Energy monitoring and usage tracking
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Automated temperature scheduling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Energy-efficient HVAC optimization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Remote temperature adjustment
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Lighting & Automation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart lighting control system
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Automated lighting schedules
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Voice assistant integration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Remote lighting control
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                LED lighting throughout
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Access Control */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Security & Access Control
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Door Locks</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Keyless entry system</li>
              <li>• Mobile app access control</li>
              <li>• Guest access codes</li>
              <li>• Activity monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile App Control</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Remote home management</li>
              <li>• Real-time notifications</li>
              <li>• User-friendly interface</li>
              <li>• Multiple device support</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Home Security</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Integrated security system</li>
              <li>• Door and window sensors</li>
              <li>• Motion detection alerts</li>
              <li>• Professional monitoring ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Energy Efficiency & Cost Savings */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Energy Efficiency & Cost Savings
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Century Connect® smart home technology helps reduce energy costs and environmental impact
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Lower Energy Bills</h3>
              <p className="opacity-90">Smart thermostats and lighting reduce energy consumption</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🌱</div>
              <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
              <p className="opacity-90">Reduced energy usage for a more sustainable lifestyle</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">📊</div>
              <h3 className="text-xl font-bold mb-3">Usage Monitoring</h3>
              <p className="opacity-90">Real-time energy tracking and optimization insights</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Smart Optimization</h3>
              <p className="opacity-90">Automated systems work together for maximum efficiency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Assistant Integration */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Voice Assistant Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Voice Control Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                "Hey Google" and "Alexa" integration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Voice-controlled lighting and temperature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Hands-free home automation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Custom voice commands and routines
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Home Routines</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                "Good Morning" routine activation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                "Good Night" automation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Custom scene creation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Scheduled automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Smart Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Smart Homes at Bravado
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current homes available at Bravado with Century Connect® smart home technology included. 
            Experience the future of home living today.
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
            Why Choose Dr. Janet Duffy for Smart Home Technology?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on Century Connect® smart home technology with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Technology Expert</h3>
              <p className="opacity-90">Deep understanding of Century Connect® features and benefits</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities technology and support</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate for understanding all smart home features</p>
            </div>
          </div>
        </div>
      </div>

      {/* RealScout Tools Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Advanced Property Tools
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Use Dr. Janet Duffy's advanced RealScout tools for comprehensive market analysis and property search
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Property Valuation</h3>
              <p className="text-gray-700 mb-4">
                Get instant property valuations for smart homes
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for smart homes with advanced features
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Smart Home Living?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for a smart home demonstration and expert guidance
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
