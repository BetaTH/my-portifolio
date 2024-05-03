'use client'
import { useCallback, useState } from 'react'
import { Button } from '../button'
import { availableLanguages } from '@/lib/locale'
import { useChangeLocale, useCurrentLocale } from '@/lib/locale/client'
import { ChevronDown } from '@/components/svg-components/chevron-down'
import { cn } from '@/lib/utils/cn'

export function LangButton() {
  const [isOpen, setIsOpen] = useState(false)
  const currentLanguage = useCurrentLocale()
  const toggleLanguage = useChangeLocale()
  const languageSelected = useCallback(
    () =>
      Object.entries(availableLanguages).reduce(
        (acc, [key, value]) => {
          if (value.id === currentLanguage) {
            acc = {
              name: key,
            }
          }
          return acc
        },
        {} as {
          name: string
        },
      ),
    [currentLanguage],
  )

  const { name } = languageSelected()
  return (
    <div className="relative z-50">
      <Button className="px-2 z-0">
        <span>{name}</span>
        <ChevronDown />
      </Button>
      <div
        onMouseEnter={() => !isOpen && setIsOpen(true)}
        onMouseLeave={() => isOpen && setIsOpen(false)}
        className={cn(
          'transition-all duration-300 w-full overflow-hidden absolute top-0 h-full left-0 z-10 bg-gray-200 sm:rounded-lg rounded-xl',
          { 'h-[200%] visible': isOpen },
        )}
      >
        {Object.entries(availableLanguages)
          .sort(([, { id }]) => (id === currentLanguage ? -1 : 1))
          .map(([key, { id }]) => (
            <Button
              key={id}
              className="w-full justify-start px-2"
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
