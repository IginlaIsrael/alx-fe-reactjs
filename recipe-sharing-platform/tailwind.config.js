/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // Specify paths to your templates
  darkMode: false,  // You can switch to 'media' or 'class' if you plan to support dark mode
  theme: {
    extend: {},  // You can extend the default Tailwind styles here
  },
  plugins: [],  // Add plugins here if needed
};
