/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['Raleway'],
      rajdhani: ['Rajdhani'],
    },
    extend: {
      colors: {
        ligth: '#F1F1F1',
        base: '#E2DCC8',
        primary: '#2ca05a',
        dark: '#101010',
        'dark-ligth': '#141414',
        error: '#850000',
        success: '#285430',
      },
      screens: {
        sm: '360px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '2034px',
        // => @media (min-width: 1536px) { ... }
      },

      keyframes: {
        pulse: {
          '50%': {
            opacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [],
};
