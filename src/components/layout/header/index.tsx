import { HomeButton } from '@/components/buttons/home-button'
import { NavigationButton } from '@/components/buttons/naviagation-button'

const navigation = [
  { name: 'Skills', href: 'skills' },
  { name: 'About Me', href: 'about' },
  //   { name: 'Projects', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export function Header() {
  return (
    <header className="px-6 z-[99999] fixed top-0 left-0 w-full bg-body border-b border-zinc-50/20">
      <div className="mx-auto w-[65rem] py-3 max-w-full flex justify-between items-center gap-6">
        <HomeButton />
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavigationButton href={item.href} sectionName={item.name} />
              </li>
            ))}
          </ul>
          <div className="h-6 border border-gray-600" />
          <button className="px-4 rounded-xl py-[0.375rem] hover:bg-gray-50 bg-gray-200 text-gray-900 transition-colors text-base font-medium">
            Download CV
          </button>
        </nav>
      </div>
    </header>
  )
}
