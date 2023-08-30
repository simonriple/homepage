/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#BFEEEE',
      secondary: '#51B2B2',
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '824px',
      },
    },
    extend: {},
  },
  plugins: [],
}
