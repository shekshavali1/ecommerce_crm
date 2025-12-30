/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crm: {
          dark: "#0f172a",
          primary: "#6366f1", // Modern Indigo
          glass: "rgba(255, 255, 255, 0.1)",
        }
      }
    },
  },
  plugins: [],
}