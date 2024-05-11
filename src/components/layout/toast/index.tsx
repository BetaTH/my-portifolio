import { cn } from '@/lib/utils/cn'

interface CustomToastProps {
  title: string
  message?: string
  feedback?: 'success' | 'error'
}

export function CustomToast({ title, message, feedback }: CustomToastProps) {
  return (
    <div
      className={cn(
        'p-2 rounded-lg bg-gray-800/90 border w-60 border-gray-200/50',
        {
          'bg-success': feedback === 'success',
          'bg-error': feedback === 'error',
        },
      )}
    >
      <p className="text-xl">{title}</p>
      {message && <span className="text-sm/4 font-sans">{message}</span>}
    </div>
  )
}
