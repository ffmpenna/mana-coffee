/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-background": "#1b1c1a",
        "on-secondary-container": "#6d614a",
        "on-primary": "#ffffff",
        "on-surface-variant": "#42483f",
        "tertiary-fixed-dim": "#ffb68d",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#321200",
        "secondary-fixed": "#f2e0c3",
        "inverse-on-surface": "#f2f0ed",
        "inverse-primary": "#a9d19e",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#231a08",
        "on-surface": "#1b1c1a",
        "on-secondary": "#ffffff",
        "outline": "#73796f",
        "primary-container": "#4b6f44",
        "surface-dim": "#dbdad6",
        "surface-tint": "#43673d",
        "background": "#f1f3ed", // Light Sage Green Background
        "secondary-container": "#efdec0",
        "on-error-container": "#93000a",
        "surface-container": "#e8ebe2",
        "outline-variant": "#c2c8bc",
        "surface-bright": "#f1f3ed",
        "primary-fixed": "#c4eeb8",
        "surface": "#f1f3ed",
        "on-primary-fixed-variant": "#2c4f27",
        "surface-container-low": "#eef1e9",
        "on-primary-fixed": "#012202",
        "tertiary": "#813900",
        "primary": "#34562e",
        "on-primary-container": "#c7f0bb",
        "on-tertiary-container": "#ffdece",
        "on-tertiary-fixed-variant": "#763400",
        "surface-variant": "#e4e2de",
        "on-secondary-fixed-variant": "#504530",
        "tertiary-fixed": "#ffdbc9",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#eae8e4",
        "secondary": "#695d46",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#d5c5a8",
        "surface-container-highest": "#e4e2de",
        "inverse-surface": "#30312e",
        "primary-fixed-dim": "#a9d19e",
        "tertiary-container": "#a64c00"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"],
        "notoSerif": ["Noto Serif", "serif"]
      }
    },
  },
  plugins: [],
}
