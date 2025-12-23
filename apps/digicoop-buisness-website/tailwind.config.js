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
        "primary": "#3a5c1a",
        "primary-dark": "#2a4213",
        "primary-light": "#548226",
        "accent": "#eef5eb",
        "text-main": "#1e293b",
        "text-muted": "#64748b",
      },
      fontFamily: {
        "sans": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
