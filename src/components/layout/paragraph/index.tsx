import { cn } from '@/lib/utils/cn'
import { HtmlHTMLAttributes } from 'react'

interface PProps extends HtmlHTMLAttributes<HTMLParagraphElement> {}
export function P({ children, className }: PProps) {
  return (
    <p
      className={cn(
        'text-body-text text-base/5 font-sans tracking-[0.02em] 2sm:text-lg',
        className,
      )}
    >
      {children}
    </p>
  )
}
