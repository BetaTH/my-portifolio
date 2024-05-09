'use client'
import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconDeploy } from '@/components/svg-components/icon-deploy'
import { IconGit } from '@/components/svg-components/icon-git'
import { Locale, useScopedI18n } from '@/lib/locale/client'
import { Project } from '@/lib/types/project'
import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

interface ProjectCardProps {
  className?: string
  variant?: 'primary' | 'secondary'
  project: Project
  locale: Locale
}

export function ProjectCard({
  className,
  variant = 'primary',
  project,
  locale,
}: ProjectCardProps) {
  const t = useScopedI18n('pages.home.projects')
  return (
    <div
      className={cn(
        'group p-3 mx-2 relative rounded-xl border flex gap-4 items-center h-[31.75rem] flex-col ',
        className,
        {
          'border-gray-200 ': variant === 'primary',
          'group bg-gray-700 border-transparent': variant === 'secondary',
        },
      )}
    >
      <div className="overflow-hidden flex-shrink-0 relative h-[12rem] w-full rounded-xl">
        <Image
          alt={`${project.title} ${t('project-image-alt')}`}
          src={project.img}
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      <div className="flex flex-col h-full w-full gap-5 sm:gap-[0.875rem]">
        <div className="flex flex-col gap-3 sm:gap-[0.875rem]">
          <span className="text-primary font-semibold text-lg/5">
            {project.stack}
          </span>
          <h4 className="text-title text-3xl/8 ">{project.title}</h4>
        </div>

        <P className="text-sm/4 sm:text-base/4 sm:tracking-[0em] line-clamp-[9]">
          {project.description[locale]}
        </P>

        <div className="flex gap-5 mt-auto">
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
