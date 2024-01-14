import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");


const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:()=>( {
        DownToUp: {
        '0%': { transform: 'translateY(47%)', 
                opacity: 0},
        '100%': { transform: 'translateY(0%)',
                  opacity: 1},
      },
      animation: {
        DownToUp: 'DownToUp 0.4s ease-in-out forwards',
    
      }
    })
    },
  },
  plugins: [],
})

export default config
