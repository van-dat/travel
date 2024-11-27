import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "rgba(255, 255, 255, 0.65)",
        primary: "#f5f5f5"

      },
      backgroundColor: {
        blur: "rgba(0, 0, 0, 0.3)",
        btn: "rgba(255, 255, 255, 0.502) !important",
        'btn-nav': "rgba(255, 255, 255, 0.2)",
        container: "rgba(245, 247, 254, 1) !important",
        input: "rgba(245, 247, 254, 1) !important",
        boxImage: "rgba(255, 255, 255, 0.5)",
        header: "#219FE3"

      },
      borderColor: {
        left: "rgba(255, 255, 255, 0.7) ",
        nav: "rgba(255, 255, 255, 0.2)"
      },
      transitionDuration: {
        '250': '250ms',

      },
      boxShadow: {
        img: '0px 4px 12px  rgba(0, 0, 0, 0.1)'
      },

    },
  },
  plugins: [],
};
export default config;
