/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
      "*.{js,jsx,mdx}",
    ],
    "darkMode":"class",
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  };
  
  export default config;
  