import { SocialButton } from '@/components/buttons/social-button'
import { IconDiscord } from '@/components/svg-components/icon-discord'
import { IconGitHub } from '@/components/svg-components/icon-github'
import { IconLinkedIn } from '@/components/svg-components/icon-linkedin'
import { cn } from '@/lib/utils/cn'
import { HTMLAttributes } from 'react'

interface SocialCardProps extends HTMLAttributes<HTMLDivElement> {
  buttonClassName?: string
}

export function SocialCard({ className, buttonClassName }: SocialCardProps) {
  return (
    <div className={cn('flex gap-2', className)}>
      <SocialButton
        icon={IconGitHub}
        href="https://github.com/BetaTH"
        className={buttonClassName}
      />
      <SocialButton
        icon={IconLinkedIn}
        href="https://www.linkedin.com/in/thielson-almendra/"
        className={buttonClassName}
      />
      <SocialButton
        icon={IconDiscord}
        href="https://discord.com/users/thielsonalmendra"
        className={buttonClassName}
      />
    </div>
  )
}
