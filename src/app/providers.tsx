"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import store from "./redux/store";


export function Providers({ children }: { children: React.ReactNode }) {



  const theme = {
    token: {
      // colorText: "white"
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
    <Provider store={store}>
      <AntdRegistry >
        {children}
      </AntdRegistry>
    </Provider>
  );
}
