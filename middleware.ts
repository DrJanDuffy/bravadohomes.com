import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Skip middleware for static files and API routes
  if (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.startsWith('/robots.txt') ||
    url.pathname.startsWith('/sitemap.xml')
  ) {
    return NextResponse.next()
  }

  // Redirect HTTP to HTTPS
  if (request.nextUrl.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  // NOTE: www redirect should be configured at Vercel domain settings level
  // Middleware www redirect is disabled to avoid conflicts with Vercel redirects
  // If www redirects are needed, configure them in Vercel project settings
  
  // Remove search parameters from homepage to prevent duplicate content
  // This fixes the ?s={search_term_string} issue from schema markup
  if (url.pathname === '/' && url.search) {
    url.search = ''
    return NextResponse.redirect(url, 301)
  }
  
  // Also handle search parameters on any page with the search template pattern
  if (url.search.includes('s={search_term_string}') || url.search.includes('search_term_string')) {
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

