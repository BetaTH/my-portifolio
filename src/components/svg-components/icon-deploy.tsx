import { SVGProps } from 'react'

export function IconDeploy({
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 16l4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
