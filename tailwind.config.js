/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Royal Blue
        "background-light": "#F3F4F6",
        "background-dark": "#0F172A", // Slate 900
        "surface-dark": "#1E293B", // Slate 800
        "accent-blue": "#3B82F6",
        "cau-blue": "#004098", // CAU Official Blue-ish
      },
      fontFamily: {
        display: ["Noto Sans KR", "sans-serif"],
        sans: ["Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
