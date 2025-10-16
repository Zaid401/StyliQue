/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      screens: {
        custom: "999px", // <== tumhara custom breakpoint
      },
    },
  },
  plugins: [],
}