'use client'

import RealScoutLoader from './realscout-loader'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutHomeValueProps {
  agentEncodedId: string
}

export default function RealScoutHomeValue({
  agentEncodedId
}: RealScoutHomeValueProps) {
  return (
    <RealScoutLoader>
      <div className="realscout-home-value-container">
        <realscout-home-value agent-encoded-id={agentEncodedId} />
      </div>
    </RealScoutLoader>
  )
}

