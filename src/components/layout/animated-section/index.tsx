'use client'
import { cn } from '@/lib/utils/cn'
import { useInView } from 'framer-motion'
import { PropsWithChildren, useRef } from 'react'

interface AnimatedSectionProps extends PropsWithChildren {
  className?: string
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s ease-out 0s',
      }}
      className={cn('', className)}
    >
      {children}
    </div>
  )
}
