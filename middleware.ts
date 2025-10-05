import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname
  
  // Check if the request is for rv-promax.com (without www)
  if (hostname === 'rv-promax.com') {
    // Build the redirect URL with the same path and search params
    const url = request.nextUrl.clone()
    url.hostname = 'www.rv-promax.com'
    url.protocol = 'https:'
    
    // Return 301 redirect
    return NextResponse.redirect(url, 301)
  }
  
  // For www.rv-promax.com requests, continue normally
  if (hostname === 'www.rv-promax.com') {
    return NextResponse.next()
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
