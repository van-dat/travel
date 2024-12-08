"use client";

import { Button, Menu } from "antd";
import Navbar from "../navbar/navbar";
import { menuItems } from "@/utils/constant";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { BsList } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";

type Props = {};

const Header = (props: Props) => {
  const { actionNav } = useAppSelector((state: any) => state?.localSlice);

  const useDispatch = useAppDispatch();

  return (
    <div className="bg-transparent flex justify-between flex-col">
      <div className="flex h-[50px] md:h-[60] justify-between px-3">
        {/* MENU MOBILE */}
        <div className="my-auto flex md:hidden p-2">
          <BsList color="white" size={22} />
        </div>
        <div className="text-white flex items-center justify-center text-xl w-1/5">
          TRAVEL
        </div>
        <div className="hidden md:flex justify-center w-full ">
          <Menu
            style={{ background: "transparent" }}
            className=" w-[60%] justify-start items-center bg-transparent md:flex hidden "
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            items={menuItems}
          />
        </div>
        {/* login */}
        <div className="my-auto md:hidden flex p-2">
          <LuUser2 size={22} color="white" />
        </div>
        <div className="hidden md:flex justify-center items-center text-white w-[25%] gap-2">
          <Button
            style={{
              borderRadius: "50px",
              background: "transparent",
              color: "white",
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            style={{ borderRadius: "50px", color: "white", border: "none" }}
          >
            Register
          </Button>
        </div>
      </div>
      <nav className="hidden md:flex justify-center flex-col items-center gap-2  ">
        <div className="w-[85%] border-t border-nav"></div>
        <div className="w-[85%] flex flex-col ">
          <Navbar dispatch={useDispatch} activeNav={actionNav} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
