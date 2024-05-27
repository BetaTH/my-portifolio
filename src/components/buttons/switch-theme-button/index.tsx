'use client'
import { IconMoon } from '@/components/svg-components/icon-moon'
import { IconSun } from '@/components/svg-components/icon-sun'
import { cn } from '@/lib/utils/cn'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const toggleTheme = {
  dark: 'light',
  light: 'dark',
}

interface SwitchThemeProps {
  className?: string
}

export function SwitchTheme({ className }: SwitchThemeProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      disabled={!mounted}
      className={cn(
        'dark:bg-gray-200 bg-gray-700 h-fit p-1 w-fit rounded-full ',
        className,
      )}
      onClick={() =>
        resolvedTheme &&
        setTheme(toggleTheme[resolvedTheme as 'dark' | 'light'])
      }
    >
      <div className="w-full flex items-center z-0 justify-center relative">
        <IconSun className="size-4 2md:size-6 m-1 2md:m-2 dark:text-gray-600 text-violet-500" />
        <IconMoon className="size-4 2md:size-6 m-1 2md:m-2 text-gray-200 dark:text-violet-500" />
        <div className="size-6 2md:size-10 -z-10 bg-title dark:bg-body left-0 rounded-full absolute transition-transform duration-300 dark:translate-x-full" />
      </div>
    </button>
  )
}
