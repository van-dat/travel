import { calc } from "antd/es/theme/internal";
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
        primary: "#f5f5f5",
        disabled: "rgba(0, 0, 0, 0.25)",
        hover: "#219FE3",
        'text1': "rgba(0, 0, 0, 0.88)",
        text2: "#687176",
        text3: "#F2F3F3"

      },
      backgroundImage: {
        gradient: "linear-gradient(-180deg, rgba(0, 160, 255, 0), #0770cd)"
      },
      backgroundColor: {
        blur: "rgba(0, 0, 0, 0.3)",
        btn: "rgba(255, 255, 255, 0.502) !important",
        'btn-nav': "rgba(255, 255, 255, 0.2)",
        container: "rgba(245, 247, 254, 1) !important",
        input: "rgba(245, 247, 254, 1) !important",
        boxImage: "rgba(255, 255, 255, 0.5)",
        header: "#1BA0E2",
        disabled: "rgba(0, 0, 0, 0.04)",
        hover: "#F2F3F3",
        hotel: "#1BA0E2"
      },
      borderColor: {
        left: "rgba(255, 255, 255, 0.7) ",
        nav: "rgba(255, 255, 255, 0.2)"
      },

      transitionDuration: {
        '250': '250ms',

      },
      boxShadow: {
        img: '0px 4px 12px  rgba(0, 0, 0, 0.1)',
        nav: '0px 0px 8px rgba(0 0 0 , 0.1)',
        form: '0px 4px 10px rgba(3, 18, 26, 0.15)',
      },
      width: {
        header: "calc(100% - 17px)", // Định nghĩa một lớp tiện ích tên là `w-header`
      },
      objectPosition : {
        50: " 50% 50%"
      }


    },
  },
  plugins: [],
};
export default config;
