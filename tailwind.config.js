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
      boxShadow: {
        "3xl": "rgba(50, 50, 93, 0.25) 0px 16px 27px -5px, rgba(0, 0, 0, 0.3) 0px -8px 16px -8px",
        "4xl": "rgba(50, 50, 93, 0.25) 15px 0px 27px -5px, rgba(0, 0, 0, 0.3) 15px 0px 16px -8px"
      },
      colors: {
        "logosColor": "#beced6",
        "themeColor0Base": "#949494",
        "themeColor0Light": "#d1d1d1",
        "themeColor0Lighter": "#ebebeb",

        "themeColor1Dark": "#2463eb",
        "themeColor1Base": "#5c90ff",
        "themeColor1Light": "#94b6ff",
        "themeColor1Lighter": "#cfddff",
        "themeColor1Lightest": "#ebf1ff",

        "themeColor2Dark": "#029c43",
        "themeColor2Base": "#2ecc71",
        "themeColor2Light": "#61e89b",
        "themeColor2Lighter": "#99ffc5",
        "themeColor2Lightest": "#d9ffe9",

        "themeColor3Dark": "#1d99a9",
        "themeColor3Base": "#2cbad1",
        "themeColor3Light": "#4acbdb",
        "themeColor3Lighter": "#80e4e7",
        "themeColor3Lightest": "#b8f8f9",

        "themeColor4Dark": "#d54e49",
        "themeColor4Base": "#e35546",
        "themeColor4Light": "#f97a7a",
        "themeColor4Lighter": "#ffb7b7",
        "themeColor4Lightest": "#ffe5e7",

        "themeColor5Dark": "#c7367b",
        "themeColor5Base": "#d438d6",
        "themeColor5Light": "#e568a2",
        "themeColor5Lighter": "#f9a3cc",
        "themeColor5Lightest": "#ffd0e2",

        "themeColor6Dark": "#e3631c",
        "themeColor6Base": "#fa8a32",
        "themeColor6Light": "#f7862a",
        "themeColor6Lighter": "#ffc335",
        "themeColor6Lightest": "#ffeb57",

        "themeColor7Dark": "#6d4c9b",
        "themeColor7Base": "#7e62b3",
        "themeColor7Light": "#9373ba",
        "themeColor7Lighter": "#c0a2d9",
        "themeColor7Lightest": "#dbe5f2",

        "themeColor8Dark": "#0f9d58",
        "themeColor8Base": "#1abc9c",
        "themeColor8Light": "#38c67f",
        "themeColor8Lighter": "#64d9b2",
        "themeColor8Lightest": "#94f2c7",
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
