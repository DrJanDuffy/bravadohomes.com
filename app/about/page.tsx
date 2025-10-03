import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Janet Duffy - Century Communities Expert | Bravado Homes',
  description: 'Meet Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities. Expert guidance for Bravado homes in North Las Vegas with Nevada License S.0197614.',
  keywords: [
    'Dr. Janet Duffy',
    'Century Communities expert',
    'new home construction specialist',
    'buyer representation',
    'North Las Vegas real estate',
    'Nevada real estate license',
    'Bravado homes expert',
    '89031 real estate agent'
  ],
  openGraph: {
    title: 'About Dr. Janet Duffy - Century Communities Expert',
    description: 'Meet Dr. Janet Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities. Expert guidance for Bravado homes.',
    type: 'profile',
    images: [
      {
        url: '/images/bravado/about/dr-janet-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Janet Duffy - Century Communities Expert',
      },
    ],
  },
  alternates: {
    canonical: 'https://bravadohomes.com/about',
  },
}

export default function AboutPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Dr. Janet Duffy
          </h1>
          <p className="text-2xl mb-4">
            Featured New Home Construction & Buyer Representation Specialist
          </p>
          <p className="text-xl mb-8 opacity-90">
            Century Communities Partnership | Las Vegas Real Estate Expert
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            Nevada License: S.0197614 | DrJanSells@BravadoHomes.com
          </p>
        </div>
      </div>

      {/* About Dr. Janet Duffy Section */}
      <div className="content-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Meet Dr. Janet Duffy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Janet Duffy</strong> is a distinguished real estate professional specializing in new home construction and buyer representation in the Las Vegas area. With her <strong>VIP partnership with Century Communities</strong>, she provides unparalleled expertise and exclusive access to premier communities like Bravado in North Las Vegas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, Dr. Duffy brings a unique perspective to real estate, combining her professional background with deep market knowledge and builder relationships. Her clients benefit from her insider access to Century Communities' latest developments, priority lot selection, and exclusive incentives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Duffy's approach is centered on being your <strong>trusted advisor</strong>, not just another sales agent. She represents your interests throughout the entire new home construction process, from initial consultation through closing and beyond.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Professional Credentials</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Nevada Real Estate License</h4>
                <p className="text-gray-700">License #S.0197614</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Specialization</h4>
                <p className="text-gray-700">New Home Construction & Buyer Representation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Century Communities Partnership</h4>
                <p className="text-gray-700">Featured Partner with VIP Access</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Market Focus</h4>
                <p className="text-gray-700">North Las Vegas & Greater Las Vegas Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Dr. Janet Duffy's Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Home Construction</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Century Communities VIP Partnership</li>
              <li>• Priority lot selection access</li>
              <li>• Construction timeline expertise</li>
              <li>• Builder negotiation experience</li>
              <li>• Quality control and inspections</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Buyer Representation</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Independent buyer advocacy</li>
              <li>• Market analysis and pricing</li>
              <li>• Contract negotiation</li>
              <li>• Inspection coordination</li>
              <li>• Closing process guidance</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Local Market Knowledge</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• North Las Vegas expertise</li>
              <li>• Bravado community specialist</li>
              <li>• Market trends and analysis</li>
              <li>• Neighborhood insights</li>
              <li>• Investment opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Century Communities Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            VIP Century Communities Partnership
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's exclusive partnership with Century Communities provides unique advantages for her clients
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Priority Access</h3>
              <p className="opacity-90">Early access to new releases and priority lot selection in premier communities</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Exclusive Incentives</h3>
              <p className="opacity-90">Access to builder incentives and promotional offers not available to the general public</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Insider Knowledge</h3>
              <p className="opacity-90">Deep understanding of Century Communities' processes, timelines, and quality standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Benefits Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Work With Dr. Janet Duffy?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Your Trusted Advisor</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Independent representation - not the builder's sales agent
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Unbiased guidance and honest market insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Protection of your interests throughout the process
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Professional negotiation on your behalf
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Service</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Specialized knowledge in new construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Century Communities partnership benefits
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Local market expertise and insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Ongoing support beyond closing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RealScout Tools Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          🏠 Advanced Property Tools
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
          Dr. Janet Duffy provides access to <strong>advanced RealScout technology</strong> for comprehensive market analysis and property search
        </p>
          
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Property Valuation</h3>
            <p className="text-gray-700 mb-4">
              Get instant property valuations with Dr. Janet Duffy's RealScout system
            </p>
            <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
            <p className="text-gray-700 mb-4">
              Use powerful search tools to find your perfect home
            </p>
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Work With Dr. Janet Duffy?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on your new home construction or real estate needs
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
