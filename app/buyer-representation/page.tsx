import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buyer Representation Services | Dr. Janet Duffy | Bravado Homes',
  description: 'Expert buyer representation services for new home construction in North Las Vegas. Dr. Janet Duffy provides independent guidance and advocacy for Century Communities homes at Bravado.',
  keywords: [
    'buyer representation',
    'buyer representation services',
    'buyer representation North Las Vegas',
    'buyer representation specialist',
    'buyer representation expert',
    'buyer advocacy',
    'buyer agent',
    'independent buyer representation',
    'new home construction buyer representation',
    'Century Communities buyer representation',
    'Bravado buyer representation',
    'Dr. Janet Duffy',
    'buyer representation Las Vegas',
    'real estate buyer agent',
    'home buying representation',
    'buyer representation services North Las Vegas',
    '89031 buyer representation',
    'new construction buyer representation',
    'buyer representation expert',
    'professional buyer representation'
  ],
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

export default async function BuyerRepresentationPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
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
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            Nevada License: S.0197614 | {email}
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

      {/* Comprehensive Buyer Representation Benefits Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Benefits of Professional Buyer Representation
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Professional buyer representation</strong> provides numerous benefits that protect your interests and ensure you make informed decisions throughout the home buying process. Unlike working directly with builder sales teams or listing agents, <strong>Dr. Janet Duffy's</strong> independent <strong>buyer representation</strong> ensures your needs, preferences, and financial interests are always prioritized. Understanding these benefits helps you appreciate the value of professional <strong>buyer representation</strong>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Independent Advocacy and Protection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most critical benefit of <strong>buyer representation</strong> is having an independent advocate who works exclusively for your interests. Unlike builder sales agents who represent the builder's interests, <strong>Dr. Janet Duffy</strong> provides independent <strong>buyer representation</strong> that ensures your needs, preferences, and financial interests are always prioritized. This independent advocacy is essential when purchasing new construction homes, where negotiations and contract terms can significantly impact your investment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Buyer representation</strong> ensures you receive honest advice, fair negotiations, and protection throughout the process. <strong>Dr. Janet</strong> reviews all contracts, negotiates favorable terms, and ensures you understand all aspects of the transaction. This protection is particularly valuable in new construction, where complex contracts and builder practices require expert navigation to ensure your interests are protected.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Negotiation and Market Knowledge</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Professional buyer representation</strong> provides expert negotiation skills and market knowledge that benefit you throughout the transaction. <strong>Dr. Janet Duffy</strong> brings deep knowledge of the North Las Vegas market, pricing patterns, and what represents good value in the current market. Her expertise helps you make informed decisions and avoid overpaying or making poor choices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her negotiation skills ensure you receive favorable terms, pricing, and conditions. Whether negotiating purchase price, contract terms, or addressing issues during construction, <strong>Dr. Janet's</strong> <strong>buyer representation</strong> ensures you have professional advocacy that protects your interests. This expert negotiation and market knowledge is invaluable for making informed real estate decisions.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Buyer Representation is Essential in New Construction</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Buyer representation</strong> is particularly important in new construction, where builder sales teams represent the builder's interests, not yours. Without independent <strong>buyer representation</strong>, you may not realize that the sales agent's primary responsibility is to the builder, not to you as the buyer. This can lead to situations where your interests aren't fully protected.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr. Janet Duffy's</strong> independent <strong>buyer representation</strong> ensures your interests are protected throughout the entire process, from initial contract negotiations through final walkthrough and closing. She provides honest advice, fair negotiations, and ongoing advocacy that protects your investment. This independent representation is essential for making one of life's largest investments with confidence and protection.
          </p>
        </div>
      </div>

      {/* Why Choose Dr. Janet Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Janet Duffy for Buyer Representation?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Dr. Janet Duffy</strong> brings unique qualifications and expertise to <strong>buyer representation</strong> that benefit her clients throughout the home buying process. Her combination of specialized knowledge, <strong>Century Communities partnership</strong>, and commitment to client advocacy creates a <strong>buyer representation</strong> experience that's difficult to match in the North Las Vegas market.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Construction Expert</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Specialized expertise in <strong>new home construction</strong> processes and builder practices.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Century Communities VIP Partnership
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Construction process expertise
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Builder relationship knowledge
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Quality control experience
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Dedicated Advocacy</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Independent <strong>buyer representation</strong> that protects your interests exclusively.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Exclusive representation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unbiased guidance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Professional negotiation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Interest protection
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Local Market Knowledge</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Deep expertise in the North Las Vegas real estate market and Bravado community.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                North Las Vegas expertise
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bravado community specialist
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Market trend analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Neighborhood insights
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Value of Expert Buyer Representation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Expert buyer representation</strong> provides value that extends far beyond the transaction itself. <strong>Dr. Janet Duffy's</strong> <strong>buyer representation</strong> services ensure you receive fair treatment, understand all contract terms, and have proper representation during any disputes or issues that arise. This professional advocacy provides peace of mind and protection that's essential when making one of life's largest investments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The combination of specialized <strong>new construction expertise</strong>, independent <strong>buyer representation</strong>, and <strong>Century Communities partnership</strong> creates a unique value proposition for homebuyers. This combination ensures you have expert guidance, professional advocacy, and insider access—all while maintaining your interests as the top priority. This comprehensive <strong>buyer representation</strong> approach provides the best possible experience for homebuyers seeking new construction homes in North Las Vegas.
          </p>
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
