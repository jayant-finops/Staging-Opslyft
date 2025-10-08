/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ['"IBM Plex Sans"', "sans-serif"],
        "funnel-display": ['"Funnel Display"', "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": {
            transform: "translateX(-100%) skewX(-35deg)",
            opacity: "0",
          },
          "15%": {
            opacity: "0.5",
          },
          "85%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateX(400%) skewX(-35deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
