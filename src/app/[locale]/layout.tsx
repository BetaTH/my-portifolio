import type { Metadata } from 'next'
import { Fira_Code as FiraCode, Fira_Sans as FiraSans } from 'next/font/google'
import '../globals.css'
import { getCurrentLocale, getScopedI18n } from '@/lib/locale/server'
import { LocaleProvider } from '@/components/layout/locale-provider'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'
const firaCode = FiraCode({ subsets: ['latin'] })
const firaSans = FiraSans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fira-sans',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('pages.home.metadata')

  const description = t('description')
  const title = 'Thielson Almendra | Portfolio'
  return {
    title,
    description,
    twitter: {
      title,
      description,
      images: {
        url: 'http://drive.google.com/uc?export=view&id=1WeuosMCQQHRx1JibLEZSlfmyJ-5JBe7m',
      },
    },
    openGraph: {
      title,
      description,
      images: {
        url: 'http://drive.google.com/uc?export=view&id=1WeuosMCQQHRx1JibLEZSlfmyJ-5JBe7m',
      },
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider locale={locale}>
            {children}
            <Toaster />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
