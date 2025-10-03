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
      // Load CSS from Cloudflare DNS worker
      const existingCSS = document.querySelector('link[href*="realscout-widgets.css"]')
      if (!existingCSS) {
        const cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = 'https://widgets.realscout.com/realscout-widgets.css'
        cssLink.type = 'text/css'
        cssLink.crossOrigin = 'anonymous'
        document.head.appendChild(cssLink)
      }

      // Load main RealScout script
      const existingScript = document.querySelector('script[src*="realscout-widgets.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://widgets.realscout.com/realscout-widgets.js'
        script.async = true
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
