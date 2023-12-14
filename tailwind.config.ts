import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        green: {
          50: '#eef0ef',
          100: '#e5e9e7',
          200: '#c9d2ce',
          300: '#526d60',
          400: '#4a6256',
          500: '#42574d',
          600: '#3e5248',
          700: '#31413a',
          800: '#25312b',
          900: '#1d2622',
        },
      },
    },
  },
  plugins: [],
}
export default config
