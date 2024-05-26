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
        'bg-gray-200 h-fit p-1 w-fit disabled:bg-gray-200/50 rounded-full',
        className,
      )}
      onClick={() =>
        resolvedTheme &&
        setTheme(toggleTheme[resolvedTheme as 'dark' | 'light'])
      }
    >
      <div className="w-full flex items-center z-0 justify-center relative">
        <IconSun
          className={cn(
            'size-4 m-1 transition-all duration-300 dark:text-gray-600 text-violet-500',
            {
              'text-gray-600 dark:text-gray-600': !mounted,
            },
          )}
        />
        <IconMoon
          className={cn(
            'size-4 m-1 transition-all duration-300 text-gray-600 dark:text-violet-500',
            {
              'text-gray-600 dark:text-gray-600': !mounted,
            },
          )}
        />
        <div
          className={cn(
            'size-6 -z-10 bg-body left-0 rounded-full hidden absolute transition-transform duration-300 dark:translate-x-full',
            {
              block: mounted,
            },
          )}
        />
      </div>
    </button>
  )
}
