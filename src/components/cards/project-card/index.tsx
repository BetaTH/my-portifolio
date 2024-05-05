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
        'w-full p-6 rounded-xl flex gap-9 h-[18.75rem]',
        className,
        {
          'border-gray-200 border': variant === 'primary',
          'bg-gray-700 flex-row-reverse': variant === 'secondary',
        },
      )}
    >
      <div className="min-w-[22.5rem] h-full rounded-xl bg-white" />
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-semibold text-lg/5">Backend</span>
          <h4 className="text-title text-3xl/8">1 - Project 01</h4>
          <P>
            {`As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.`}
          </P>
        </div>
        <div className="flex gap-5">
          <LinkButton href="/">
            <IconGit className="w-5 h-5" />
            Code
          </LinkButton>
          <LinkButton href="/">
            <IconDeploy className="w-5 h-5" />
            Deploy
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
