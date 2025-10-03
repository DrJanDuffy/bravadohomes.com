import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/floor-plans': {
    name: 'Floor Plans',
  },
  '/community': {
    name: 'Community',
  },
  '/location': {
    name: 'Location',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Bravado Homes
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+17021234567" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
              Call: (702) 123-4567
            </a>
            <a href="mailto:janet@bravadohomes.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Email Dr. Janet
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
