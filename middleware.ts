import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Check if the request is for rv-promax.com (without www)
  if (hostname === 'rv-promax.com') {
    // Build the redirect URL with the same path and search params
    const url = request.nextUrl.clone()
    url.hostname = 'www.rv-promax.com'
    url.protocol = 'https:'
    
    // Return 301 redirect with proper headers
    const response = NextResponse.redirect(url, 301)
    
    // Add canonical header to reinforce the preferred domain
    response.headers.set('Link', '<https://www.rv-promax.com/>; rel="canonical"')
    
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
