export default function LocationPage() {
  return (
    <section>
      <div className="hero-section mb-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900">
          Prime Location in North Las Vegas
        </h1>
        <p className="mb-6 text-xl text-gray-700 leading-relaxed">
          Discover why Bravado's strategic location in North Las Vegas makes it the 
          perfect place to call home. With easy access to major highways, top-rated 
          schools, shopping destinations, and recreational facilities, you'll enjoy 
          the perfect balance of convenience and lifestyle.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Strategic Location Benefits
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Bravado's prime location in North Las Vegas places you at the crossroads of 
          convenience and opportunity. Situated near the intersection of major transportation 
          routes, residents enjoy easy access to the Las Vegas Strip, downtown Las Vegas, 
          McCarran International Airport, and the growing North Las Vegas business district. 
          This strategic positioning means shorter commute times and more time to spend 
          with family and friends.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The community's proximity to I-15, one of Nevada's major north-south highways, 
          ensures that whether you're commuting to work, exploring Las Vegas attractions, 
          or heading out of town for weekend adventures, you're never far from where you 
          need to be. This connectivity makes Bravado an ideal choice for professionals, 
          families, and anyone who values both urban amenities and suburban tranquility.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Commute Times</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span>Las Vegas Strip</span>
                <span className="font-semibold">20 minutes</span>
              </li>
              <li className="flex justify-between">
                <span>McCarran International Airport</span>
                <span className="font-semibold">25 minutes</span>
              </li>
              <li className="flex justify-between">
                <span>Downtown Las Vegas</span>
                <span className="font-semibold">15 minutes</span>
              </li>
              <li className="flex justify-between">
                <span>Henderson</span>
                <span className="font-semibold">30 minutes</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Nearby Attractions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Craig Ranch Regional Park (5 minutes)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Aliante Casino + Hotel (10 minutes)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Las Vegas Motor Speedway (15 minutes)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Red Rock Canyon (35 minutes)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Craig Ranch Regional Park - Your Backyard Playground
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Just minutes from Bravado, Craig Ranch Regional Park serves as an extension 
          of your backyard, offering endless recreational opportunities for the whole 
          family. This expansive 170-acre park features multiple playgrounds, sports 
          fields, walking trails, and picnic areas, making it the perfect destination 
          for weekend family outings, birthday parties, and community events.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The park's state-of-the-art facilities include basketball courts, tennis courts, 
          soccer fields, and baseball diamonds, providing opportunities for sports 
          enthusiasts of all ages. The extensive trail system offers miles of walking 
          and biking paths, while the numerous playgrounds ensure children have plenty 
          of space to play and explore safely.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Sports & Recreation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Basketball courts</li>
              <li>• Tennis courts</li>
              <li>• Soccer fields</li>
              <li>• Baseball diamonds</li>
              <li>• Walking trails</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Family Amenities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Multiple playgrounds</li>
              <li>• Picnic areas</li>
              <li>• Restroom facilities</li>
              <li>• Parking areas</li>
              <li>• Event pavilions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Special Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Splash pad for children</li>
              <li>• Dog park area</li>
              <li>• Amphitheater</li>
              <li>• Community garden</li>
              <li>• Fitness stations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Excellent Schools & Education
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Families at Bravado benefit from access to some of North Las Vegas's most 
          respected educational institutions. The community is served by the Clark County 
          School District, which provides comprehensive educational programs from 
          elementary through high school. These schools are known for their dedicated 
          teachers, modern facilities, and commitment to student success.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Raul Elizondo Elementary School</h3>
            <p className="text-gray-700 mb-3">
              A highly-rated elementary school serving grades K-5, known for its 
              strong academic programs and supportive learning environment.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 3 miles from Bravado
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Clifford O. (Pete) Findlay Middle School</h3>
            <p className="text-gray-700 mb-3">
              Serving grades 6-8, this middle school offers comprehensive programs 
              including advanced placement courses and extracurricular activities.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 4 miles from Bravado
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Mojave High School</h3>
            <p className="text-gray-700 mb-3">
              A comprehensive high school serving grades 9-12, offering diverse 
              academic programs, athletics, and college preparation courses.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 5 miles from Bravado
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          These schools are committed to providing students with the tools they need 
          to succeed in an ever-changing world. With modern technology, experienced 
          educators, and comprehensive support services, students at these institutions 
          receive a well-rounded education that prepares them for future success.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Shopping & Dining Convenience
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Living at Bravado means having access to a wide variety of shopping and 
          dining options within minutes of your home. From major retailers to local 
          favorites, you'll find everything you need for daily life, special occasions, 
          and weekend entertainment just a short drive away.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Major Retailers Nearby</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Target</strong> - 2 miles (General merchandise, groceries)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Walmart</strong> - 3 miles (Supercenter with full grocery)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Kohl's</strong> - 2 miles (Department store)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Smith's</strong> - 2 miles (Grocery store)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Dining Options</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Northstar Bar & Grill</strong> - Local favorite</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Chili's Grill & Bar</strong> - Family dining</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Jasmine Express</strong> - Asian cuisine</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Pier 88 Boiling Seafood & Bar</strong> - Seafood specialty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Healthcare & Essential Services
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Access to quality healthcare and essential services is another advantage of 
          living at Bravado. The North Las Vegas area is home to several medical 
          facilities, urgent care centers, and specialty clinics, ensuring that 
          residents have convenient access to healthcare services when needed.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Healthcare Facilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• North Vista Hospital (5 miles)</li>
              <li>• Multiple urgent care centers</li>
              <li>• Dental offices and clinics</li>
              <li>• Specialty medical practices</li>
              <li>• Pharmacy locations</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Essential Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Post office locations</li>
              <li>• Banking and credit unions</li>
              <li>• Auto service centers</li>
              <li>• Home improvement stores</li>
              <li>• Professional services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Experience the Bravado Location Advantage
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The location of Bravado truly offers the best of both worlds – the convenience 
          of urban amenities with the tranquility of suburban living. Whether you're 
          commuting to work, exploring Las Vegas attractions, or simply enjoying the 
          local parks and shopping, everything you need is within easy reach. Schedule 
          a tour with Dr. Janet Duffy to experience firsthand how this prime location 
          can enhance your lifestyle.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Location Tour
          </a>
          <a href="/floor-plans" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Available Homes
          </a>
          <a href="/community" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Learn About Community Features
          </a>
        </div>
      </div>
    </section>
  )
}
