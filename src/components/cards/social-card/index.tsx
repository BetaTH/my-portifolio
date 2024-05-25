import { SocialButton } from '@/components/buttons/social-button'
import { IconDiscord } from '@/components/svg-components/icon-discord'
import { IconGitHub } from '@/components/svg-components/icon-github'
import { IconLinkedIn } from '@/components/svg-components/icon-linkedin'
import { cn } from '@/lib/utils/cn'
import { HTMLAttributes } from 'react'

interface SocialCardProps extends HTMLAttributes<HTMLDivElement> {}

export function SocialCard({ className }: SocialCardProps) {
  return (
    <div className={cn('flex gap-2 opacity-0', className)}>
      <SocialButton icon={IconGitHub} href="https://github.com/BetaTH" />
      <SocialButton
        icon={IconLinkedIn}
        href="https://www.linkedin.com/in/thielson-almendra/"
      />
      <SocialButton
        icon={IconDiscord}
        href="https://discord.com/users/thielsonalmendra"
      />
    </div>
  )
}
