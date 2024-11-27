import { navBar } from "@/utils/navbar";
import { Menu } from "antd";
import { NextPage } from "next";

type Props = {
  setActiveNav: any;
  activeNav: number;
};

const Navbar = (props: Props) => {
  const { setActiveNav, activeNav } = props;
  return (
    <>
      <nav className="">
        <ul className="flex items-center gap-4 ">
          {navBar.map((item: any) => (
            <li
              onClick={() => setActiveNav(item.key)}
              className={`${
                activeNav === item.key &&
                "bg-btn-nav md:rounded-full rounded-md border shadow-sm "
              } select-none rounded-md flex justify-center gap-2 p-2 text-text cursor-pointer md:nav `}
              key={item.key}
            >
              <div className={`${item.key === activeNav && "active-icon"} `}>
                {item.icon}
              </div>
              <div
                className={`${
                  activeNav === item.key && "text-white"
                } text-sm  justify-center items-center md:flex hidden`}
              >
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
