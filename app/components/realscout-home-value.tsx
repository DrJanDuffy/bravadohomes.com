'use client'

import { useEffect } from 'react'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutHomeValueProps {
  agentEncodedId: string
}

export default function RealScoutHomeValue({
  agentEncodedId
}: RealScoutHomeValueProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (typeof window !== 'undefined' && !window.realscoutLoaded) {
      const script = document.createElement('script')
      script.src = 'https://realscout.com/widgets/home-value.js'
      script.async = true
      script.onload = () => {
        window.realscoutLoaded = true
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="realscout-home-value-container">
      <realscout-home-value agent-encoded-id={agentEncodedId} />
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    realscoutLoaded?: boolean
  }
}
