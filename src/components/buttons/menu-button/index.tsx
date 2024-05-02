'use client'

import { MenuActiveIcon } from '@/components/svg-components/menu-active-icon'
import { MenuIcon } from '@/components/svg-components/menu-icon'

interface MenuButtonProps {
  isActive: boolean
  toggleMenu: () => void
}

export function MenuButton({ isActive, toggleMenu }: MenuButtonProps) {
  return (
    <div
      onClick={toggleMenu}
      className="relative size-8 justify-center items-center 2sm:flex 2sm:flex-col hidden"
    >
      <MenuIcon
        className={`text-gray-50 transition-all absolute opacity-1 size-full ${isActive && 'opacity-0 rotate-45'}`}
      />
      <MenuActiveIcon
        className={`text-primary transition-all -rotate-45 absolute opacity-0 size-full ${isActive && 'opacity-100 rotate-0'}`}
      />
    </div>
  )
}
