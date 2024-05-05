import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconGit } from '@/components/svg-components/icon-git'

export function ProjectInDevelopmentCard() {
  return (
    <div className="w-96 max-w-full border flex flex-shrink-0 flex-col border-gray-200 rounded-lg p-4">
      <h4 className="text-xl/5 text-title 2md:text-2xl/6">Name of Project</h4>
      <P className="mt-3">
        As a Senior Software Engineer at Google, I played a pivotal role in
        developing innovative solutions for core search algorithms.
      </P>
      <LinkButton href="/" className="pt-2 mt-auto 2md:text-lg">
        <IconGit className="w-5 h-5" />
        Code
      </LinkButton>
    </div>
  )
}
