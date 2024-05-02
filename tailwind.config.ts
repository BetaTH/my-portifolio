import { theme } from './src/lib/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...theme,
      fontFamily: {
        sans: ['var(--font-fira-sans)'],
      },
      screens: {
        '2md': { max: '859px' },
        // => @media (max-width: 859px) { ... }
        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }
        '2sm': { max: '729px' },
        // => @media (max-width: 729px) { ... }
        sm: { max: '641px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
export default config
