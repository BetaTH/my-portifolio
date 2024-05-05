import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconDeploy } from '@/components/svg-components/icon-deploy'
import { IconGit } from '@/components/svg-components/icon-git'
import { cn } from '@/lib/utils/cn'

interface ProjectCardProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

export function ProjectCard({
  className,
  variant = 'primary',
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'w-full p-6 rounded-xl border flex gap-9 h-[21rem] items-center 2md:h-[40.25rem] sm:h-[43.25rem] 2md:flex-col ',
        className,
        {
          'border-gray-200 ': variant === 'primary',
          'bg-gray-700 flex-row-reverse border-transparent':
            variant === 'secondary',
        },
      )}
    >
      <div className="flex-shrink-0 h-full w-[22.5rem] 2md:h-[17rem] sm:w-full rounded-xl bg-white" />
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex flex-col gap-4 sm:gap-[0.875rem]">
          <span className="text-primary font-semibold text-lg/5">Backend</span>
          <h4 className="text-title text-3xl/8 ">1 - Project 01</h4>
          <P className="sm:tracking-[0em] line-clamp-[8]">
            {` A React component library for building consistent, high-quality user interfaces. The library provides components based on modern, accessible design patterns, enabling developers to quickly build beautiful, responsive web apps. The components are highly customizable via a system of design tokens and themes. This allows easily adapting the look and feel of components to suit any project's needs. Built with a focus on performance and accessibility, React Design System is a great choice for teams wanting to speed up development with reusable, production-ready components. `}
          </P>
        </div>
        <div className="flex gap-5 pt-4 2sm:pt-[0.875rem]">
          <LinkButton href="/" className="2md:text-lg/6 text-title">
            <IconGit className="w-5 h-5" />
            Code
          </LinkButton>
          <LinkButton href="/" className="2md:text-lg/6 text-title">
            <IconDeploy className="w-5 h-5" />
            Deploy
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
