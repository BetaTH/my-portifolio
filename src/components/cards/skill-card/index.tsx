import Image from 'next/image'

interface SkillCardProps {
  icon: string
  name: string
}
export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="shadow-sm dark:shadow-white/10 size-[7.4rem] gap-3 dark:bg-body bg-gray-50 flex flex-col items-center justify-center p-[0.625rem] border border-gray-200 dark:border-gray-700 rounded">
      <div className="size-[3.125rem] relative">
        <Image
          src={icon}
          alt={`${name} icon`}
          fill
          className="invert dark:invert-0"
        />
      </div>
      <span className="text-center text-base/4 dark:text-title text-body">
        {name}
      </span>
    </div>
  )
}
