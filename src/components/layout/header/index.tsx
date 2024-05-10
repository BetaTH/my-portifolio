'use client'
import { Button } from '@/components/buttons/button'
import { HomeButton } from '@/components/buttons/home-button'
import { LangButton } from '@/components/buttons/lang-button'
import { LinkButton } from '@/components/buttons/link-button'
import { MenuButton } from '@/components/buttons/menu-button'
import { IconDownload } from '@/components/svg-components/icon-download'
import { useScopedI18n } from '@/lib/locale/client'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation: ['skills', 'about', 'projects', 'contact'] = [
  'skills',
  'about',
  'projects',
  'contact',
]

export function Header({ isAdmin = false }: { isAdmin?: boolean }) {
  const t = useScopedI18n('header')
  const [isActive, setIsActive] = useState(false)
  const toggleMenu = () => {
    if (window.innerWidth < 859) {
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    isActive
      ? document.body.classList.add('2md:overflow-hidden')
      : document.body.classList.remove('2md:overflow-hidden')
  }, [isActive])
  return (
    <>
      <div
        className={cn(
          'bg-black/50 backdrop-blur-md 2md:block hidden z-[500] right-0 bottom-0 transition-all duration-300 fixed top-0 left-0 pointer-events-auto opacity-0 invisible',
          { 'opacity-100 visible': isActive },
        )}
        onClick={toggleMenu}
      />
      <header className="h-[4.75rem] items-center flex px-6 z-[1000] fixed top-0 left-0 w-full bg-body border-b border-zinc-50/20">
        <div className="mx-auto w-[65rem] py-3 max-w-full flex justify-between items-center gap-6 2md:gap-0 2md:flex-col">
          <div className="flex w-fit 2md:w-full justify-between items-center">
            <HomeButton onClick={() => isActive && setIsActive(false)} />
            <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
          </div>
          <div
            className={cn(
              'transition-all flex duration-300 2md:h-[30rem] 2md:overflow-hidden ',
              {
                '2md:h-0': !isActive,
              },
            )}
          >
            <nav
              className={`flex gap-6 items-center 2md:w-full 2md:flex-col 2md:gap-9 justify-center 2md:h-[30rem]`}
            >
              <ul className="flex gap-6 2md:flex-col items-center justify-center">
                {navigation.map((item) => (
                  <li key={item}>
                    <LinkButton onClick={toggleMenu} href={`/#${item}`}>
                      {t(item)}
                    </LinkButton>
                  </li>
                ))}
              </ul>
              {!isAdmin && (
                <>
                  <div className="h-6 border border-gray-600 2md:h-0 2md:w-full" />
                  <div className="flex gap-6">
                    <LangButton />
                    <Button asChild>
                      <Link href={t('resumeLink')} target="_blanck">
                        {t('resume')}
                        <IconDownload className="size-4 2md:size-5" />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
