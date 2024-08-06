/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#7265E3',
        customPurpleLight: '#E1DDF5',
        customGray400: '#8e8e99',
        customGray300: '#DCDDE0',
        customGray200: '#F1EFFA',
        customGray100: '#F4F6FA',
      },
      backgroundImage: {
        detailsCompleted: "url('/src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
