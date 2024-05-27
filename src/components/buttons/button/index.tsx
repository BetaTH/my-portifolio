import { cn } from '@/lib/utils/cn'
import { Slot } from '@radix-ui/react-slot'
import { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  asChild?: boolean
  disabled?: boolean
}
export function Button({
  className,
  asChild,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={cn(
        'px-4 flex items-center relative disabled:bg-gray-200/50 disabled:cursor-not-allowed justify-center gap-1 sm:rounded-lg rounded-xl 2md:text-2xl py-[0.375rem] dark:hover:bg-gray-50 hover:bg-gray-600 bg-gray-700 dark:bg-gray-200 text-gray-50 dark:text-gray-700 transition-colors text-base font-medium duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
