/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados basados en tu diseño
        'dark-bg': '#0f172a',    // El fondo más oscuro
        'card-bg': '#1e293b',    // El color de las tarjetas
        'unam-blue': '#1e3a8a',  // Azul institucional
        'unam-gold': '#eab308',  // Dorado/Amarillo de progreso
      },
    },
  },
  plugins: [],
}