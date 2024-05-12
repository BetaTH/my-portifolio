import { cn } from '@/lib/utils/cn'

interface CustomToastProps {
  title: string
  message?: string
  feedback?: 'success' | 'error'
  isVisible: boolean
}

export function CustomToast({
  title,
  message,
  feedback,
  isVisible,
}: CustomToastProps) {
  return (
    <div
      className={cn(
        'p-2 sm:px-4 rounded-lg opacity-0 bg-gray-800/90 border w-60 border-gray-200/50',
        {
          'bg-success': feedback === 'success',
          'bg-error': feedback === 'error',
          'animate-slide-in-down opacity-100': isVisible,
          'animate-slide-out-up': !isVisible,
        },
      )}
    >
      <p className="text-xl">{title}</p>
      {message && <span className="text-sm/4 font-sans">{message}</span>}
    </div>
  )
}
