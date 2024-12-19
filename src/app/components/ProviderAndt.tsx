"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/vi";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import HeaderComponent from "./header/headerComponent";
import NavbarMobile from "./navbar/navbar-mobile";
import DrawerComponent from "./drawer/drawerComponent";
import NavbarBottom from "./navbar/navbar-bottom";
import { usePathname } from "next/navigation";
import FooterComponent from "./footer/footerComponent";
dayjs.locale("vi");
dayjs.extend(localeData);

export function ProviderAndt({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isParam = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 || !isParam) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <AntdRegistry>
        <main>
          <div className="relative  h-screen w-full">
            <div
              className={`fixed top-0 right-0 left-0 z-10 duration-200 transition-all  ${
                isParam
                  ? hasScrolled
                    ? "bg-header md:bg-white shadow-md md:text-[#434343] text-white  "
                    : "md:bg-transparent bg-header text-white "
                  : "bg-header md:bg-white shadow-md md:text-[#434343] text-white "
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
            <FooterComponent />
          </div>
        </main>
      </AntdRegistry>
      <ToastContainer />
    </>
  );
}
