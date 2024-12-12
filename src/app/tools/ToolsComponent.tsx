import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { country, deffaultLanguage } from "../../utils/languages";
import Link from "next/link";
import { SaleIcon } from "../../utils/icon";
import { IoIosCheckmark } from "react-icons/io";
import { Button } from "antd";

type Props = {};

const ToolsComponent: NextPage<Props> = (props: Props) => {
  const [language, setLanguage] = useState<any>();
  const [openLanguage, setOpenLanguage] = useState<boolean>(false);

  const liRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const languages = deffaultLanguage();
    setLanguage(languages);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        liRef.current &&
        !liRef.current.contains(event.target as Node)
      ) {
        setOpenLanguage(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-sm select-none ">
      <ul className="h-full flex items-center gap-4">
        <li
          ref={liRef}
          className="cursor-pointer relative"
          onClick={(e) => {
            e.stopPropagation();
            setOpenLanguage(!openLanguage);
          }}
        >
          <div className="flex items-center justify-center  hover:bg-blur p-[6px] rounded-md gap-1 cursor-pointer ">
            <div>{language?.ensign}</div>
            <div className=" uppercase flex items-center  ">
              {language?.language} | {language?.currency}
              <RiArrowDropDownLine size={24} />
            </div>
          </div>
          <div
            ref={menuRef}
            className={` absolute top-full left-0 open-option text-black min-w-[430px] h-[200px] bg-white rounded-md shadow-md  ${
              openLanguage ? "open-option-show " : "open-option-hidden"
            }`}
          >
            <div className="flex flex-col p-2 border-r gap-2 w-1/2">
              <h3 className="font-medium ">Country & Language</h3>
              <div className="flex flex-col gap-1">
                {country.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-1  hover:bg-hover p-[6px]  rounded-md "
                    onClick={() => setLanguage(item)}
                  >
                    <div>{item.ensign}</div>
                    <div className="text-sm flex  items-center">
                      {item.label} ({item.text})
                      {item.id === language?.id && (
                        <IoIosCheckmark size={26} color="#219FE3" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col p-2 gap-2  ">
              <h3>Currency</h3>
              <div className="flex items-center gap-2 hover:bg-hover p-[6px] rounded-md">
                {language?.currency}
                <span>{language?.description}</span>
                <IoIosCheckmark size={26} color="#219FE3" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-center  hover:bg-blur p-[6px] rounded-md gap-1 cursor-pointer">
            <SaleIcon /> SALE
          </div>
        </li>
        <li>
          <div className="flex items-center justify-center  hover:bg-blur p-[6px] rounded-md gap-1 cursor-pointer">
            <div className=" flex items-center">Support</div>
          </div>
        </li>
        <li>Bookings</li>
      </ul>
    </div>
  );
};

export default ToolsComponent;
