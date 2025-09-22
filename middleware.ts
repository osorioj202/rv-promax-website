import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for rv-promax.com (without www)
  const hostname = request.headers.get('host')
  
  if (hostname === 'rv-promax.com') {
    // Create redirect URL with www
    const redirectUrl = new URL(request.url)
    redirectUrl.hostname = 'www.rv-promax.com'
    
    // Return 301 permanent redirect
    return NextResponse.redirect(redirectUrl, 301)
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
