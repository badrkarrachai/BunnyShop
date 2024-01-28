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
      screens: {
        'phone': '744px',
        'monitor': '1212px',
        'nav':'783px',
         'new':'1212px',
        'prod1280':'1280px',
        'prod1880':'1880px',
        'navBarProtect':'1261px',
        'cour1':'1483px',
        'cour2':'1281px',
        'cour3':'850px',
        'cour4':'1018px',
        'cour5':'400px',
        


      },
      boxShadow: {
        'new1': '-3px 3px 15px -3px rgb(0 0 0 / 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        DownToUp: {
        '0%': { transform: 'translateY(20%)', opacity: 0},
        '100%': { transform: 'translateY(0%)',opacity: 1},
        },
        Fade: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
          }
      },
      animation: {
        DownToUp: 'DownToUp 0.4s ease-in-out forwards',
        Fade: 'Fade 0.4s ease-in-out forwards'
      },
    
    },
  },
  plugins: [],
})

export default config
