import { cn } from '@/lib/utils/cn'
import { PropsWithChildren } from 'react'

interface OverlayProps extends PropsWithChildren {
  isActive: boolean
  toggle?: () => void
  className?: string
}
export function Overlay({
  isActive,
  toggle,
  className,
  children,
}: OverlayProps) {
  return (
    <div
      className={cn(
        'bg-black/50 backdrop-blur-md hidden items-center justify-center right-0 bottom-0 transition-all duration-300 fixed top-0 left-0 pointer-events-auto opacity-0 invisible',
        { 'opacity-100 visible': isActive },
        className,
      )}
      onClick={() => toggle && toggle()}
    >
      {children}
    </div>
  )
}
