import { LinkButton } from '@/components/buttons/link-button'
import { P } from '@/components/layout/paragraph'
import { IconGit } from '@/components/svg-components/icon-git'

export function ProjectInDevelopmentCard() {
  return (
    <div className="w-96 h-44 border flex flex-col border-gray-200 rounded-lg p-4">
      <h4 className=" text-xl/5 text-title">Name of Project</h4>
      <P className="mt-3">
        As a Senior Software Engineer at Google, I played a pivotal role in
        developing innovative solutions for core search algorithms.
      </P>
      <LinkButton href="/" className="mt-auto">
        <IconGit className="w-5 h-5" />
        Code
      </LinkButton>
    </div>
  )
}
