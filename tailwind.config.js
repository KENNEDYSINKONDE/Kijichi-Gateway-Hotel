
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#ffffff",
          blueDark: "#172554",
          blue: "#2563eb",
          yellow: "#facc15",
        },
      },
    },
  },
  plugins: [],
};
