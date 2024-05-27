'use client'

import { MenuActiveIcon } from '@/components/svg-components/menu-active-icon'
import { MenuIcon } from '@/components/svg-components/menu-icon'
import { cn } from '@/lib/utils/cn'

interface MenuButtonProps {
  isActive: boolean
  toggleMenu: () => void
}

export function MenuButton({ isActive, toggleMenu }: MenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className="relative size-8 hidden justify-center items-center 2md:flex 2md:flex-col"
    >
      <MenuIcon
        className={cn(
          'dark:text-gray-50 text-body transition-all absolute opacity-1 size-full',
          { 'opacity-0 rotate-45': isActive },
        )}
      />
      <MenuActiveIcon
        className={cn(
          'text-primary transition-all -rotate-45 absolute opacity-0 size-full',
          { 'opacity-100 rotate-0': isActive },
        )}
      />
    </button>
  )
}
