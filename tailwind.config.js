// tailwind.config.js
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#00b4db',
        'weather-secondary': '#0083b0',
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(135deg, var(--tw-colors-weather-primary), var(--tw-colors-weather-secondary))',
      },
    },
  },
  plugins: [],
}
