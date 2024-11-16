"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import store from "./redux/store";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/vi";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
dayjs.locale("vi");
dayjs.extend(localeData);
  
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
  };
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
      <ToastContainer />
    </Provider>
  );
}
