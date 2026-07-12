import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f1',
          100: '#f5ebdb',
          200: '#f0d5b8',
          300: '#e8bb8d',
          400: '#dfa06a',
          500: '#d4894a',
          600: '#c67c3e',
          700: '#a86336',
          800: '#8c5133',
          900: '#73432c',
        },
        secondary: {
          50: '#faf8f6',
          100: '#f5efea',
          200: '#ebe2d4',
          300: '#e0d0ba',
          400: '#d4bb99',
          500: '#c9a878',
          600: '#b89456',
          700: '#997b47',
          800: '#7a633a',
          900: '#634d2f',
        },
        dark: {
          50: '#f9f8f7',
          100: '#f3f1ef',
          200: '#e7e3de',
          300: '#dbd4cd',
          400: '#cfbfa4',
          500: '#3d2817',
          600: '#372310',
          700: '#2d1c0a',
          800: '#251505',
          900: '#1f0f00',
        },
        accent: {
          gold: '#d4894a',
          cream: '#f5ede0',
          brown: '#3d2817',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl': {},
        },
        '.glass-dark': {
          '@apply backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl': {},
        },
      })
    }),
  ],
}

export default config