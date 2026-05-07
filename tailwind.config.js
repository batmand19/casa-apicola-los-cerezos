module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'honey': '#F7C54D', // Amarillo miel
        'orange': '#FFA07A', // Naranja
        'wood': '#8B4513',   // Marrón madera
        'green-nature': '#228B22' // Verde naturaleza
      },
      animation: {
        'hover-fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
