// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './lib/sessions'
import { cookies } from 'next/headers'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
  resolveLocaleFromRequest: () => {
    return 'en'
  },
})

const publicRoutes = ['/admin', '/']

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = !publicRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const token = cookies().get('session')?.value
  const session = await verifyToken(token)

  const hasSession = session ? !!session.username : false

  if (isProtectedRoute && !hasSession) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  if (isPublicRoute && hasSession && req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/editor', req.nextUrl))
  }

  return I18nMiddleware(req)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
