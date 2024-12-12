"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import store from "./redux/store";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/vi";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderComponent from "./components/header/headerComponent";
import { useEffect, useRef, useState } from "react";
import DrawerComponent from "./components/drawer/drawerComponent";
import NavbarMobile from "./components/navbar/navbar-mobile";
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && containerRef.current?.scrollTop > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <AntdRegistry>
        <div ref={containerRef} className="overflow-auto h-screen   ">
          <header
            className={`fixed top-0  left-0  w-full ${
              hasScrolled
                ? "bg-header md:bg-white  text-white md:text-black z-20 pb-2"
                : " bg-header md:bg-transparent text-white z-20 "
            }`}
          >
            <HeaderComponent setOpen={setOpen} isOpen={open} />
          </header>
          <nav className="md:hidden mt-[50px] py-4">
            <NavbarMobile />
          </nav>
          <DrawerComponent setOpen={setOpen} isOpen={open} />

          <div>{children}</div>
        </div>
      </AntdRegistry>
      <ToastContainer />
    </Provider>
  );
}
