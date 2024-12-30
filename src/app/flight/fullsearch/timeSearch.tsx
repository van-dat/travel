import ButtonComponent from "@/app/components/button/buttonComponent";
import { FncheckTime } from "@/utils/fn";
import { Slider } from "antd";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  items: any[];
  setValue: any;
  label: string;
  showItems: boolean;
};

const TimeSearch = (props: Props) => {
  const { items, setValue, label, showItems } = props;
  const [showItem, setShowItem] = useState<boolean>(false);
  const [choseTakeoffTime, setChoseTakeoffTime] = useState<any[] | undefined>(
    []
  );
  const [choseLangdingTime, setChoseLangdingTime] = useState<any[] | undefined>(
    []
  );
  const [rangeTime, setRangeTime] = useState([0, 8]);

  useEffect(() => {
    setShowItem(showItems ? showItems : false);
  }, []);

  const handleChangechoseTakeoffTime = (value: string) => {
    // setValue((prev: any) => ({
    //   ...prev,
    //   takeoffTime: value,
    // }));
    setChoseTakeoffTime((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: any) => item !== value)
        : [...prev, value]
    );
  };

  const handleChangechoseLangdingTime = (value: string) => {
    // setValue((prev: any) => ({
    //   ...prev,
    //   langdingTime: value,
    // }));
    setChoseLangdingTime((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: any) => item !== value)
        : [...prev, value]
    );
  };

  const date = [
    {
      time: "00:00 - 06:00",
      label: "Đêm đến sáng    ",
    },
    {
      time: "06:00 - 12:00",
      label: "Sáng đến trưa",
    },
    ,
    {
      time: "12:00 - 18:00",
      label: "Trưa đến tối",
    },
    {
      time: "18:00 - 24:00",
      label: "Tối đến đêm",
    },
  ];

  return (
    <div className="flex  flex-col py-2 border-b    ">
      <div className=" flex items-center justify-between">
        <h4>{label}</h4>
        <ButtonComponent
          icon={
            showItem ? (
              <IoIosArrowUp size={20} color="black" />
            ) : (
              <IoIosArrowDown size={20} color="black" />
            )
          }
          styleCss={{
            color: "#0194f3",
            fontWeight: 600,
            border: 0,
            boxShadow: "0 0 0 0 transparent",
          }}
          background="transparent"
          handleClick={() => setShowItem(!showItem)}
        />
      </div>
      <div
        className={`flex flex-col gap-2  ${
          showItem ? "show-item" : "hidden-item"
        }`}
      >
        <h3 className="text-sm font-semibold mt-4">Giờ cất cánh</h3>
        <div className="grid grid-cols-2 gap-4  pb-8 border-b ">
          {date.map((item: any, idx) => {
            const filteredItems = items?.filter((it: any) => it?.takeoffTime);
            const isTimeValid = filteredItems.some((it: any) =>
              FncheckTime(item.time, it.takeoffTime)
            );

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isTimeValid) handleChangechoseTakeoffTime(item.time);
                }}
                className={`text-xs flex col-span-1 flex-col border rounded-lg gap-2 p-2 items-center justify-center ${
                  isTimeValid
                    ? choseTakeoffTime?.includes(item.time)
                      ? "bg-bg1 text-white"
                      : "cursor-pointer text-text5"
                    : "text-text6 bg-bg2"
                }`}
              >
                <span
                  className={`${
                    isTimeValid
                      ? choseTakeoffTime?.includes(item.time)
                        ? "text-white"
                        : " text-text2"
                      : "text-text6"
                  }`}
                >
                  {item.label}
                </span>
                <h4 className="font-semibold text-sm ">{item.time}</h4>
              </div>
            );
          })}
        </div>
        <h3 className="text-sm font-semibold mt-4">Giờ cất cánh</h3>
        <div className="grid grid-cols-2 gap-4  pb-8 border-b ">
          {date.map((item: any, idx) => {
            const filteredItems = items?.filter((it: any) => it?.langdingTime);
            const isTimeValid = filteredItems.some((it: any) =>
              FncheckTime(item.time, it.langdingTime)
            );

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isTimeValid) handleChangechoseLangdingTime(item.time);
                }}
                className={`text-xs flex col-span-1 flex-col border rounded-lg gap-2 p-2 items-center justify-center ${
                  isTimeValid
                    ? choseLangdingTime?.includes(item.time)
                      ? "bg-bg1 text-white"
                      : "cursor-pointer text-text5"
                    : "text-text6 bg-bg2"
                }`}
              >
                <span
                  className={`${
                    isTimeValid
                      ? choseLangdingTime?.includes(item.time)
                        ? "text-white"
                        : " text-text2"
                      : "text-text6"
                  }`}
                >
                  {item.label}
                </span>
                <h4 className="font-semibold text-sm ">{item.time}</h4>
              </div>
            );
          })}
        </div>
        {/* flight time */}
        <div className="flex justify-between mt-4">
          <h3 className="text-sm font-semibold ">Thời gian bay</h3>
          <h3 className="text-sm font-semibold ">
            {rangeTime[0]}-{rangeTime[1]}h
          </h3>
        </div>
        <div className="px-1">
          <Slider max={8} onChange={setRangeTime} range defaultValue={[0, 8]} />
        </div>
        <div className="flex justify-between">
          <span className="text-text2">0h</span>
          <span className="text-text2">7h</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSearch;
