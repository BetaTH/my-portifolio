// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { getSession, updateSessionMiddleware } from './lib/sessions'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
  resolveLocaleFromRequest: () => {
    return 'en'
  },
})

// const publicRoutes = ['/admin', '/']
const privateRoutes = ['/admin/editor']

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = privateRoutes.includes(path)
  // const isPublicRoute = publicRoutes.includes(path)

  const session = await getSession()

  if (isProtectedRoute && !session.hasSession) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  if (session.hasSession && req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/editor', req.nextUrl))
  }

  if (session.hasSession) {
    const res = I18nMiddleware(req)
    return await updateSessionMiddleware(session.username, res)
  }

  return I18nMiddleware(req)
}

export const config = {
  matcher: [
    {
      source: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
      missing: [{ type: 'header', key: 'next-action' }],
    },
  ],
}
