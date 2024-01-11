/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#FFFFFF',
      white60: 'rgba(255, 255, 255, 0.6)',
      blue: '#41A4DF',
      deepblue: '#297EE2',
      blue12: 'rgba(41, 126, 226, 0.12)',
      blue16: 'rgba(65, 164, 223, 0.16)',
      dark: '#0D0D12',
      darkblue: '#232328',
    },
    container: {
      center: true,
      padding: '20px',
    },
    screens: {
      'xl': '1240px',
    },
    extend: {},
  },
  plugins: [],
}

