/**
 * Domain Detection and Configuration Utilities
 * Detects current domain and returns appropriate configuration
 */

import { getDomainConfig, getDomainConfigByDomain, type DomainConfig } from '../domains-config'

/**
 * Get current domain from request headers or environment
 */
export function getCurrentDomain(request?: { headers: Headers | { get: (key: string) => string | null } }): string {
  if (request) {
    const host = request.headers.get('host') || request.headers.get('Host')
    if (host) {
      // Remove port if present
      return host.split(':')[0]
    }
  }
  
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NEXT_PUBLIC_DOMAIN || process.env.VERCEL_URL?.replace('https://', '').split(':')[0] || 'bravadohomes.com'
  }
  
  return 'bravadohomes.com'
}

/**
 * Get domain configuration for current request
 */
export function getCurrentDomainConfig(request?: { headers: Headers | { get: (key: string) => string | null } }): DomainConfig {
  const domain = getCurrentDomain(request)
  return getDomainConfigByDomain(domain)
}

/**
 * Check if domain is in allowed list
 */
export function isValidDomain(domain: string): boolean {
  return domain === 'bravadohomes.com' || domain === 'mayfieldestateslasvegas.com'
}

