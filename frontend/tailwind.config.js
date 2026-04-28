/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-bg': '#191e28',    // Fondo general gris oscuro
        'surface': '#232a35',    // Fondo de las tarjetas y tabla
        'sidebar': '#081a3f',    // Azul marino institucional (Barra lateral)
        'unam-gold': '#c29b45',  // Dorado exacto de botones y textos
        'card-blue': '#0a2353',  // Azul de la tarjeta "Nueva Carga"
      },
    },
  },
  plugins: [],
}