import { cn } from '@/lib/utils/cn'
import { HtmlHTMLAttributes } from 'react'

interface PProps extends HtmlHTMLAttributes<HTMLParagraphElement> {}
export function P({ children, className }: PProps) {
  return (
    <p
      className={cn(
        'dark:text-body-text text-body-text-light text-base/5 font-sans tracking-[0.02em]',
        className,
      )}
    >
      {children}
    </p>
  )
}
