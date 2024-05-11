'use client'
import { Button } from '@/components/buttons/button'
import { LangButton } from '@/components/buttons/lang-button'
import { LinkButton } from '@/components/buttons/link-button'
import { MenuButton } from '@/components/buttons/menu-button'
import { IconDownload } from '@/components/svg-components/icon-download'
import { useScopedI18n } from '@/lib/locale/client'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Overlay } from '../overlay'
import { Logo } from '@/components/svg-components/logo-image'

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
      <Overlay
        isActive={isActive}
        toggle={toggleMenu}
        className="2md:block z-[50]"
      />
      <header className="z-[100] fixed top-0 left-0 w-full">
        <div className="items-center flex px-6 w-full bg-body border-b border-zinc-50/20">
          <div className="mx-auto w-[65rem] min-h-[4.75rem] 2md:min-h-[4.5rem] py-3 max-w-full flex justify-between items-center gap-6 2md:gap-0 2md:flex-col 2md:justify-center">
            <div className="flex w-fit 2md:w-full justify-between items-center">
              <Link
                href={'/#home'}
                onClick={() => isActive && setIsActive(false)}
              >
                <Logo className="w-[5.5rem] h-9 text-gray-50 hover:text-primary transition-colors" />
              </Link>
              <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
            </div>
            <div
              className={cn(
                'transition-all translate-x-0 2md:visible flex duration-300 2md:h-full 2md:overflow-hidden 2md:fixed 2md:top-0 2md:right-0 2md:w-[17.0625rem] 2md:bg-body 2md:-z-10',
                {
                  '2md:translate-x-full 2md:invisible': !isActive,
                },
              )}
            >
              <nav
                className={`flex gap-6 items-center 2md:w-full 2md:flex-col 2md:gap-9 justify-center 2md:justify-normal 2md:h-full 2md:mt-[4.5rem] 2md:pt-[5rem]`}
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
                    <div className="h-6 border border-gray-600 2md:h-0 2md:w-[75%]" />
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
        </div>
      </header>
    </>
  )
}
