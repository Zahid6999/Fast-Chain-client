import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px'
      },
      content: {
        arrowShape: 'url("/src/assets/arrow share.png")',
        plusShape: 'url("/src/assets/community/pattern.png")'
      }
    },
  },
  plugins: [require('preline/plugin'),],
}

