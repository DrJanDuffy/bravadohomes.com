export default function Page() {
  return (
    <section>
      <div className="hero-section mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900">
          Welcome to Bravado - Your Dream Home Awaits in North Las Vegas
      </h1>
        <p className="mb-6 text-xl text-gray-700 leading-relaxed">
          Experience the perfect blend of modern living and community charm at Bravado, 
          where Dr. Janet Duffy brings you exceptional new homes from Century Communities. 
          Discover stunning floor plans starting from $459,990, featuring contemporary 
          designs, smart home technology, and a gated community setting.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">Starting From</h3>
            <p className="text-2xl font-bold text-blue-600">$459,990</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">Up to</h3>
            <p className="text-2xl font-bold text-blue-600">2,119 sq ft</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">Floor Plans</h3>
            <p className="text-2xl font-bold text-blue-600">3 Available</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Why Choose Bravado by Dr. Janet Duffy?
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            As a featured partner with Century Communities, Dr. Janet Duffy brings 
            unparalleled expertise and personalized service to your home buying journey. 
            With years of experience in the Las Vegas real estate market, Dr. Duffy 
            understands what makes a home truly special and ensures every detail meets 
            your expectations.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The Bravado community represents the pinnacle of modern residential living, 
            combining cutting-edge home design with thoughtful community planning. Each 
            home features Century Connect® smart home technology, energy-efficient 
            appliances, and premium finishes that create the perfect foundation for 
            your family's future.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Featured Home Highlights
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Century Connect® Smart Home Package Included
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Contemporary Open Floor Plans
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Energy-Efficient Construction
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Gated Community Security
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Premium Kitchen & Bath Features
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Covered Patios & Outdoor Living Spaces
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Community Amenities & Lifestyle
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Gated Security</h3>
            <p className="text-gray-700">
              Enjoy peace of mind with 24/7 gated access, ensuring your family's 
              safety and privacy in this exclusive community setting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Park</h3>
            <p className="text-gray-700">
              Relax and play in the beautifully landscaped community park with 
              grass areas, perfect for family gatherings and outdoor activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Walking Paths</h3>
            <p className="text-gray-700">
              Stay active and connected with scenic walking paths throughout the 
              community, perfect for morning jogs or evening strolls.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Prime North Las Vegas Location
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Bravado's strategic location in North Las Vegas places you at the heart of 
          convenience and opportunity. Just minutes from Craig Ranch Regional Park, 
          you'll have access to extensive recreational facilities, sports fields, and 
          community events. The community's proximity to I-15 ensures easy commuting 
          to Las Vegas Strip, downtown Las Vegas, and the growing North Las Vegas 
          business district.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Shopping and dining options abound in the surrounding area, with major 
          retailers like Target, Walmart, and Kohl's just minutes away. The community 
          is also served by excellent schools including Raul Elizondo Elementary, 
          Clifford O. Findlay Middle School, and Mojave High School, making it an 
          ideal choice for families seeking quality education for their children.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Ready to Make Bravado Your Home?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Don't miss your opportunity to own a piece of this exceptional community. 
          With limited inventory available and high demand for homes in this prime 
          North Las Vegas location, now is the perfect time to explore your options 
          with Dr. Janet Duffy.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Tour
          </a>
          <a href="/floor-plans" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Floor Plans
          </a>
          <a href="/community" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Learn More About Community
          </a>
        </div>
      </div>
    </section>
  )
}
