import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Redirect www to non-www (canonical URL)
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url, 301)
  }

  // Remove search parameters from homepage to prevent duplicate content
  // This fixes the ?s={search_term_string} issue
  if (url.pathname === '/' && url.search) {
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  // Normalize trailing slashes (optional - keep consistent with your setup)
  // You can enable this if you want to enforce no trailing slashes
  // if (url.pathname !== '/' && url.pathname.endsWith('/')) {
  //   url.pathname = url.pathname.slice(0, -1)
  //   return NextResponse.redirect(url, 301)
  // }

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

