import { Logo } from '@/components/svg-components/logo-image'
import Link from 'next/link'

const navigation = [
  { name: 'Skills', href: '#skills' },
  { name: 'About Me', href: '#about' },
  //   { name: 'Projects', href: 'about' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="px-6 z-[99999] fixed top-0 left-0 w-full bg-body border-b border-zinc-50/20">
      <div className="mx-auto w-[65rem] py-3 max-w-full flex justify-between items-center gap-6">
        <Link href={'#home'}>
          <Logo className="w-[5.5rem] h-9 text-gray-50 hover:text-primary transition-colors" />
        </Link>
        <div className="flex gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-dark-600 text-base hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
