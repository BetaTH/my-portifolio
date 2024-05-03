'use client'
import Link from 'next/link'
import { Logo } from '../../svg-components/logo-image'
import { HtmlHTMLAttributes } from 'react'

interface HomeButtonProps extends HtmlHTMLAttributes<HTMLAnchorElement> {}

export function HomeButton({ ...props }: HomeButtonProps) {
  return (
    <Link href={'#home'} {...props}>
      <Logo className="w-[5.5rem] h-9 text-gray-50 hover:text-primary transition-colors" />
    </Link>
  )
}
