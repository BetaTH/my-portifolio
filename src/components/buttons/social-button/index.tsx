import Link from 'next/link'
import { ElementType } from 'react'

interface SocialButtonProps {
  icon: ElementType
  href: string
}

export function SocialButton({ href, icon: Icon }: SocialButtonProps) {
  return (
    <Link href={href} target="_blank">
      <Icon className="size-8 text-gray-500 hover:text-primary transition-colors" />
    </Link>
  )
}
