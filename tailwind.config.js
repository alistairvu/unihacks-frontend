/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-work-sans)'],
        biryani: ['var(--font-biryani)'],
        arsenal: ['var(--font-arsenal)'],
      },
      colors: {
        veggievision: {
          bg: '#F9F1F1',
          green: '#60AB9A',
          lightgreen: '#2AFC98',
        },
      },
      backgroundImage: {
        'home-background': "url('/home-background.jpg')",
      },
    },
  },
  plugins: [],
};
