/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF7',
        ivory: '#F5F1ED',
        beige: '#E8E4DF',
        charcoal: '#2C2C2C',
        'near-black': '#1A1A1A',
        accent: '#C9A876',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.2' }],
        'display': ['48px', { lineHeight: '1.2' }],
        'heading-lg': ['36px', { lineHeight: '1.3' }],
        'heading': ['28px', { lineHeight: '1.3' }],
        'subheading': ['20px', { lineHeight: '1.4' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        'body': ['15px', { lineHeight: '1.6' }],
        'small': ['13px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}
