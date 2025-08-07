/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // ✅ Matches all JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#1E293B',
        backgroundLight: '#F9FAFB',
        highlightBlue: '#1D4ED8',
        yellowAccent: '#FBBF24',
        lightGrey: '#D1D5DB',
        greyAccent: '#9CA3AF',
        white: '#FFFFFF',
        textDark: '#1E293B',
      },
    },
  },
  plugins: [],
};
