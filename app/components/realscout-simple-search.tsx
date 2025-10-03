'use client'

import { useEffect } from 'react'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutSimpleSearchProps {
  agentEncodedId: string
}

export default function RealScoutSimpleSearch({
  agentEncodedId
}: RealScoutSimpleSearchProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (typeof window !== 'undefined' && !window.realscoutLoaded) {
      const script = document.createElement('script')
      script.src = 'https://realscout.com/widgets/simple-search.js'
      script.async = true
      script.onload = () => {
        window.realscoutLoaded = true
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="realscout-simple-search-container">
      <realscout-simple-search agent-encoded-id={agentEncodedId} />
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    realscoutLoaded?: boolean
  }
}
