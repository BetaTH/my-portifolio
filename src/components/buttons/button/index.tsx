import { cn } from '@/lib/utils/cn'
import { Slot } from '@radix-ui/react-slot'
import { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  asChild?: boolean
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
        'px-4 flex items-center justify-center gap-1 sm:rounded-lg rounded-xl 2sm:text-2xl py-[0.375rem] hover:bg-gray-50 bg-gray-200 text-gray-900 transition-colors text-base font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
