/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        redCustom: "#c13228",
      },
      padding: {
        paddingMain: "clamp(20px, 10vw, 100px)"
      },
      margin: {
        marginMain: "clamp(20px, 10vw, 100px)"
      },
      borderRadius: {
        radiusMain: "25px"
      },
      inset: {
        insetMain: "clamp(20px, 10vw, 100px)",
      },
    },
  },
  plugins: [],
}

