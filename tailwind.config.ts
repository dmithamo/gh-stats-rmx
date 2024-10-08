/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '12px',
      },
      colors: {
        accent: 'rgb(var(--accent-rgb))',
        back: 'rgb(var(--background-rgb))',
        fore: 'rgb(var(--foreground-rgb))',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        extralight: ['IBM Plex Sans ExtraLight', 'sans-serif'],
        bold: ['IBM Plex Sans Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
