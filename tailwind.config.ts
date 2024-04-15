import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        background: '#0A192F',
        title: '#a6a6a6',
        text: '#e7e7e7',
        highlight: '#49D49D',
        highlightdarker: '#339c66',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
        noto: ['Noto Sans Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
