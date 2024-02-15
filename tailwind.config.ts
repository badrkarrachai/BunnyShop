import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");
const { fontFamily } = require("tailwindcss/defaultTheme")


const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
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
        'footeritems':'547px',
        'to2':'854px',
        'to3':'1144px',
        'to4':'1400px',
        'catTo6':'1484px',
        'catTo5':'1279px',
        'catTo4':'929px',
        'catTo3':'791px',
        'catToshrink1':'633px',
        'panel':'547px',
        '1024px':'1024px',
        'superDealsCard':'1100px'
      },
      boxShadow: {
        'new1': '-3px 3px 15px -3px rgb(0 0 0 / 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins:["Poppins","sans-serif"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        DownToUp: {
        '0%': { transform: 'translateY(20%)', opacity: 0},
        '100%': { transform: 'translateY(0%)',opacity: 1},
        },
        RightToLeft: {
          '0%': { transform: 'translateX(90%)', opacity: 0},
          '100%': { transform: 'translateX(0%)',opacity: 1},
        },
        Fade: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
      },
      animation: {
        DownToUp: 'DownToUp 0.4s ease-in-out forwards',
        Fade: 'Fade 0.4s ease-in-out forwards',
        RightToLeft: 'RightToLeft 0.4s forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
})satisfies Config

export default config