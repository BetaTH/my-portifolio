import Image from 'next/image'

interface SkillCardProps {
  icon: string
  name: string
}
export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="size-[7.4rem] gap-3 flex flex-col items-center justify-center p-[0.625rem] border border-gray-200 rounded">
      <div className="size-[3.125rem] relative">
        <Image src={icon} alt={`${name} icon`} fill />
      </div>
      <span className="text-center text-base/4 text-title">{name}</span>
    </div>
  )
}
