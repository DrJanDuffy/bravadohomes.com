import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buyer Representation Services | Dr. Janet Duffy | Bravado Homes',
  description: 'Expert buyer representation services for new home construction in North Las Vegas. Dr. Janet Duffy provides independent guidance and advocacy for Century Communities homes at Bravado.',
  keywords: 'buyer representation, new home construction, real estate agent, North Las Vegas, Bravado, Century Communities, Dr. Janet Duffy',
  openGraph: {
    title: 'Buyer Representation Services | Dr. Janet Duffy | Bravado Homes',
    description: 'Expert buyer representation services for new home construction in North Las Vegas. Dr. Janet Duffy provides independent guidance and advocacy.',
    url: 'https://bravadohomes.com/buyer-representation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bravadohomes.com/buyer-representation',
  },
}

export default function BuyerRepresentationPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Buyer Representation Services
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
            <a href="mailto:DrDuffySellls@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            Nevada License: S.0197614 | DrDuffySellls@BravadoHomes.com
          </p>
        </div>
      </div>

      {/* Buyer Representation Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What is Buyer Representation?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Buyer representation</strong> means having a dedicated real estate professional who works exclusively for you, not the seller or builder. <strong>Dr. Janet Duffy</strong> serves as your trusted advisor, advocate, and negotiator throughout the entire home buying process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike working directly with builder sales agents or listing agents, Dr. Duffy provides unbiased guidance, protects your interests, and ensures you make informed decisions. Her expertise in new home construction and Century Communities partnership gives you access to exclusive opportunities while maintaining your best interests as the priority.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, Dr. Duffy brings specialized knowledge of the construction process, builder relationships, and market conditions to provide you with comprehensive representation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why You Need Buyer Representation</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Unbiased Guidance</h4>
                <p className="text-gray-700">Independent advice not influenced by builder or seller interests</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Expert Negotiation</h4>
                <p className="text-gray-700">Professional negotiation on price, terms, and conditions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Market Knowledge</h4>
                <p className="text-gray-700">Deep understanding of local market conditions and pricing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Process Protection</h4>
                <p className="text-gray-700">Ensuring your interests are protected throughout the transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dr. Janet Duffy's Buyer Representation Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Dr. Janet Duffy's Buyer Representation Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Pre-Purchase Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Needs assessment and budget analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Market research and property evaluation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Community and neighborhood analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Financing guidance and lender referrals
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Property search and scheduling
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Purchase Process Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Contract negotiation and review
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Inspection coordination and review
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Appraisal coordination and management
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Title and escrow coordination
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Closing process management
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Century Communities Partnership Benefits */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            VIP Century Communities Partnership Benefits
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's exclusive partnership provides unique advantages while maintaining your best interests
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

      {/* Available Properties */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Properties with Buyer Representation
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current properties available in Bravado and throughout North Las Vegas. 
            Get expert buyer representation and guidance on pricing, negotiations, and market conditions.
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

      {/* Why Choose Dr. Janet Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Janet Duffy for Buyer Representation?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Construction Expert</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Century Communities VIP Partnership</li>
              <li>Construction process expertise</li>
              <li>Builder relationship knowledge</li>
              <li>Quality control experience</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Dedicated Advocacy</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Exclusive representation</li>
              <li>Unbiased guidance</li>
              <li>Professional negotiation</li>
              <li>Interest protection</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Local Market Knowledge</h3>
            <ul className="text-gray-700 space-y-2">
              <li>North Las Vegas expertise</li>
              <li>Bravado community specialist</li>
              <li>Market trend analysis</li>
              <li>Neighborhood insights</li>
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
                Get instant property valuations with professional buyer representation
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for properties with expert buyer representation guidance
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready for Expert Buyer Representation?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for professional buyer representation services
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href="mailto:DrDuffySellls@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            EMAIL<br />
            DrDuffySellls@BravadoHomes.com
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
            DrDuffySellls@BravadoHomes.com</p>
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
