import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { ElementType } from 'react'

interface SocialButtonProps {
  icon: ElementType
  href: string
  className?: string
}

export function SocialButton({
  href,
  icon: Icon,
  className,
}: SocialButtonProps) {
  return (
    <Link href={href} target="_blank">
      <Icon
        className={cn(
          'size-8 dark:text-gray-500 text-gray-600 dark:hover:text-primary hover:text-primary transition-colors',
          className,
        )}
      />
    </Link>
  )
}
