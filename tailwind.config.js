/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }
      'xl': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }
      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }
      'md': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }
      'sm': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }
      'xs': { 'max': '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        "themeColor": "#5c90ff",
        "themeColorLight": "#cfddff",
        "themeColorExtraLight": "#ebf1ff",
        "logosColor": "#beced6",
        "themeColor2": "#949494",
        "themeColor2Light": "#ebebeb"
      },
      rotate: {
        "18": "18deg"
      },
      fontSize: {
        "xxs": "0.625rem",
      },
      scale: {
        "102": "1.02"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        "8xl": "90rem",
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
}
