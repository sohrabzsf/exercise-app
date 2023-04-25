/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
