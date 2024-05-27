import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  href?: string
}

export function LinkButton({
  children,
  className,
  asChild,
  href = '',
  ...props
}: LinkButtonProps) {
  const Component = asChild ? Slot : Link
  return (
    <Component
      href={href}
      {...props}
      className={cn(
        'dark:text-body-text text-body-text-light flex items-center gap-2 font-medium text-base 2md:text-2xl hover:text-primary transition-colors',
        className,
      )}
    >
      {children}
    </Component>
  )
}
