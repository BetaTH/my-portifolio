import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconDeploy } from '@/components/svg-components/icon-deploy'
import { IconGit } from '@/components/svg-components/icon-git'
import { Locale, getScopedI18n } from '@/lib/locale/server'
import { Project } from '@/lib/types/project'
import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

interface ProjectCardProps {
  className?: string
  variant?: 'primary' | 'secondary'
  project: Project
  locale: Locale
}

export async function ProjectCard({
  className,
  variant = 'primary',
  project,
  locale,
}: ProjectCardProps) {
  const t = await getScopedI18n('pages.home.projects')
  return (
    <div
      className={cn(
        'w-full p-6 rounded-xl border flex gap-9 h-[21rem] items-center 2md:h-[40.25rem] 2md:flex-col ',
        className,
        {
          'border-gray-200 ': variant === 'primary',
          'bg-gray-700 flex-row-reverse border-transparent':
            variant === 'secondary',
        },
      )}
    >
      <div className="overflow-hidden flex-shrink-0 relative h-full w-[22.5rem] 2md:w-[25rem] 2md:h-[17rem] sm:!w-full rounded-xl">
        <Image
          alt={`${project.title} ${t('project-image-alt')}`}
          src={project.img}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col h-full w-full justify-center gap-[1.7rem] sm:gap-[0.875rem]">
        <div className="flex flex-col gap-4 sm:gap-[0.875rem]">
          <span className="text-primary font-semibold text-lg/5">
            {project.stack}
          </span>
          <h4 className="text-title text-3xl/8 ">{project.title}</h4>
        </div>

        <P className="sm:tracking-[0em] line-clamp-[7] sm:line-clamp-[8]">
          {project.description[locale]}
        </P>

        <div className="flex gap-5 sm:mt-auto">
          <LinkButton
            href={project.linkCode}
            target="_blank"
            className="2md:text-lg/6 text-title"
          >
            <IconGit className="w-5 h-5" />
            {t('buttons.code')}
          </LinkButton>
          {project.linkDeploy && (
            <LinkButton
              target="_blank"
              href={project.linkDeploy}
              className="2md:text-lg/6 text-title"
            >
              <IconDeploy className="w-5 h-5" />
              {t('buttons.deploy')}
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  )
}
