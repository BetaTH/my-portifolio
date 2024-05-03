'use client'
import { Button } from '@/components/buttons/button'
import { HomeButton } from '@/components/buttons/home-button'
import { LangButton } from '@/components/buttons/lang-button'
import { MenuButton } from '@/components/buttons/menu-button'
import { useScopedI18n } from '@/lib/locale/client'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation: ['skills', 'about', 'contact'] = [
  'skills',
  'about',
  'contact',
]

export function Header() {
  const t = useScopedI18n('header')
  const [isActive, setIsActive] = useState(false)
  const toggleMenu = () => {
    if (window.innerWidth < 729) {
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    isActive
      ? document.body.classList.add('2sm:overflow-hidden')
      : document.body.classList.remove('2sm:overflow-hidden')
  }, [isActive])
  return (
    <>
      <div
        className={cn(
          'bg-black/50 backdrop-blur-md 2sm:block hidden z-[500] right-0 bottom-0 transition-all duration-300 fixed top-0 left-0 pointer-events-auto opacity-0 invisible',
          { 'opacity-100 visible': isActive },
        )}
        onClick={toggleMenu}
      />
      <header className="px-6 z-[1000] fixed top-0 left-0 w-full bg-body border-b border-zinc-50/20">
        <div className="mx-auto w-[65rem] py-3 max-w-full flex justify-between items-center gap-6 2sm:gap-0 2sm:flex-col">
          <div className="flex w-fit 2sm:w-full justify-between items-center">
            <HomeButton onClick={() => isActive && setIsActive(false)} />
            <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
          </div>
          <div
            className={cn(
              'transition-all flex duration-300 2sm:h-96 2sm:overflow-hidden ',
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
                  <li key={item}>
                    <Link
                      onClick={toggleMenu}
                      href={`#${item}`}
                      className="text-gray-dark-600 font-medium text-base 2sm:text-2xl hover:text-primary transition-colors"
                    >
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="h-6 border border-gray-600 2sm:h-0 2sm:w-full" />
              <div className="flex gap-6">
                <LangButton />
                <Button>{t('download')}</Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
