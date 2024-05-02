'use client'

import Link from 'next/link'

export function NavigationButton({
  href,
  sectionName,
}: {
  href: string
  sectionName: string
}) {
  return (
    <Link
      href={`#${href}`}
      className="text-gray-dark-600 font-medium text-base hover:text-primary transition-colors"
    >
      {sectionName}
    </Link>
  )
}
