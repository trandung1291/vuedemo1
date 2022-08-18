module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#F8FAF8"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
