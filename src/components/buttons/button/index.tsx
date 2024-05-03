import { cn } from '@/lib/utils/cn'
import { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
}
export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 flex items-center justify-center gap-1 sm:rounded-lg rounded-xl 2sm:text-2xl py-[0.375rem] hover:bg-gray-50 bg-gray-200 text-gray-900 transition-colors text-base font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
