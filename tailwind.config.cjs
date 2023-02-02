/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navyBlue: '#011021',
        textClear: '#E2E8FF',
        textDark: '#AEB8DC',
        blue: '#0080FF'
      }
    }
  },
  plugins: []
}
