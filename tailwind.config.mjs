/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#bfd5ff',
          300: '#96b7ff',
          400: '#6c93ff',
          500: '#4771f5',
          600: '#2463eb',
          700: '#1f4fbe',
          800: '#1c419b',
          900: '#1d397c',
        },
        accent: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#bfd5ff',
          300: '#96b7ff',
          400: '#6c93ff',
          500: '#4771f5',
          600: '#2463eb',
          700: '#1f4fbe',
          800: '#1c419b',
          900: '#1d397c',
        },
        neutral: {
          50: '#f8fafc',
          100: '#eff3f7',
          200: '#dbe2eb',
          300: '#bcc8d6',
          400: '#93a2b6',
          500: '#6b7b92',
          600: '#526176',
          700: '#394455',
          800: '#232a35',
          900: '#151922',
          950: '#0c0f15',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 20px rgba(15, 23, 42, 0.06)',
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        300: '300ms',
      },
    },
  },
  plugins: [],
};
