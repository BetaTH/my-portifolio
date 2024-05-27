import { cn } from '@/lib/utils/cn'
import { useId } from 'react'

interface DotPatternProps {
  width?: string | number
  height?: string | number
  x?: string | number
  y?: string | number
  cx?: string | number
  cy?: string | number
  cr?: string | number
  className?: string
  [key: string]: string | number | undefined
}
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId()
  const id2 = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full dark:fill-neutral-400/20 fill-neutral-400/40',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 h-full w-full dark:fill-primary/50 fill-primary',
          'animate-dot-pattern-shimmer',
          '[mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]',
          '[mask-size:30%_100%]',
          '2md:[mask-size:40%_100%]',
          '[mask-repeat:no-repeat]',
        )}
      >
        <defs>
          <pattern
            id={id2}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill={`url(#${id2})`}
        />
      </svg>
    </svg>
  )
}
