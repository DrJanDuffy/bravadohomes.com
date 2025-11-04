import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function NewHomeConstructionPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            New Home Construction in North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <p className="text-xl mb-8 opacity-90">
            Featured New Home Construction & Buyer Representation Specialist
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* New Home Construction Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              New Home Construction Expertise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Janet Duffy</strong> specializes in new home construction and buyer representation, bringing her VIP partnership with <strong>Century Communities</strong> to provide you with exclusive access to premier communities like Bravado in North Las Vegas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, Dr. Duffy offers comprehensive guidance throughout the entire new home construction process. From initial consultation and lot selection to final walkthrough and closing, she ensures your interests are protected every step of the way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike working directly with builder sales agents, Dr. Duffy represents your interests exclusively, providing unbiased guidance, expert negotiation, and insider access to Century Communities' latest developments and exclusive incentives.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why Choose New Construction?</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Modern Features & Technology</h4>
                <p className="text-gray-700">Latest smart home technology, energy-efficient systems, and contemporary design</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Customization Options</h4>
                <p className="text-gray-700">Personalize your home with finishes, fixtures, and layout options</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Warranty Protection</h4>
                <p className="text-gray-700">Comprehensive builder warranty and new home guarantees</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Energy Efficiency</h4>
                <p className="text-gray-700">Lower utility bills with modern insulation, HVAC, and appliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Century Communities Partnership */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            VIP Century Communities Partnership Benefits
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's exclusive partnership provides unique advantages for new home buyers
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Priority Access</h3>
              <p className="opacity-90">Early access to new releases and priority lot selection</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Exclusive Incentives</h3>
              <p className="opacity-90">Access to builder incentives and promotional offers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Insider Knowledge</h3>
              <p className="opacity-90">Deep understanding of construction processes and timelines</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">Builder Relationships</h3>
              <p className="opacity-90">Established relationships for smoother transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Construction Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          New Home Construction Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Initial Consultation & Planning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Needs assessment and budget planning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Community and lot selection guidance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Floor plan selection and customization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Financing options and pre-approval
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Construction & Completion</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Construction timeline monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Quality control and inspections
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Final walkthrough coordination
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Closing process and documentation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available New Construction Homes */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available New Construction Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current new construction homes available in Bravado and throughout North Las Vegas. 
            Get expert guidance on pricing, availability, and customization options.
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

      {/* Smart Home Technology Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Connect® Smart Home Technology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Home Control</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Smart thermostat control</li>
              <li>Lighting automation</li>
              <li>Door lock management</li>
              <li>Security system integration</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Energy Efficiency</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Energy monitoring systems</li>
              <li>Smart appliance controls</li>
              <li>Solar-ready construction</li>
              <li>LED lighting throughout</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Home Automation</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Voice assistant integration</li>
              <li>Remote monitoring</li>
              <li>Automated scheduling</li>
              <li>Mobile app control</li>
            </ul>
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
                Get instant property valuations for new construction homes
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for new construction homes with advanced filters
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your New Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on your new home construction project
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
