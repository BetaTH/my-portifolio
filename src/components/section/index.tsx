import { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  title: string
}
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="pt-20 pb-8 flex flex-col w-full">
      <div className="w-full flex items-center gap-16">
        <div className="w-full border border-primary" />
        <h2 className="text-title text-[2rem]/[2.125rem] flex-shrink-0">
          {title}
        </h2>
        <div className="w-full border border-primary" />
      </div>
      {children}
    </section>
  )
}
