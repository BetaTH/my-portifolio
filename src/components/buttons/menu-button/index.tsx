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
    <div
      onClick={toggleMenu}
      className="relative size-8 justify-center items-center 2sm:flex 2sm:flex-col hidden"
    >
      <MenuIcon
        className={cn(
          'text-gray-50 transition-all absolute opacity-1 size-full',
          { 'opacity-0 rotate-45': isActive },
        )}
      />
      <MenuActiveIcon
        className={cn(
          'text-primary transition-all -rotate-45 absolute opacity-0 size-full',
          { 'opacity-100 rotate-0': isActive },
        )}
      />
    </div>
  )
}
