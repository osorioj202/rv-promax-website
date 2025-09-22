import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Check if the request is for rv-promax.com (without www)
  if (hostname === 'rv-promax.com') {
    // Create redirect URL with www
    const redirectUrl = new URL(request.url)
    redirectUrl.hostname = 'www.rv-promax.com'
    
    // Create response with 301 redirect and cache headers
    const response = NextResponse.redirect(redirectUrl, 301)
    
    // Add headers to prevent caching of redirect
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    return response
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
