import { SVGProps } from 'react'

export function Logo({
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={100}
      height={35}
      viewBox="0 0 100 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.374 7.887l2.464 3.893L5.25 18.548l11.59 6.643-2.554 4.017-13.91-8.642v-4l14-8.68zM32.2 9.494v20.268h-5.857V9.494h-6.946V5.012h20.036l-.608 4.482H32.2zm20.808 20.268V19.333h-6v10.429H41.15V5.012h5.857v9.5h6v-9.5h5.857v24.75h-5.857zm27.347-25.16L99.64 16.53v4.035l-13.91 8.643-2.555-3.839 11.608-6.821-16.929-9.893 2.5-4.054zm-12.09 29.16l-4.41-2.018L78.872.584 83.247 2.6l-14.982 31.16z"
        fill={color}
      />
    </svg>
  )
}
