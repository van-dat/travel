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
        
      },
      backgroundColor: {
        blur: "rgba(0, 0, 0, 0.3)",
        btn: "rgba(255, 255, 255, 0.502)"
      },
      borderColor :{
        left:"rgba(255, 255, 255, 0.7)"
      },
      transitionDuration: {
        '250': '250ms',

      },
      boxShadow : {
        img : '0px 4px 12px  rgba(0, 0, 0, 0.1)'
      },
    
    },
  },
  plugins: [],
};
export default config;
