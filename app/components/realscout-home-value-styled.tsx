'use client'

import RealScoutLoader from './realscout-loader'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutHomeValueStyledProps {
  agentEncodedId: string
}

export default function RealScoutHomeValueStyled({
  agentEncodedId
}: RealScoutHomeValueStyledProps) {
  return (
    <RealScoutLoader>
      <div className="realscout-home-value-container">
        <style jsx>{`
          realscout-home-value {
            --rs-hvw-background-color: #ffffff;
            --rs-hvw-title-color: #000000;
            --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
            --rs-hvw-primary-button-text-color: #ffffff;
            --rs-hvw-primary-button-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-color: #ffffff;
            --rs-hvw-widget-width: auto;
          }
        `}</style>
        <realscout-home-value agent-encoded-id={agentEncodedId} />
      </div>
    </RealScoutLoader>
  )
}
