/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    colors: {
      'm-black': '#3E4147',
      'm-red': '#CC4425',
      'm-grey': '#EAECEF'
    },
    fontFamily: {
      'oswald': ['"Oswald"', 'sans-serif'],
      'podkova': ['"Podkova"', 'serif']
    },
  },
  plugins: [],
}

