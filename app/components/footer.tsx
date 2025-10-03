export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-lg mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Bravado Homes</h3>
            <p className="text-lg mb-4 opacity-90">
              Featured New Home Construction & Buyer Representation Specialist
            </p>
            <p className="opacity-90">
              5060 Wind Springs Street<br />
              North Las Vegas, NV 89031<br />
              (702) 123-4567
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="/floor-plans" className="hover:text-blue-200 transition-colors">Floor Plans</a></li>
              <li><a href="/community" className="hover:text-blue-200 transition-colors">Community</a></li>
              <li><a href="/location" className="hover:text-blue-200 transition-colors">Location</a></li>
              <li><a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Dr. Janet Duffy</h4>
            <div className="space-y-2 opacity-90">
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+17021234567" className="hover:text-blue-200 transition-colors">
                  (702) 123-4567
                </a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:DrJanSells@BravadoHomes.com" className="hover:text-blue-200 transition-colors">
                  DrJanSells@BravadoHomes.com
                </a>
              </p>
              <p className="text-sm">
                Nevada License: S.0197614
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © {new Date().getFullYear()} Bravado | Homes by Dr Janet Duffy. All rights reserved.
            </p>
            <p className="text-sm opacity-75">
              Independent real estate resource. Not affiliated with or endorsed by Century Communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
