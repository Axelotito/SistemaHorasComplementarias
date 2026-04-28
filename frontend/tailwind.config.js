/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-bg': '#0f172a',
        'surface': '#1e293b',
        'sidebar-blue': '#0a2353', // Azul marino institucional
        'unam-gold': '#c29b45',    // Dorado institucional
      },
    },
  },
  plugins: [],
}