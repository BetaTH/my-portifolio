import { SocialButton } from '@/components/social-button'
import { IconDiscord } from '@/components/svg-components/icon-discord'
import { IconGitHub } from '@/components/svg-components/icon-github'
import { IconLinkedIn } from '@/components/svg-components/icon-linkedin'

export function SocialCard() {
  return (
    <div className="flex gap-2">
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
