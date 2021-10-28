module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1771EE",
      },
      screens: {
        'sm-h': {'raw': '(min-width: 200px)'},
        'md-h': {'raw': '(min-width: 400px)'},
        'lg-h': {'raw': '(min-width: 800px)'},
        'xl-h': {'raw': '(min-width: 1000px)'},
        '2xl-h': {'raw': '(min-width: 1500px)'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
