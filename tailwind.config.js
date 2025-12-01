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
        kitty: {
          pink: 'var(--kitty-primary)',
          cream: '#FFF5F7',
          mint: '#D1FAE5',
          blue: '#DBEAFE',
          text: '#4B5563',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
