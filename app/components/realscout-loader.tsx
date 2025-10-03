'use client'

import { useEffect, useState } from 'react'

interface RealScoutLoaderProps {
  children: React.ReactNode
}

export default function RealScoutLoader({ children }: RealScoutLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load RealScout resources if not already loaded
    if (typeof window !== 'undefined' && !window.realscoutLoaded) {
      // RealScout web components are self-contained and don't need separate CSS
      // The styling is handled via CSS custom properties

      // Load main RealScout script
      const existingScript = document.querySelector('script[src*="realscout-web-components.umd.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        script.type = 'module'
        script.crossOrigin = 'anonymous'
        script.onload = () => {
          window.realscoutLoaded = true
          setIsLoaded(true)
          
          // Initialize widgets after script loads
          setTimeout(() => {
            if (window.initRealScoutWidgets) {
              window.initRealScoutWidgets()
            }
            // Also try alternative initialization methods
            if (window.RealScout && window.RealScout.init) {
              window.RealScout.init()
            }
          }, 100)
        }
        script.onerror = () => {
          console.error('Failed to load RealScout widgets script')
          setIsLoaded(true) // Still render children even if script fails
        }
        document.head.appendChild(script)
      } else {
        setIsLoaded(true)
      }
    } else {
      setIsLoaded(true)
    }
  }, [])

  // Always render children, but show loading state if needed
  return (
    <div className="realscout-widget-wrapper">
      {!isLoaded && (
        <div className="realscout-loading-placeholder bg-gray-100 p-4 rounded-lg text-center text-gray-500">
          Loading property search...
        </div>
      )}
      <div className={isLoaded ? 'realscout-widget-loaded' : 'realscout-widget-hidden'}>
        {children}
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    realscoutLoaded?: boolean
    initRealScoutWidgets?: () => void
    RealScout?: {
      init?: () => void
    }
  }
}
