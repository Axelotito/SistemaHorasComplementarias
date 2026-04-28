/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-bg': '#111827',
        'surface': '#1f2937',
        'sidebar-blue': '#0a2353', // El azul de tu imagen
        'unam-gold': '#c29b45',    // El dorado de la FES
      },
    },
  },
  plugins: [],
}