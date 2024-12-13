"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/vi";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import HeaderComponent from "./header/headerComponent";
import NavbarMobile from "./navbar/navbar-mobile";
import DrawerComponent from "./drawer/drawerComponent";
import NavbarBottom from "./navbar/navbar-bottom";
dayjs.locale("vi");
dayjs.extend(localeData);

export function ProviderAndt({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AntdRegistry>
        <main>
          <div className="relative  h-screen w-full">
            <div
              className={`fixed top-0 right-0 left-0 z-10  ${
                hasScrolled
                  ? "bg-header md:bg-white  text-white md:text-black  md:shadow-md pb-2"
                  : " bg-header md:bg-transparent text-white  "
              }`}
            >
              <HeaderComponent setOpen={setOpen} isOpen={open} />
            </div>
            <nav className="md:hidden  mt-[50px] py-4">
              <NavbarMobile />
            </nav>
            <DrawerComponent setOpen={setOpen} isOpen={open} />
            <div>{children}</div>
            <div className="h-[50px] fixed bottom-0 right-0 left-0 bg-white shadow-nav md:hidden ">
              <NavbarBottom />
            </div>
          </div>
        </main>
      </AntdRegistry>
      <ToastContainer />
    </>
  );
}
