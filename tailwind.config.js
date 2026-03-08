/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f3ece2',
        ivory: '#f8f4ee',
        taupe: '#bcae9f',
        wood: '#8c6d4c',
        ember: '#4a2f1d',
        graphite: '#1a1817',
        gold: '#af9062',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 30px 80px rgba(20, 15, 10, 0.18)',
      },
      backgroundImage: {
        'grain': 'radial-gradient(circle at 1px 1px, rgba(44,35,30,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

