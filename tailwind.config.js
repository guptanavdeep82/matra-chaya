/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',
        'navy-light': '#0b2f57',
        red: '#d72638',
        'red-light': '#b71c29',
        gold: '#f4c430',
        'gold-light': '#ffe066',
        cream: '#f8f5f0',
        sky: '#eef4fa',
        border: '#e2e8f0',
        muted: '#5a6b7c',
        text: '#2c3e50',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
