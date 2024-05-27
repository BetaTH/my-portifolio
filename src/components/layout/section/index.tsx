import { cn } from '@/lib/utils/cn'
import { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  title: string
  className?: string
}
export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'pt-20 pb-8 flex flex-col w-full gap-10 items-center',
        className,
      )}
    >
      <div className="w-full flex items-center gap-16 sm:gap-8">
        <div className="w-full overflow-hidden">
          <div className="w-full h-[1.5px] rounded-full bg-primary animate-move-from-left delay-200 fill-mode-forwards translate-x-full" />
        </div>
        <div className="animate-opacity delay-200 fill-mode-forwards opacity-0 flex-shrink-0">
          <h2 className="dark:text-title text-body text-[2rem]/[2.125rem] font-medium duration-300">
            {title}
          </h2>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-full h-[1.5px] rounded-full bg-primary animate-move-from-right delay-200 fill-mode-forwards -translate-x-full" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-10 items-center animate-fade-in-up delay-400 fill-mode-forwards opacity-0">
        {children}
      </div>
    </section>
  )
}
