"use client";

import { NextPage } from "next";
import { BiSolidCoupon } from "react-icons/bi";
import ButtonComponent from "@/app/components/button/buttonComponent";
import { useEffect, useState } from "react";

import CheckedComponent from "@/app/components/checked/checkedComponent";
import TimeSearch from "./timeSearch";
import { PiBagLight, PiMetronome, PiVideo } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineNightsStay, MdWifi } from "react-icons/md";
import { GiGreenPower } from "react-icons/gi";
import { CiUnread } from "react-icons/ci";
import { FaArrowsSpin } from "react-icons/fa6";
import ContentSearch from "./contentSearch";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [showItemSearch, setshowItemSearch] = useState({
    numberOfStop: false,
    airline: false,
    takeoffTime: false,
    utilities: false,
    price: false,
    preferredChoice: false,
    ticketRefund: false,
  });

  const stopPoints = [
    { name: "Bay thẳng", price: "1.302.797 VND" },
    { name: "1 điểm dừng", price: "2.388.995 VND" },
    { name: "2+ transits", disable: true },
  ];
  const utilities = [
    { name: "Hành lý", icon: <PiBagLight size={18} /> },
    { name: "Suất ăn", icon: <ImSpoonKnife size={18} /> },
    { name: "Giải trí", disable: true, icon: <PiVideo size={18} /> },
    { name: "Wifi", icon: <MdWifi size={18} /> },
    { name: "Nguồn sạc / cổng USB", icon: <GiGreenPower size={18} /> },
  ];
  const prioritize = [
    { name: "Không quá cảnh đêm", icon: <CiUnread size={18} /> },
    {
      name: "Không chọn chuyến bay muộn",
      icon: <MdOutlineNightsStay size={18} />,
    },
    {
      name: "Chỉ làm thủ tục 1 lần",
      icon: <FaArrowsSpin size={18} />,
    },
    { name: "Không chuyến bay liên doanh", icon: <PiMetronome size={18} /> },
  ];

  const airlines = [
    {
      name: "AirAsia Indonesia",
      price: "1.307.430 VND",
      takeoffTime: "12:00",
      langdingTime: "15:00",
      flightTime: "3h",
    },
    {
      name: "BBN Airlines Indonesia",
      price: "1.924.135 VND",
      takeoffTime: "12:00",
      langdingTime: "15:00",
      flightTime: "3h",
    },
    {
      name: "Batik Air",
      price: "2.087.168 VND",
      takeoffTime: "12:00",
      langdingTime: "15:00",
      flightTime: "3h",
    },
    {
      name: "Citilink",
      price: "1.580.060 VND",
      takeoffTime: "12:00",
      langdingTime: "15:00",
      flightTime: "3h",
    },
  ];
  const handleChangeItemShow = (fieldKey: string) => {
    setshowItemSearch((prev: any) => ({
      ...prev,
      [fieldKey]: !prev[fieldKey],
    }));
  };
  return (
    <div className="bg-[#F7F9FA] w-full   ">
      <div className="flex mx-auto max-w-5xl pt-[140px]  gap-2 relative ">
        <div className="max-w-[355px] w-full flex flex-col gap-2 overflow-auto h-screen ">
          <div className="flex p-2 items-center gap-2">
            <BiSolidCoupon size={20} />
            <h3>Khuyến mãi</h3>
          </div>

          {/* fillter */}
          <div className="mr-[15px] overflow-y-scroll h-full max-h-[84.5vh] custome-scroll pr-4 ">
            <div className="flex justify-between">
              <h4>Bộc lọc:</h4>

              <ButtonComponent
                text="Đặt lại"
                styleCss={{
                  color: "#0194f3",
                  fontWeight: 600,
                  border: 0,
                  boxShadow: "0 0 0 0 transparent",
                }}
                background="transparent"
              />
            </div>
            <div>
              <CheckedComponent
                label={"Số điểm dừng"}
                setValue={undefined}
                items={stopPoints}
                showItems={true}
              />
              {/* hãng hành không */}

              <CheckedComponent
                label={"Hãng hàng không"}
                setValue={undefined}
                showItems={true}
                items={airlines}
              />
              <TimeSearch
                items={airlines}
                setValue={undefined}
                showItems={true}
                label={"Thời gian bay"}
              />
              <CheckedComponent
                label={"Tiện ích"}
                setValue={undefined}
                items={utilities}
              />
              <CheckedComponent
                label={"Lựa chọn ưu tiên"}
                setValue={undefined}
                items={prioritize}
              />
            </div>
          </div>
        </div>
        <ContentSearch />
      </div>
    </div>
  );
};

export default Page;
