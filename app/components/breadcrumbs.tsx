'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]
    
    let currentPath = ''
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special cases for better labels
      const labelMap: Record<string, string> = {
        'floor-plans': 'Floor Plans',
        'new-home-construction': 'New Home Construction',
        'buyer-representation': 'Buyer Representation',
        'smart-home-technology': 'Smart Home Technology',
        'financing-incentives': 'Financing & Incentives',
        'residence-1792': 'Residence 1792',
        'residence-1943': 'Residence 1943',
        'residence-2119': 'Residence 2119',
        'models': 'Models'
      }
      
      if (labelMap[segment]) {
        label = labelMap[segment]
      }
      
      const isLast = index === pathSegments.length - 1
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: isLast
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }
  
  return (
    <nav 
      className="bg-white border-b border-gray-200 py-3 mb-6" 
      aria-label="breadcrumbs"
      data-breadcrumbs
    >
      <div className="max-w-6xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 text-gray-400 mx-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              {item.current ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
