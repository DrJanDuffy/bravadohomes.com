import Image from 'next/image'
import Link from 'next/link'
import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutListings from '../components/realscout-listings'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services | Dr. Janet Duffy | Bravado Homes North Las Vegas',
  description: 'Expert new home construction and buyer representation services in North Las Vegas. Dr. Janet Duffy provides specialized guidance for Century Communities homes at Bravado.',
  keywords: [
    'new home construction services',
    'buyer representation services',
    'real estate services North Las Vegas',
    'Century Communities expert',
    'new construction specialist',
    'buyer representation specialist',
    'North Las Vegas real estate services',
    'Bravado homes services',
    'Dr. Janet Duffy services',
    'new home construction guidance',
    'buyer advocacy services',
    'real estate consultation',
    'new construction consultation',
    'home buying services',
    '89031 real estate services',
    'Century Communities partner services',
    'new home construction expert',
    'buyer representation expert',
    'North Las Vegas home buying',
    'real estate agent services'
  ],
  openGraph: {
    title: 'Real Estate Services | Dr. Janet Duffy | Bravado Homes North Las Vegas',
    description: 'Expert new home construction and buyer representation services in North Las Vegas. Dr. Janet Duffy provides specialized guidance for Century Communities homes at Bravado.',
    url: 'https://bravadohomes.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bravadohomes.com/services',
  },
}

export default async function ServicesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ FEATURED NEW HOME CONSTRUCTION & BUYER REPRESENTATION ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Expert Real Estate Services
          </h1>
          <p className="text-2xl mb-4">
            Specialized Guidance for North Las Vegas Homebuyers
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy | Century Communities Featured Partner | Nevada License S.0197614
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Real Estate Services
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          As a Featured New Home Construction and Buyer Representation specialist with Century Communities, 
          Dr. Janet Duffy provides unparalleled expertise in helping families navigate the new home construction 
          process while ensuring your interests are always protected.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Home Construction</h3>
            <p className="text-gray-700 mb-6">
              Expert guidance through the entire new construction process. From initial selection to final walkthrough, 
              I ensure you get the best value and quality for your Century Communities home.
            </p>
            <Link href="/new-home-construction" className="cta-button w-full text-center">
              Learn More About New Construction
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Buyer Representation</h3>
            <p className="text-gray-700 mb-6">
              Your dedicated advocate throughout the home buying process. I represent YOUR interests, not the builder's, 
              ensuring you make informed decisions and get the best possible deal.
            </p>
            <Link href="/buyer-representation" className="cta-button w-full text-center">
              Learn About Buyer Representation
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">💰</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Financing & Incentives</h3>
            <p className="text-gray-700 mb-6">
              Access to exclusive financing options and incentives through Century Communities. I'll help you find 
              the best rates and programs to make your dream home affordable.
            </p>
            <Link href="/financing-incentives" className="cta-button w-full text-center">
              Explore Financing Options
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Dr. Janet Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Janet Duffy?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="feature-icon mx-auto">🏆</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
            <p className="text-gray-700">Featured partner with insider access to exclusive deals and early releases.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Local Market Expertise</h3>
            <p className="text-gray-700">Deep knowledge of North Las Vegas market trends and property values.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">⚖️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Unbiased Representation</h3>
            <p className="text-gray-700">I work for YOU, not the builder, ensuring your interests come first.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">📋</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Licensed Professional</h3>
            <p className="text-gray-700">Nevada License S.0197614 with proven track record of success.</p>
          </div>
        </div>
      </div>

      {/* Market Analysis Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Market Analysis Tools
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Current Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Find out what your home is worth in today's North Las Vegas market. 
              Get an instant valuation from Dr. Janet Duffy's RealScout system.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏘️ Available Bravado Homes
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Browse current listings in the Bravado community. Get real-time updates 
              on available homes and pricing.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutListings
                agentEncodedId="QWdlbnQtMjI1MDUw"
                sortOrder="PRICE_LOW"
                listingStatus="For Sale"
                propertyTypes=",SFR,OTHER"
                priceMin="450000"
                priceMax="600000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Service Details Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Real Estate Services for North Las Vegas Homebuyers
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Dr. Janet Duffy</strong> provides comprehensive <strong>real estate services</strong> specifically designed for <strong>North Las Vegas homebuyers</strong> seeking <strong>new construction homes</strong>. As a <strong>Featured New Home Construction and Buyer Representation specialist</strong> with <strong>Century Communities</strong>, Dr. Duffy offers specialized expertise that goes beyond traditional real estate services, providing you with the guidance and advocacy needed to navigate the <strong>new home construction process</strong> successfully.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">New Home Construction Expertise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>New home construction</strong> involves a complex process that requires specialized knowledge and expertise. Dr. Janet Duffy's <strong>new construction services</strong> include comprehensive guidance from initial floor plan selection through final walkthrough and closing. Her expertise ensures you understand construction timelines, quality standards, customization options, and what to expect at each stage of the building process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a <strong>Featured Century Communities Partner</strong>, Dr. Duffy has insider knowledge of <strong>Century Communities'</strong> construction processes, quality standards, and available options. She can help you navigate design center selections, understand upgrade values, coordinate inspections, and ensure your new home meets all quality expectations. This specialized <strong>new construction expertise</strong> is invaluable for homebuyers who want to make informed decisions throughout the building process.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Buyer Representation and Advocacy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Buyer representation</strong> is a critical service that protects your interests throughout the home buying process. Unlike builder sales agents who represent the builder's interests, <strong>Dr. Janet Duffy</strong> provides independent <strong>buyer representation</strong> that ensures your needs, preferences, and financial interests are always prioritized. This independent representation is essential when purchasing <strong>new construction homes</strong>, where negotiations and contract terms can significantly impact your investment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dr. Duffy's <strong>buyer representation services</strong> include contract review, negotiation support, inspection coordination, and ongoing advocacy throughout construction and closing. She ensures you receive fair treatment, understand all contract terms, and have proper representation during any disputes or issues that arise. This <strong>buyer advocacy</strong> provides peace of mind and protection that's essential when making one of life's largest investments.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Specialized New Construction Services?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>New home construction</strong> differs significantly from purchasing existing homes, requiring specialized knowledge of construction processes, builder practices, and quality standards. <strong>Dr. Janet Duffy's</strong> specialized <strong>new construction services</strong> provide the expertise needed to navigate these unique challenges successfully. Her partnership with <strong>Century Communities</strong> gives her insider knowledge of construction timelines, quality standards, and available options that benefit her clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Additionally, <strong>buyer representation</strong> is particularly important in new construction, where builder sales teams represent the builder's interests. Dr. Duffy's independent <strong>buyer representation</strong> ensures your interests are protected throughout the process, from initial contract negotiations through final walkthrough. This combination of specialized <strong>new construction expertise</strong> and independent <strong>buyer advocacy</strong> creates the best possible experience for homebuyers seeking <strong>new construction homes in North Las Vegas</strong>.
          </p>
        </div>
      </div>

      {/* Service Process Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          The Home Buying Process with Dr. Janet Duffy
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Understanding the <strong>new home construction process</strong> helps you know what to expect when working with <strong>Dr. Janet Duffy</strong>. Her comprehensive <strong>real estate services</strong> guide you through each stage, ensuring you're informed, protected, and confident in your decisions throughout your home buying journey.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Initial Consultation and Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your journey begins with an initial consultation where <strong>Dr. Janet Duffy</strong> helps you understand your needs, preferences, and budget. She'll discuss available floor plans, customization options, construction timelines, and financing considerations. This consultation provides the foundation for making informed decisions throughout the process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              During this phase, Dr. Duffy provides market insights, helps you understand the <strong>new construction process</strong>, and begins developing a strategy that aligns with your goals. Her <strong>buyer representation</strong> services ensure your interests are protected from the very beginning, and her <strong>Century Communities partnership</strong> provides access to exclusive information and opportunities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Home Selection and Customization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you've identified your preferred floor plan, <strong>Dr. Janet Duffy</strong> guides you through lot selection, customization options, and upgrade decisions. Her expertise helps you understand which customizations add value and which are primarily for personal enjoyment, ensuring you make smart investment choices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her <strong>new construction expertise</strong> ensures you understand construction timelines, availability, and customization deadlines. She provides honest guidance about upgrade values, helps you stay within budget, and ensures your selections align with your long-term goals. This personalized guidance is one of the key benefits of working with a <strong>Featured Century Communities Partner</strong>.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Construction and Closing Support</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Throughout construction, <strong>Dr. Janet Duffy</strong> remains your advocate, coordinating inspections, addressing concerns, and ensuring quality standards are met. Her <strong>buyer representation</strong> services ensure you're informed about construction progress and have proper representation during walkthroughs and inspections.
            </p>
            <p className="text-gray-700 leading-relaxed">
              During closing, Dr. Duffy guides you through the final paperwork, ensures all terms are honored, and provides ongoing support as you settle into your new home. Her comprehensive <strong>real estate services</strong> extend beyond closing, as she remains available to answer questions and provide referrals for any post-closing needs you may have.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Home Buying Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on your North Las Vegas home purchase
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
            <h3 className="text-xl font-bold mb-3">Service Hours</h3>
            <p>Monday-Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: By Appointment</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Janet Duffy is a Featured New Home Construction and Buyer Representation specialist with Century Communities. 
            Nevada License S.0197614. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
