import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protected routes that require authentication
const protectedPaths = ['/home', '/books', '/editor']

// Auth routes that should redirect to home if already authenticated
const authPaths = ['/signin', '/signup', '/otp-verify']

// Public routes that don't need any checks
const publicPaths = ['/']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get auth token from cookie or check localStorage via headers
  const token = request.cookies.get('auth-token')?.value

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  // Check if the current path is an auth page
  const isAuthPath = authPaths.some((path) => pathname.startsWith(path))

  // Protected routes - redirect to signin if not authenticated
  if (isProtectedPath && !token) {
    const signInUrl = new URL('/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signInUrl)
  }

  // Auth routes - redirect to home if already authenticated
  if (isAuthPath && token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // Root path - redirect based on authentication status
  if (pathname === '/') {
    const redirectUrl = token ? '/home' : '/signin'
    return NextResponse.redirect(new URL(redirectUrl, request.url))
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
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
