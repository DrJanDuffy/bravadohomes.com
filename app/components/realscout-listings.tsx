'use client'

import RealScoutLoader from './realscout-loader'
/// <reference path="../types/realscout.d.ts" />

interface RealScoutListingsProps {
  agentEncodedId: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'DATE_NEW' | 'DATE_OLD'
  listingStatus?: string
  propertyTypes?: string
  priceMin?: string
  priceMax?: string
}

export default function RealScoutListings({
  agentEncodedId,
  sortOrder = 'PRICE_LOW',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,OTHER',
  priceMin = '450000',
  priceMax = '600000'
}: RealScoutListingsProps) {
  return (
    <RealScoutLoader>
      <div className="realscout-listings-container">
        <realscout-office-listings 
          agent-encoded-id={agentEncodedId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin}
          price-max={priceMax}
        />
      </div>
    </RealScoutLoader>
  )
}

