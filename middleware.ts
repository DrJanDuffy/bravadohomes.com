import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, search, protocol } = request.nextUrl
  const host = request.headers.get('host') || ''
  
  // Skip middleware for static files and API routes (early return, no clone needed)
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml')
  ) {
    return NextResponse.next()
  }

  // Redirect HTTP to HTTPS
  if (protocol === 'http:') {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // Canonicalize host to www for bravadohomes.com
  if (host === 'bravadohomes.com') {
    const url = request.nextUrl.clone()
    url.host = 'www.bravadohomes.com'
    return NextResponse.redirect(url, 308)
  }
  
  // NOTE: www redirect should be configured at Vercel domain settings level
  // Middleware www redirect is disabled to avoid conflicts with Vercel redirects
  // If www redirects are needed, configure them in Vercel project settings
  
  // Remove search parameters from homepage to prevent duplicate content
  // This fixes the ?s={search_term_string} issue from schema markup
  if (pathname === '/' && search) {
    const url = request.nextUrl.clone()
    url.search = ''
    return NextResponse.redirect(url, 301)
  }
  
  // Also handle search parameters on any page with the search template pattern
  if (search.includes('s={search_term_string}') || search.includes('search_term_string')) {
    const url = request.nextUrl.clone()
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  // Resolve legacy neighborhood hub URL to a valid indexed destination.
  if (pathname === '/neighborhoods') {
    const url = request.nextUrl.clone()
    url.pathname = '/north-las-vegas-neighborhoods'
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

