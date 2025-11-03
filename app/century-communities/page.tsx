import Image from 'next/image'
import Link from 'next/link'
import RealScoutListings from '../components/realscout-listings'
import RealScoutHomeValue from '../components/realscout-home-value'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Century Communities North Las Vegas | Bravado New Homes | Dr. Janet Duffy',
  description: 'Explore Century Communities new construction homes in North Las Vegas. Featured partner Dr. Janet Duffy provides expert guidance for Bravado and other Century Communities properties.',
  keywords: 'Century Communities, new construction homes, North Las Vegas, Bravado, Dr. Janet Duffy, featured partner, new homes Las Vegas',
  openGraph: {
    title: 'Century Communities North Las Vegas | Bravado New Homes | Dr. Janet Duffy',
    description: 'Explore Century Communities new construction homes in North Las Vegas. Featured partner Dr. Janet Duffy provides expert guidance for Bravado and other Century Communities properties.',
    url: 'https://bravadohomes.com/century-communities',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bravadohomes.com/century-communities',
  },
}

export default function CenturyCommunitiesPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ CENTURY COMMUNITIES FEATURED PARTNER ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Century Communities North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            New Construction Homes by America's Top 10 Homebuilder
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy | Featured Partner | Expert New Construction Guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
          </div>
        </div>
      </div>

      {/* Century Communities Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          About Century Communities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Century Communities is one of America's top 10 homebuilders, with over 40 years of experience 
          building quality homes across the United States. In North Las Vegas, Century Communities offers 
          exceptional new construction homes in master-planned communities like Bravado, featuring modern 
          designs, energy-efficient features, and innovative smart home technology.
        </p>

        {/* Century Communities Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Top 10</div>
            <div className="text-gray-700">National Homebuilder</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Smart</div>
            <div className="text-gray-700">Home Technology</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">Energy</div>
            <div className="text-gray-700">Efficient Homes</div>
          </div>
        </div>
      </div>

      {/* Featured Communities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Communities in North Las Vegas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bravado Community */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Bravado Community by Century Communities"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bravado Community</h3>
            <p className="text-gray-700 mb-4">
              Prestigious gated community featuring stunning two-story floor plans ranging from 1,792 to 2,119 square feet. 
              Each home includes Century Connect® smart home package and premium finishes.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1,792 - 2,119 sq ft homes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 5 bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Century Connect® smart home
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Gated community security
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/community" className="cta-button flex-1 text-center">
                View Community
              </Link>
              <Link href="/floor-plans" className="cta-button flex-1 text-center">
                Floor Plans
              </Link>
            </div>
          </div>

          {/* Other Century Communities */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Century Communities North Las Vegas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">More Century Communities</h3>
            <p className="text-gray-700 mb-4">
              Century Communities has multiple communities throughout North Las Vegas and the greater Las Vegas area, 
              each offering unique amenities and home designs to fit your lifestyle.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                Multiple community locations
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏗️</span>
                Various floor plan options
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">💰</span>
                Flexible financing options
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🎯</span>
                Expert builder representation
              </li>
            </ul>
            <Link href="/services" className="cta-button w-full text-center">
              Explore All Communities
            </Link>
          </div>
        </div>
      </div>

      {/* Century Connect Smart Home */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Connect® Smart Home Technology
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Every Century Communities home comes equipped with Century Connect®, an innovative smart home package 
          that puts control of your home at your fingertips. Manage security, lighting, temperature, and more 
          from anywhere in the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Security</h3>
            <p className="text-gray-700">Remote door locks, security cameras, and monitoring systems for complete peace of mind.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🌡️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Climate Control</h3>
            <p className="text-gray-700">Smart thermostats and HVAC systems that learn your preferences and save energy.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Lighting</h3>
            <p className="text-gray-700">Automated lighting systems with scheduling, dimming, and color control options.</p>
          </div>
        </div>
      </div>

      {/* Property Search */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Find Your Century Communities Home
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Home Value Tool */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Discover what your home is worth in today's North Las Vegas market.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          {/* Current Listings */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏘️ Available Century Communities Homes
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Browse current Century Communities listings in North Las Vegas.
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

      {/* Why Choose Dr. Janet Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Janet Duffy for Century Communities?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured Partner Benefits</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Direct access to Century Communities sales team and inventory</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Early access to new releases and floor plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Exclusive financing options and incentives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Insider knowledge of construction timelines and processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Negotiation expertise for upgrades and customizations</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Guidance</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏗️</span>
                <span>New construction process guidance from start to finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🤝</span>
                <span>Your advocate throughout the building process</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">💰</span>
                <span>Financing assistance and incentive optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📋</span>
                <span>Contract review and negotiation expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                <span>Quality control and walkthrough coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your Century Communities Dream Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on your Century Communities new construction home
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
            <h3 className="text-xl font-bold mb-3">Century Communities Office</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Century Communities Featured Partner<br />
            Nevada License: S.0197614<br />
            DrJanSells@BravadoHomes.com</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Communities Served</h3>
            <p>Bravado Community<br />
            North Las Vegas Area<br />
            Century Communities Properties</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Janet Duffy is a Featured Partner with Century Communities, America's top 10 homebuilder. 
            Nevada License S.0197614. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
