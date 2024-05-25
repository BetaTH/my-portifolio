import { cn } from '@/lib/utils/cn'
import { PropsWithChildren } from 'react'
import { AnimatedSection } from '../animated-section'

interface SectionProps extends PropsWithChildren {
  id: string
  title: string
  className?: string
}
export function Section({ id, title, children, className }: SectionProps) {
  return (
    <AnimatedSection>
      <section
        id={id}
        className={cn(
          'pt-20 pb-8 flex flex-col w-full gap-10 items-center',
          className,
        )}
      >
        <div className="w-full flex items-center gap-16 sm:gap-8">
          <div className="w-full border border-primary" />
          <h2 className="text-title text-[2rem]/[2.125rem] flex-shrink-0 font-medium">
            {title}
          </h2>
          <div className="w-full border border-primary" />
        </div>
        {children}
      </section>
    </AnimatedSection>
  )
}
