const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {     
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '960px',
    'xl': '1200px',
  },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}