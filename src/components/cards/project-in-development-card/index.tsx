import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconGit } from '@/components/svg-components/icon-git'
import { Locale, getScopedI18n } from '@/lib/locale/server'
import { ProjectInDevelopment } from '@/lib/types/project-in-development'

interface ProjectInDevelopmentCardProps {
  projectInDevelopment: ProjectInDevelopment
  locale: Locale
}

export async function ProjectInDevelopmentCard({
  projectInDevelopment,
  locale,
}: ProjectInDevelopmentCardProps) {
  const t = await getScopedI18n('pages.home.projects')
  return (
    <div className="w-96 max-w-full h-40 bg-body border flex flex-shrink-0 flex-col border-gray-200 rounded-lg p-4">
      <h4 className="text-xl/5 text-title ">{projectInDevelopment.title}</h4>
      <P className="mt-3 line-clamp-3">
        {projectInDevelopment.description[locale]}
      </P>
      <LinkButton href="/" className="pt-2 mt-auto 2md:text-lg text-title">
        <IconGit className="w-5 h-5" />
        {t('buttons.code')}
      </LinkButton>
    </div>
  )
}
