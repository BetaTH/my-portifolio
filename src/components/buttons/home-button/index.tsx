'use client'
import Link from 'next/link'
import { Logo } from '../../svg-components/logo-image'

export function HomeButton() {
  return (
    <Link href={'#home'}>
      <Logo className="w-[5.5rem] h-9 text-gray-50 hover:text-primary transition-colors" />
    </Link>
  )
}
