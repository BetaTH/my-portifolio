'use client'
import { useState } from 'react'
import { Button } from '../button'
import { availableLanguages } from '@/lib/locale'
import { useChangeLocale, useCurrentLocale } from '@/lib/locale/client'
import { ChevronDown } from '@/components/svg-components/chevron-down'
import { cn } from '@/lib/utils/cn'

export function LangButton() {
  const [isOpen, setIsOpen] = useState(false)
  const currentLanguage = useCurrentLocale()
  const toggleLanguage = useChangeLocale()
  const languages = Object.entries(availableLanguages)

  return (
    <div className="relative z-50 w-14 2md:w-[4.5rem] sm:w-[5rem] min-h-full">
      <div
        onMouseEnter={() => !isOpen && setIsOpen(true)}
        onMouseLeave={() => isOpen && setIsOpen(false)}
        className={cn(
          'transition-all duration-300 w-fit overflow-hidden absolute top-0 left-0 z-10 bg-gray-200 sm:rounded-lg rounded-xl',
        )}
        style={{ height: `${isOpen ? languages.length * 100 : 100}%` }}
      >
        {Object.entries(availableLanguages)
          .sort(([, { id }]) => (id === currentLanguage ? -1 : 1))
          .map(([key, { id }]) => (
            <Button
              key={id}
              className="w-full justify-start px-2 sm:px-3"
              onClick={() => {
                isOpen && setIsOpen(false)
                id !== currentLanguage && toggleLanguage(id)
              }}
            >
              <span>{key}</span>
              <ChevronDown
                className={cn('transition-transform duration-300', {
                  '[transform:rotateX(3.142rad)]': isOpen,
                  hidden: id !== currentLanguage,
                })}
              />
            </Button>
          ))}
      </div>
    </div>
  )
}
