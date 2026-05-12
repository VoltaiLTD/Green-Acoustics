/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'acoustic-green': '#2D5A27',
        'acoustic-slate': '#1F2937',
        'acoustic-oak': '#B58B4C',
        'sound-black': '#0A0A0A',
      },
    },
  },
  plugins: [],
}