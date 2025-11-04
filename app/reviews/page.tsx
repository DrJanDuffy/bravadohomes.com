import RealScoutListings from '../components/realscout-listings'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Bravado Homes Las Vegas Reviews | Century Communities North Las Vegas | Dr. Janet Duffy',
    description: 'Read Bravado Homes Las Vegas reviews and testimonials from satisfied homebuyers. Expert guidance from Dr. Janet Duffy, Featured Century Communities Partner. See why Bravado is one of the top-rated new construction communities in North Las Vegas.',
    keywords: [
      'bravado homes las vegas reviews',
      'bravado homes reviews',
      'century communities bravado reviews',
      'bravado north las vegas reviews',
      'bravado homes testimonials',
      'dr. janet duffy reviews',
      'bravado homes las vegas',
      'century communities reviews',
      'new homes las vegas reviews',
      'north las vegas new construction reviews',
    ],
    alternates: {
      canonical: `${baseUrl}/reviews`,
    },
    openGraph: {
      title: 'Bravado Homes Las Vegas Reviews | Century Communities',
      description: 'Read Bravado Homes Las Vegas reviews and testimonials from satisfied homebuyers. Expert guidance from Dr. Janet Duffy.',
      url: `${baseUrl}/reviews`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bravado Homes Las Vegas Reviews',
      description: 'Read Bravado Homes Las Vegas reviews and testimonials from satisfied homebuyers.',
    },
  }
}

export default async function ReviewsPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const location = config.location
  const agent = config.realEstateAgent

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ RATED 5 STARS BY OUR CLIENTS ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado Homes Las Vegas Reviews
          </h1>
          <p className="text-2xl mb-4">
            What Our Homebuyers Say About Bravado & Dr. Janet Duffy
          </p>
          <p className="text-xl mb-8 opacity-90">
            Real Reviews from Real Homebuyers | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Janet
            </a>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Homes Reviews & Testimonials
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          See what homebuyers are saying about <strong>Bravado Homes by Century Communities</strong> in North Las Vegas. 
          Our clients love the quality construction, smart home technology, and expert guidance from {agent?.name || 'Dr. Janet Duffy'}.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Dr. Janet Duffy made the entire process seamless. Her expertise with Century Communities and knowledge of Bravado homes helped us find the perfect floor plan. The smart home technology is incredible!"
            </p>
            <p className="text-sm font-semibold text-gray-900">- Sarah M., Bravado Homeowner</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "We couldn't be happier with our Bravado home! The location near Craig Ranch Regional Park is perfect for our family. Dr. Janet guided us through every step and ensured we got the best deal."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Michael & Jennifer T., Bravado Residents</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "As first-time homebuyers, we were nervous about the process. Dr. Janet Duffy's expertise and patience made all the difference. The Bravado community is beautiful and the homes are well-built."
            </p>
            <p className="text-sm font-semibold text-gray-900">- David L., New Bravado Homeowner</p>
          </div>

          {/* Review 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The Century Connect smart home package is amazing! Dr. Janet explained all the features and helped us understand the value. We love our new Bravado home and the North Las Vegas location."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Robert & Lisa K., Century Communities Clients</p>
          </div>

          {/* Review 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Dr. Janet Duffy is the best! Her knowledge of Century Communities and the Bravado floor plans helped us make the perfect choice. The gated community and amenities are exactly what we wanted."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Amanda R., Bravado Homebuyer</p>
          </div>

          {/* Review 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Moving from out of state, we needed someone we could trust. Dr. Janet was professional, responsive, and made buying our Bravado home a breeze. The quality of Century Communities is outstanding!"
            </p>
            <p className="text-sm font-semibold text-gray-900">- James & Maria P., Relocated to Bravado</p>
          </div>
        </div>

        {/* Why Choose Bravado Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Why Bravado Homes Earns 5-Star Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-bold text-gray-900 mb-2">Top-Rated Builder</h4>
              <p className="text-gray-700">Century Communities is one of America's top 10 homebuilders with over 40 years of experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-700">Luxury finishes, smart home technology, and thoughtful design in every Bravado home.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold text-gray-900 mb-2">Prime Location</h4>
              <p className="text-gray-700">North Las Vegas location near Craig Ranch Regional Park, shopping, and major attractions.</p>
            </div>
          </div>
        </div>

        {/* Expert Guidance Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Experience the Difference with Expert Guidance
          </h3>
          <p className="text-lg mb-6">
            {agent?.name || 'Dr. Janet Duffy'}, Featured Century Communities Partner, brings years of experience and insider knowledge to help you find the perfect Bravado home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Schedule Your Tour
            </a>
            <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 View Floor Plans
            </a>
          </div>
        </div>

        {/* RealScout Listings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Available Bravado Homes for Sale
          </h3>
          <RealScoutListings />
        </div>
      </div>
    </section>
  )
}

