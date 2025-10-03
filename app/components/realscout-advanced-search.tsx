'use client'

import { useEffect } from 'react'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutAdvancedSearchProps {
  agentEncodedId: string
}

export default function RealScoutAdvancedSearch({
  agentEncodedId
}: RealScoutAdvancedSearchProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (typeof window !== 'undefined' && !window.realscoutLoaded) {
      const script = document.createElement('script')
      script.src = 'https://realscout.com/widgets/advanced-search.js'
      script.async = true
      script.onload = () => {
        window.realscoutLoaded = true
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="realscout-advanced-search-container">
      <realscout-advanced-search agent-encoded-id={agentEncodedId} />
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    realscoutLoaded?: boolean
  }
}
