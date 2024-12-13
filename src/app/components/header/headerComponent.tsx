"use client";

import { Button } from "antd";
import Navbar from "../navbar/navbar";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { BsList } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import ToolsComponent from "@/app/tools/ToolsComponent";

type Props = {
  setOpen?: any;
  isOpen?: boolean;
};

const HeaderComponent = (props: Props) => {
  const { setOpen, isOpen } = props;
  const { actionNav } = useAppSelector((state: any) => state?.localSlice);

  const useDispatch = useAppDispatch();

  return (
    <div className="bg-transparent flex justify-between flex-col max-w-7xl w-full mx-auto  ">
      <div className="flex h-[50px]  justify-between px-3">
        {/* MENU MOBILE */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="my-auto flex md:hidden p-2"
        >
          <BsList color="white" size={22} />
        </div>
        <div className=" flex items-center justify-center text-xl ">TRAVEL</div>

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
      <nav className="hidden md:flex flex-col gap-2  ">
        <div className=" border-t w-full border-nav"></div>
        <div className=" flex flex-col px-4">
          <Navbar dispatch={useDispatch} activeNav={actionNav} />
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
