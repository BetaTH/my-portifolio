import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface LinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function LinkButton({ children, className, ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        'text-gray-dark-600 flex items-center gap-2 font-medium text-base 2md:text-2xl hover:text-primary transition-colors',
        className,
      )}
    >
      {children}
    </Link>
  )
}
