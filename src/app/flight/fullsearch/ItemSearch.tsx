import { NextPage } from "next";
import Image from "next/image";

import logoFlight from "@/image/flightlogo.png";
import { Tabs, TabsProps, Timeline, Tooltip } from "antd";
import { BiSolidCoupon, BiSolidTimer } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import ButtonComponent from "@/app/components/button/buttonComponent";
import { useState } from "react";

interface Props {}

const ItemSearch: NextPage<Props> = ({}) => {
  const [showDetail, setShowDetail] = useState(0);
  const tooltipBag = <span>Hành lý(mua thêm)</span>;
  const tooltipSale = (
    <div className="flex flex-col min-w-[250px] gap-1">
      <BiSolidTimer color="white" size={20} />
      TVLKANHTUATUS
    </div>
  );
  const tooltipSale2 = (
    <div className="flex flex-col min-w-[250px] gap-1">
      <BiSolidTimer color="white" size={20} />
      TVLKANHTUATUS
    </div>
  );

  const listButton = [
    {
      id: "1",
      label: "Chi tiết",
    },
    {
      id: "2",
      label: "Các lợi ích đi kèm",
    },
    {
      id: "3",
      label: "Hoàn vé",
    },
    {
      id: "4",
      label: "Đổi lịch",
    },
    {
      id: "5",
      label: "Khuyến mãi",
      icon: <BiSolidCoupon size={20} />,
    },
  ];

  return (
    <div className="flex gap-4 flex-col bg-white rounded-lg p-4 shadow-lg hover:border-[#1ba0e2] border border-white hover:border cursor-pointer">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-2 text-base items-center font-semibold">
            <Image src={logoFlight} height={40} width={40} alt="logo" />
            Vietravel Airlines
          </div>
          <div className="inline-flex">
            <Tooltip placement="top" title={tooltipBag}>
              <div className="py-1 px-2 rounded-full border">
                <IoBagHandleOutline />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center h-full gap-8">
          <div className="flex items-center justify-between w-full max-w-md mx-auto">
            <div className="text-center flex flex-col">
              <div className="text-base font-semibold text-black">18:55</div>
              <div className="text-sm text-gray-500">HAN</div>
            </div>
            <div className="flex flex-col items-center text-center flex-1 mx-4">
              <div className="text-sm text-gray-500 ">2h 10m</div>
              <div className="flex items-center w-full">
                <div className="w-2 h-2 bg-white border rounded-full "></div>
                <div className="flex-1 h-px bg-gray-400 "></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-500">Bay thẳng</div>
            </div>
            <div className="text-center flex flex-col">
              <div className="text-base font-semibold text-black">21:05</div>
              <div className="text-sm text-gray-500">SGN</div>
            </div>
          </div>
          <div className="block min-w-[150px]">
            <span className="text-sm font-semibold text-text8">
              2.016.000 VND
            </span>
            /khách
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Tooltip placement="bottom" title={tooltipSale}>
          <div className=" px-2 inline-flex gap-2 font-semibold items-center cursor-pointer border text-xs rounded-3xl">
            <BiSolidTimer className="text-text5" size={20} />
            TVLKANHTUATUS
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title={tooltipSale2}>
          <div className=" px-2 inline-flex gap-2 font-semibold items-center cursor-pointer border text-xs rounded-3xl">
            <BiSolidTimer className="text-text5" size={20} />
            TVLKANHTUATUS
          </div>
        </Tooltip>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-8 ">
          {listButton.map((item: any) => (
            <div className="text-text7 text-sm " key={item.id}>
              {item.label}
            </div>
          ))}
        </div>
        <ButtonComponent
          text="Chọn"
          radius={8}
          styleCss={{
            color: "white",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
          background="#0194F3"
        />
      </div>
    </div>
  );
};

export default ItemSearch;
