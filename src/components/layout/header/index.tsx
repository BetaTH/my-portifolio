'use client'
import { HomeButton } from '@/components/buttons/home-button'
import { MenuButton } from '@/components/buttons/menu-button'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Skills', href: 'skills' },
  { name: 'About Me', href: 'about' },
  //   { name: 'Projects', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export function Header() {
  const [isActive, setIsActive] = useState(false)
  const toggleMenu = () => {
    setIsActive(!isActive)
    document.body.classList.toggle('overflow-hidden')
  }
  return (
    <>
      <div
        className={cn(
          'bg-black/50 backdrop-blur-md 2sm:block hidden z-[500] right-0 bottom-0 transition-all duration-300 fixed top-0 left-0 pointer-events-auto opacity-0 invisible',
          { 'opacity-100 visible': isActive },
        )}
      />
      <header className="px-6 z-[1000] fixed top-0 left-0 w-full bg-body border-b border-zinc-50/20">
        <div className="mx-auto w-[65rem] py-3 max-w-full flex justify-between items-center gap-6 2sm:gap-0 2sm:flex-col">
          <div className="flex w-fit 2sm:w-full justify-between items-center">
            <HomeButton />
            <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
          </div>
          <div
            className={cn(
              'transition-all flex duration-300 2sm:h-96 overflow-hidden ',
              {
                '2sm:h-0': !isActive,
              },
            )}
          >
            <nav
              className={`flex gap-6 items-center 2sm:w-full 2sm:flex-col 2sm:gap-9 justify-center 2sm:h-96`}
            >
              <ul className="flex gap-6 2sm:flex-col items-center justify-center">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      onClick={toggleMenu}
                      href={`#${item.href}`}
                      className="text-gray-dark-600 font-medium text-base 2sm:text-2xl hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="h-6 border border-gray-600 2sm:h-0 2sm:w-[10rem]" />
              <button className="px-4 sm:rounded-lg rounded-xl 2sm:text-2xl py-[0.375rem] hover:bg-gray-50 bg-gray-200 text-gray-900 transition-colors text-base font-medium">
                Download CV
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
