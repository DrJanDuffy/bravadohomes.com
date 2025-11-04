import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financing & Incentives | Bravado Homes | Dr. Janet Duffy',
  description: 'Explore exclusive financing options and builder incentives for Bravado new construction homes in North Las Vegas. Expert guidance from Dr. Janet Duffy, Century Communities Featured Partner.',
  keywords: 'financing incentives, new home financing, builder incentives, Century Communities, Bravado, North Las Vegas, Dr. Janet Duffy',
  openGraph: {
    title: 'Financing & Incentives | Bravado Homes | Dr. Janet Duffy',
    description: 'Explore exclusive financing options and builder incentives for Bravado new construction homes in North Las Vegas.',
    url: 'https://bravadohomes.com/financing-incentives',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bravadohomes.com/financing-incentives',
  },
}

export default async function FinancingIncentivesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Financing & Incentives
          </h1>
          <p className="text-2xl mb-4">
            Exclusive Financing Options & Builder Incentives
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              💰 Get Pre-Approved
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Financing Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Financing Your Bravado Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Janet Duffy</strong> works with Century Communities and preferred lenders to provide you with the best financing options for your new Bravado home. As a Featured New Home Construction & Buyer Representation Specialist, she ensures you have access to exclusive rates and incentives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From <strong>conventional loans</strong> and <strong>FHA financing</strong> to <strong>VA loans</strong> and <strong>jumbo mortgages</strong>, Dr. Duffy can connect you with lenders who specialize in new construction financing and understand the unique needs of Century Communities buyers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado offers competitive pricing and financing options that make luxury living accessible to qualified buyers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Financing Options</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Conventional Loans</h4>
                <p className="text-gray-700">Traditional financing with competitive rates and terms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">FHA Loans</h4>
                <p className="text-gray-700">Low down payment options for qualified buyers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">VA Loans</h4>
                <p className="text-gray-700">Special financing for veterans and active military</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Jumbo Loans</h4>
                <p className="text-gray-700">Higher loan amounts for luxury properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Builder Incentives Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Exclusive Builder Incentives
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's VIP Century Communities partnership provides access to exclusive incentives and promotional offers
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Closing Cost Credits</h3>
              <p className="opacity-90">Reduced closing costs and fees for qualified buyers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏠</div>
              <h3 className="text-xl font-bold mb-3">Upgrade Credits</h3>
              <p className="opacity-90">Free upgrades and premium finishes included</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🎯</div>
              <h3 className="text-xl font-bold mb-3">Rate Buydowns</h3>
              <p className="opacity-90">Temporary or permanent interest rate reductions</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Limited Time Offers</h3>
              <p className="opacity-90">Seasonal promotions and special incentives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Programs Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Available Financing Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">First-Time Buyer Programs</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Down payment assistance programs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Low down payment options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Educational resources and guidance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Simplified application process
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Investment Property Financing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Investment property loan programs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Rental income consideration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Portfolio loan options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Cash-out refinancing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pre-Approval Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Getting Pre-Approved
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Documentation</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Income verification</li>
              <li>• Bank statements</li>
              <li>• Credit report</li>
              <li>• Employment history</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Credit Review</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Credit score analysis</li>
              <li>• Debt-to-income ratio</li>
              <li>• Payment history review</li>
              <li>• Credit improvement tips</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Pre-Approval</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Loan amount determination</li>
              <li>• Interest rate lock</li>
              <li>• Pre-approval letter</li>
              <li>• Shopping power</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Homes with Financing Options
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current homes available at Bravado with various financing options. 
            Get expert guidance on financing and incentives from Dr. Janet Duffy.
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
            Why Choose Dr. Janet Duffy for Financing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on financing options and builder incentives with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Financing Expert</h3>
              <p className="opacity-90">Specialized knowledge of new construction financing options</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities incentives and offers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate for securing the best financing terms</p>
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
                Get instant property valuations to understand your financing needs
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for properties within your financing range
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Secure Your Financing?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on financing options and builder incentives
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href="mailto:${email}" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
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
