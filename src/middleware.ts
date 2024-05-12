// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { getNewSessionCookie, getSession } from './lib/sessions'

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

  const session = await getSession()

  if (isProtectedRoute && !session.hasSession) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  if (
    isPublicRoute &&
    session.hasSession &&
    req.nextUrl.pathname === '/admin'
  ) {
    return NextResponse.redirect(new URL('/admin/editor', req.nextUrl))
  }

  if (session.hasSession) {
    const update = await getNewSessionCookie(session.username)
    const res = I18nMiddleware(req)
    res.cookies.set(update)
    return res
  }

  return I18nMiddleware(req)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
