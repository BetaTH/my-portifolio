import type { Metadata } from 'next'
import { Fira_Code as FiraCode, Fira_Sans as FiraSans } from 'next/font/google'
import './globals.css'

const firaCode = FiraCode({ subsets: ['latin'] })
const firaSans = FiraSans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fira-sans',
})

export const metadata: Metadata = {
  title: 'Thielson Almendra | Portifolio',
  description:
    'Portfólio de um desenvolvedor full stack. Veja meus projetos em desenvolvimento web!',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.className} ${firaSans.variable} relative`}>
        {children}
      </body>
    </html>
  )
}
