import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '128': '40rem',
      },
      fontFamily:{
        Neue:['Bebas Neue', "sans-serif"],
       
        poppins:['Poppins', "sans-serif"],
        popOne:['Mochiy Pop One', "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
