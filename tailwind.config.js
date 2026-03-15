/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        dark: '#0A0A0F',
        'gray-900': '#18181B',
        'gray-700': '#3F3F46',
        'gray-500': '#71717A',
        'gray-300': '#D4D4D8',
        'gray-100': '#F4F4F5',
        'gray-50': '#FAFAFA',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(59, 89, 152, 0.08)',
      },
    },
  },
  plugins: [],
}
