import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ekd: {
          gold: "#c9a24d",
          green: "#3f4f3c",
          pearl: "#f5f7fa",
          gray: "#9ca3af",
          charcoal: "#020617",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        gold: "0 10px 30px rgba(201,162,77,0.25)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
