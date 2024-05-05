import type { Metadata } from 'next'
import { Fira_Code as FiraCode, Fira_Sans as FiraSans } from 'next/font/google'
import '../globals.css'
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams,
} from '@/lib/locale/server'
import { LocaleProvider } from '@/components/layout/locale-provider'

const firaCode = FiraCode({ subsets: ['latin'] })
const firaSans = FiraSans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fira-sans',
})

export function generateStaticParams() {
  return getStaticParams()
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('pages.home.metadata')

  const description = t('description')
  const title = 'Thielson Almendra | Portifolio'

  return {
    title,
    description,
    twitter: {
      title,
      description,
    },
    openGraph: {
      title,
      description,
    },
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = getCurrentLocale()
  return (
    <html lang={locale}>
      <body className={`${firaCode.className} ${firaSans.variable} relative`}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  )
}
