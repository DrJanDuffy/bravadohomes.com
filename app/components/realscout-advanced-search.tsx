'use client'

import RealScoutLoader from './realscout-loader'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutAdvancedSearchProps {
  agentEncodedId: string
}

export default function RealScoutAdvancedSearch({
  agentEncodedId
}: RealScoutAdvancedSearchProps) {
  return (
    <RealScoutLoader>
      <div className="realscout-advanced-search-container">
        <realscout-advanced-search agent-encoded-id={agentEncodedId} />
      </div>
    </RealScoutLoader>
  )
}

