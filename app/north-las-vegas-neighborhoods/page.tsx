import Image from 'next/image'
import Link from 'next/link'
import RealScoutListings from '../components/realscout-listings'

export const metadata = {
  title: 'North Las Vegas Neighborhoods | 89031 Area Guide | Dr. Janet Duffy',
  description: 'Explore North Las Vegas neighborhoods and communities. Expert guide to 89031 area including schools, amenities, and lifestyle from Dr. Janet Duffy.',
  keywords: 'North Las Vegas neighborhoods, 89031 neighborhoods, North Las Vegas communities, Las Vegas neighborhoods, Dr. Janet Duffy, North Las Vegas guide',
  openGraph: {
    title: 'North Las Vegas Neighborhoods | 89031 Area Guide | Dr. Janet Duffy',
    description: 'Explore North Las Vegas neighborhoods and communities. Expert guide to 89031 area including schools, amenities, and lifestyle from Dr. Janet Duffy.',
    url: 'https://bravadohomes.com/north-las-vegas-neighborhoods',
    type: 'website',
  },
}

export default function NorthLasVegasNeighborhoodsPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ NORTH LAS VEGAS NEIGHBORHOOD EXPERT ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            North Las Vegas Neighborhoods Guide
          </h1>
          <p className="text-2xl mb-4">
            Discover the Best Communities in 89031 Area
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy | Local Neighborhood Expert | Nevada License S.0197614
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

      {/* Area Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          North Las Vegas Neighborhood Overview
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          North Las Vegas (zip code 89031) is one of Nevada's fastest-growing areas, offering a perfect blend 
          of suburban tranquility and urban convenience. With master-planned communities, excellent schools, 
          and proximity to major employment centers, North Las Vegas provides an ideal lifestyle for families 
          and professionals alike.
        </p>

        {/* Area Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">89031</div>
            <div className="text-gray-700">Prime Zip Code</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15 Min</div>
            <div className="text-gray-700">To Las Vegas Strip</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">170 Acres</div>
            <div className="text-gray-700">Craig Ranch Park</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">Top</div>
            <div className="text-gray-700">Rated Schools</div>
          </div>
        </div>
      </div>

      {/* Featured Neighborhoods */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Featured North Las Vegas Neighborhoods
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bravado Community */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Bravado Community North Las Vegas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bravado Community</h3>
            <p className="text-gray-700 mb-4">
              Prestigious gated community featuring luxury new construction homes by Century Communities. 
              Located at 5060 Wind Springs Street with easy access to Craig Ranch Regional Park.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Gated community security
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                New construction homes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Smart home technology
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Close to Craig Ranch Park
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

          {/* Other North Las Vegas Areas */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="North Las Vegas Neighborhoods"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">North Las Vegas Area</h3>
            <p className="text-gray-700 mb-4">
              Diverse neighborhoods throughout North Las Vegas offering various housing options, 
              from established communities to new developments, each with unique amenities and character.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                Established neighborhoods
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏗️</span>
                New construction communities
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🎓</span>
                Excellent school districts
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🌳</span>
                Parks and recreation
              </li>
            </ul>
            <Link href="/north-las-vegas-homes" className="cta-button w-full text-center">
              View Available Homes
            </Link>
          </div>
        </div>
      </div>

      {/* Area Amenities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          North Las Vegas Area Amenities
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🏞️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Craig Ranch Regional Park</h3>
            <p className="text-gray-700">170-acre park with trails, sports fields, playgrounds, and community events just minutes from Bravado.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Premium Outlets North</h3>
            <p className="text-gray-700">Premium shopping destination with over 150 stores, restaurants, and entertainment options.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🎰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Aliante Casino + Hotel</h3>
            <p className="text-gray-700">Full-service resort with gaming, dining, entertainment, and hotel accommodations nearby.</p>
          </div>
        </div>
      </div>

      {/* Schools and Education */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Schools and Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Top-Rated School Districts</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Clark County School District - One of Nevada's largest and most comprehensive districts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Multiple elementary, middle, and high schools serving the 89031 area</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Advanced placement programs and specialized magnet schools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Close proximity to College of Southern Nevada and UNLV</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Private school options including faith-based and alternative education</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Higher Education</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎓</span>
                <span>College of Southern Nevada - North Las Vegas Campus</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎓</span>
                <span>University of Nevada, Las Vegas - 20 minutes away</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎓</span>
                <span>Nevada State College - Growing university with diverse programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎓</span>
                <span>Professional development and continuing education opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transportation and Commuting */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Transportation and Commuting
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🛣️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">I-15 Access</h3>
            <p className="text-gray-700">Direct access to Interstate 15 for easy commuting to downtown Las Vegas, the Strip, and beyond.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">McCarran Airport</h3>
            <p className="text-gray-700">30-minute drive to McCarran International Airport for domestic and international travel.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🚌</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Public Transit</h3>
            <p className="text-gray-700">RTC Transit bus service connects North Las Vegas to the greater Las Vegas valley.</p>
          </div>
        </div>
      </div>

      {/* Local Homes Search */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            🏘️ North Las Vegas Neighborhood Homes
          </h3>
          <p className="text-gray-700 text-center mb-8">
            Browse available homes in North Las Vegas neighborhoods and communities.
          </p>
          <RealScoutListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,OTHER"
            priceMin="350000"
            priceMax="900000"
          />
        </div>
      </div>

      {/* Expert Guidance */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Janet Duffy for North Las Vegas?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Neighborhood Expertise</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Deep knowledge of North Las Vegas neighborhoods and communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Understanding of local market trends and property values</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Insider knowledge of new construction developments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Familiarity with schools, amenities, and lifestyle factors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Professional network of local service providers</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Service</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏠</span>
                <span>Neighborhood comparison and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📊</span>
                <span>Market data and property value insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🤝</span>
                <span>Expert negotiation and representation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                <span>Personalized recommendations based on your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📋</span>
                <span>Complete transaction management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Explore North Las Vegas Neighborhoods?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on North Las Vegas neighborhoods and communities
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
            <h3 className="text-xl font-bold mb-3">North Las Vegas Office</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>North Las Vegas Neighborhood Expert<br />
            Nevada License: S.0197614<br />
            DrJanSells@BravadoHomes.com</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Service Area</h3>
            <p>North Las Vegas (89031)<br />
            Las Vegas Metro Area<br />
            Century Communities Properties</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Janet Duffy specializes in North Las Vegas neighborhoods and Century Communities properties. 
            Nevada License S.0197614. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
