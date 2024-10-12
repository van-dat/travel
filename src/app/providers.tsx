"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";


export function Providers({ children }: { children: React.ReactNode }) {
  const theme = {
    token: {
      colorText: "white"
    },
    components: {
      Menu: {
        colorItemBgHover: "#ddd",
        colorItemBgSelected: "white",
        colorItemTextSelected: "white",
      },
    },

  }
  return (
    <AntdRegistry >
      <ConfigProvider theme={theme}  >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
