'use client'

import RealScoutLoader from './realscout-loader'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutSimpleSearchProps {
  agentEncodedId: string
}

export default function RealScoutSimpleSearch({
  agentEncodedId
}: RealScoutSimpleSearchProps) {
  return (
    <RealScoutLoader>
      <div className="realscout-simple-search-container">
        <realscout-simple-search agent-encoded-id={agentEncodedId} />
      </div>
    </RealScoutLoader>
  )
}

