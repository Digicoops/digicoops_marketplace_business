const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13ec6a", // Electric Green
        "secondary": "#3a5c1a", // Deep Agri Green
        "background-light": "#f6f8f7",
        "background-dark": "#102217", // Very dark charcoal/green
        "card-dark": "#1A1D1B",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem", 
        "lg": "1.5rem", 
        "xl": "2rem", 
        "2xl": "3rem",
      },
    },
  },
  plugins: [],
};
