export default function CommunityPage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ FEATURED NEW HOME CONSTRUCTION & BUYER REPRESENTATION ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado Community Lifestyle
          </h1>
          <p className="text-2xl mb-4">
            Gated Luxury Community in North Las Vegas
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Featured Partner
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href="mailto:DrJanSells@BravadoHomes.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* About Bravado Community Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado Community
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Experience the perfect blend of modern amenities and community spirit at Bravado, 
          where every detail has been thoughtfully designed to enhance your quality of life. 
          From gated security to recreational facilities, discover what makes Bravado the 
          ideal place to call home in North Las Vegas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          As a <strong>Featured New Home Construction and Buyer Representation specialist</strong> with Century Communities, Dr. Janet Duffy brings unparalleled expertise in helping families navigate the new home construction process while ensuring your interests are always protected.
        </p>
      </div>

      {/* Community Features & Amenities Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Community Features & Amenities
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Gated Security</h3>
            <p className="text-gray-700">
              Enhanced security and privacy with controlled access system, ensuring your family's safety and peace of mind.
            </p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Community Park</h3>
            <p className="text-gray-700">
              Beautifully landscaped park with grass areas, perfect for family gatherings, outdoor games, and community events.
            </p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🚶‍♂️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Walking Paths</h3>
            <p className="text-gray-700">
              Scenic walking paths throughout the community, perfect for morning jogs, evening strolls, and staying active.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Gated Security & Privacy</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Bravado's gated entrance provides residents with enhanced security and privacy, 
              creating a safe environment for families to thrive. The controlled access 
              system ensures that only residents and authorized visitors can enter the 
              community, giving you peace of mind whether you're at home or away.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This secure setting allows children to play safely in the neighborhood while 
              parents can relax knowing their family is protected within the community 
              boundaries. The gated access also helps maintain property values and creates 
              a sense of exclusivity that residents appreciate.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Park & Recreation</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The heart of Bravado's community life centers around its beautifully landscaped 
              community park, featuring expansive grass areas perfect for picnics, outdoor 
              games, and family gatherings. This thoughtfully designed space serves as a 
              natural gathering point where neighbors can connect and build lasting friendships.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The park area provides the perfect backdrop for community events, children's 
              birthday parties, and casual meetups with neighbors. Whether you're looking 
              to enjoy a quiet afternoon in the sun or host a larger community gathering, 
              this versatile space accommodates all your outdoor lifestyle needs.
            </p>
          </div>
        </div>
      </div>

      {/* Walking Paths & Active Lifestyle Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Walking Paths & Active Lifestyle
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Bravado's network of walking paths winds throughout the community, creating 
          opportunities for residents to stay active and enjoy the beautiful Nevada 
          weather. These well-maintained pathways are perfect for morning jogs, evening 
          strolls, or simply taking a leisurely walk to clear your mind after a busy day.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Benefits of Community Walking Paths</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className="feature-icon mr-4">💪</div>
              <div>
                <h4 className="font-bold text-gray-900">Promote Healthy Lifestyle</h4>
                <p className="text-gray-700">Encourage regular exercise and outdoor activity</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="feature-icon mr-4">👥</div>
              <div>
                <h4 className="font-bold text-gray-900">Neighbor Interaction</h4>
                <p className="text-gray-700">Foster connections and community bonds</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="feature-icon mr-4">🔦</div>
              <div>
                <h4 className="font-bold text-gray-900">Safe, Well-Lit Pathways</h4>
                <p className="text-gray-700">Secure walking areas for all times of day</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="feature-icon mr-4">🐕</div>
              <div>
                <h4 className="font-bold text-gray-900">Pet-Friendly Areas</h4>
                <p className="text-gray-700">Perfect for walking your furry family members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Century Communities Excellence Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Communities Excellence
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          As a Century Communities development, Bravado benefits from over three decades 
          of homebuilding expertise and a commitment to quality construction. Century 
          Communities has been voted one of America's Most Trusted Homebuilders for 
          three consecutive years, a testament to their dedication to customer satisfaction 
          and superior craftsmanship.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Construction</h3>
            <p className="text-gray-700">
              Built with premium materials and attention to detail, ensuring lasting 
              value and comfort for your family.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Home Technology</h3>
            <p className="text-gray-700">
              Century Connect® smart home package included, bringing modern convenience 
              and energy efficiency to your daily life.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Customer Service</h3>
            <p className="text-gray-700">
              Dedicated customer service team and comprehensive warranty program to 
              support you throughout your homeownership journey.
            </p>
          </div>
        </div>
      </div>

      {/* Featured New Home Construction & Buyer Representation Section */}
      <div className="vip-partnership mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="vip-badge mb-6">
            ⭐ FEATURED NEW HOME CONSTRUCTION & BUYER REPRESENTATION ⭐
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Janet Duffy as Your New Home Specialist?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy serves as a Featured New Home Construction and Buyer Representation specialist for Century Communities, providing expert guidance throughout your entire new home journey while protecting your interests.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Construction Expertise</h3>
              <p className="opacity-90">Specialized knowledge in new home construction process, timelines, and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate throughout the process, ensuring your interests are always protected</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">Century Communities Partnership</h3>
              <p className="opacity-90">Featured relationship providing insider access and priority treatment</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/contact" className="cta-button">
              Learn More About New Home Construction Process
            </a>
          </div>
        </div>
      </div>

      {/* Neighborhood Character & Community Spirit Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Neighborhood Character & Community Spirit
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Bonds</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Bravado fosters a strong sense of community through its thoughtful design and 
              welcoming atmosphere. The neighborhood attracts families who value quality, 
              security, and a sense of belonging. Residents often describe Bravado as more 
              than just a place to live – it's a place where neighbors become friends and 
              community bonds strengthen over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The community's layout encourages interaction among residents, with homes 
              positioned to create natural gathering spaces and opportunities for casual 
              encounters. This design philosophy, combined with the gated setting and shared 
              amenities, creates an environment where families can feel truly at home and 
              connected to their neighbors.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">New Home Construction Process</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              As a Featured New Home Construction specialist, Dr. Janet Duffy guides you through 
              every step of the construction process, from initial design selections to final 
              walkthrough. Her expertise ensures you understand timelines, quality standards, 
              and have proper representation throughout your new home journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From pre-construction planning to post-move-in support, Dr. Duffy's buyer 
              representation services protect your interests and ensure you receive the 
              highest quality home that meets all your expectations and requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Experience the Bravado Community Difference
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Ready to discover what makes Bravado the perfect community for your family? 
          Dr. Janet Duffy invites you to experience firsthand the exceptional lifestyle 
          and new home construction process that awaits you in this premier North Las Vegas development.
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
            <h3 className="text-xl font-bold mb-3">Bravado North Las Vegas</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Featured New Home Construction<br />
            & Buyer Representation Specialist<br />
            Nevada License: S.0197614</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Century Communities</h3>
            <p>One of America's Top 10 Homebuilders<br /><br />
            Model Home Hours<br />
            Monday-Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            © 2025 Bravado | Homes by Dr Janet Duffy. All rights reserved.<br />
            Independent real estate resource. Not affiliated with or endorsed by Century Communities. Dr. Janet Duffy is an independent real estate agent providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </section>
  )
}
