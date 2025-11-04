'use client'

import { useState, useEffect } from 'react'
import { getCurrentDomainConfig } from '../utils/domain'
import { defaultDomain, type DomainConfig } from '../domains-config'

/**
 * Client-side hook to get domain configuration
 * Detects domain from window.location.hostname and returns appropriate config
 */
export function useDomainConfig(): DomainConfig {
  const [config, setConfig] = useState<DomainConfig>(defaultDomain)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      const domainConfig = getCurrentDomainConfig({
        headers: {
          get: (key: string) => key === 'host' ? hostname : null
        }
      })
      setConfig(domainConfig)
    }
  }, [])

  return config
}

