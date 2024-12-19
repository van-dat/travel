"use client";

import { Button } from "antd";
import { BsList } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import ToolsComponent from "@/app/tools/ToolsComponent";
import { navBar } from "@/utils/navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  setOpen?: any;
  isOpen?: boolean;
};

const HeaderComponent = (props: Props) => {
  const { setOpen, isOpen } = props;
  const router = useRouter();

  return (
    <div className="bg-transparent flex justify-between flex-col max-w-7xl w-full mx-auto gap-2 pb-2  ">
      <div className="flex h-[50px] justify-between px-3 md:border-b ">
        {/* MENU MOBILE */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="my-auto flex md:hidden p-2"
        >
          <BsList color="white" size={22} />
        </div>
        <div
          onClick={() => router.push("/")}
          className=" flex items-center justify-center text-xl cursor-pointer "
        >
          TRAVEL
        </div>

        {/* login */}
        <div className=" md:hidden flex  items-center px-2">
          <LuUser2 size={22} color="white" />
        </div>
        <div className="hidden gap-8 md:flex ">
          <div className="hidden md:flex justify-center w-full ">
            <ToolsComponent />
          </div>
          <div className="hidden md:flex justify-center items-center  gap-2 ">
            <Button
              color="primary"
              variant="outlined"
              style={{
                borderRadius: "50px",
                background: "transparent",
              }}
            >
              Login
            </Button>
            <Button
              type="primary"
              style={{ borderRadius: "50px", border: "none" }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <nav className="hidden md:flex gap-4 px-6">
        {navBar.map((item: any, idx: number) => (
          <Link
            href={item.href}
            className="flex hover:bg-blur cursor-pointer rounded-lg p-2  "
            key={idx}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderComponent;
