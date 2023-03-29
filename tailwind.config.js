/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "dark-grey": "#757575",
        "orange": "#FFA500",
        "grey": "#ededed",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
