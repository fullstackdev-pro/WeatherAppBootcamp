module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('../public/assets/images/tom-barrett-hgGplX3PFBg-unsplash.jpg')"
      }
    },
  },
  plugins: [],
  
};
