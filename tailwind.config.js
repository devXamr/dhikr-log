/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Add the Orbitron font here
        cabinet: ['Cabinet Grotesk', 'sans-serif']
      },
    },

  },
  darkMode: 'selector',

  plugins: [],
}

