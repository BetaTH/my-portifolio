import { ComponentProps } from 'react'
import { Button } from '../button'
import { cn } from '@/lib/utils/cn'
import { Loading } from '@/components/svg-components/loading'

interface ButtonLoadingProps extends ComponentProps<typeof Button> {
  isLoading: boolean
}

export function ButtonLoading({
  isLoading,
  children,
  className,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button
      className={cn(
        '',
        {
          '*:invisible *:dark:invisible dark:text-transparent text-transparent':
            isLoading,
        },
        className,
      )}
      {...props}
    >
      {children}
      <Loading
        className={cn(
          'absolute size-6 invisible text-gray-50 dark:text-gray-700',
          {
            '!visible': isLoading,
          },
        )}
      />
    </Button>
  )
}
