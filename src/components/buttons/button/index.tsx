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
  disabled,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      disabled={disabled}
      className={cn(
        'px-4 flex items-center disabled:bg-gray-200/50 justify-center gap-1 sm:rounded-lg rounded-xl 2md:text-2xl py-[0.375rem] hover:bg-gray-50 bg-gray-200 text-gray-700 transition-all text-base font-medium duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
