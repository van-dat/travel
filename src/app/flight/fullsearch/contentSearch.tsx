import { convertPrice } from "@/utils/fn";
import { BannerFlight, DetailImage, ImageFlight } from "@/utils/icon";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { BiSolidTimer } from "react-icons/bi";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosSearch,
} from "react-icons/io";
import { LuCalendarDays, LuListTodo } from "react-icons/lu";
import Slider from "react-slick";
import ItemSearch from "./ItemSearch";

const ContentSearch: NextPage = () => {
  const [hovered, setHovered] = useState(false);
  const [choseItem, setChoseItem] = useState<string>("Ưu tiên bay thẳng");
  const [show, setShow] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const CustomPrev = (props: any) => {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        onClick={onClick}
        className={` absolute z-10 cursor-pointer flex items-center justify-center top-1/2 right-0 h-[40px] w-[40px]   translate-x-[35%]  translate-y-[-50%]  ${
          currentSlide === 0 && "hidden"
        } `}
      >
        <IoIosArrowForward size={20} color="white" />
      </div>
    );
  };

  const CustomNext = (props: any) => {
    const { onClick, slideCount, currentSlide } = props;

    const maxSlide = slideCount - 5;
    return (
      <div
        onClick={onClick}
        className={`absolute cursor-pointer flex items-center justify-center top-1/2 left-0 h-[40px] w-[40px]  translate-x-[-35%]  translate-y-[-50%] ${
          currentSlide >= maxSlide && "hidden"
        } `}
      >
        <IoIosArrowBack size={20} color="white" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const PriceTicket = [
    { date: "2024-12-28", price: 2648000 },
    { date: "2024-12-29", price: 2016000 },
    { date: "2024-12-30", price: 1879000 },
    { date: "2024-12-31", price: 1678000 },
    { date: "2025-01-01", price: 1782000 },
    { date: "2025-01-02", price: 1879000 },
    { date: "2025-01-03", price: 2059000 },
    { date: "2025-01-04", price: 1743000 },
    { date: "2025-01-05", price: 1782000 },
    { date: "2025-01-06", price: 1743000 },
  ];

  const listOption = [
    {
      id: 1,
      label: "Ưu tiên bay thẳng",
    },
    {
      id: 1,
      label: "Cất cánh sớm nhất",
    },
    {
      id: 2,
      label: "Cất cánh muộn nhất",
    },
    {
      id: 3,
      label: "Hạ cánh sớm nhất",
    },
    {
      id: 4,
      label: "Hạ cánh muộn nhất",
    },
  ];

  return (
    <div className="min-w-[736px]  overflow-auto h-screen hidden-scroll flex gap-2 flex-col">
      <div className="w-full  relative overflow-hidden">
        <BannerFlight />
        <DetailImage />
        <div className="absolute top-[19px] right-[-55px]">
          <ImageFlight />
        </div>
        <div className="absolute top-0 right-0 left-0 z-30">
          <div className="pt-3 px-3 bg-transparent">
            <div className=" relative flex flex-col gap-2 rounded-2xl ">
              <div
                className={`flex h-full gap-2  items-center justify-between px-4  bg-white rounded-2xl transition-all duration-500 ${
                  hovered ? "w-[80%]" : "w-[70%]"
                }`}
              >
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base">
                    TP HCM (SGN) → Hà Nội (HAN)
                  </h3>
                  <span className="text-sm text-gray-600 flex items-center">
                    Thứ 3, 31 thg 12 2024 | 1 hành khách | Phổ thông
                  </span>
                </div>
                {/* Icon Search */}
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="search-fligth-item  flex items-center gap-2  cursor-pointer h-[60px] rounded-lg "
                >
                  <span className="label-search text-sm font-semibold hover:text-[#0194F3] ">
                    Đổi tìm kiếm
                  </span>
                  <IoIosSearch color="#0194F3" size={24} />
                </div>
              </div>
              {/* slider */}

              <div className="w-full bg-bg4 h-[60px] shadow-lg flex rounded-2xl ">
                <div className="max-w-[93%]  w-full block px-4  py-2">
                  <Slider {...settings}>
                    {PriceTicket.map((item: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex flex-col h-full justify-center items-center  px-1"
                      >
                        <div className="flex flex-col py-1 px-2 rounded-lg h-full items-center justify-normal hover:bg-bg5">
                          <h3 className="text-white text-sm">
                            {dayjs(item.date).format("dd, D [thg] M ")}
                          </h3>
                          <span className="text-xs text-white font-semibold ">
                            {convertPrice(item.price)} VND
                          </span>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="flex w-full justify-center items-center h-full bg-bg6 shadow-md rounded-e-lg">
                  <LuCalendarDays color="white" size={26} />
                </div>
              </div>
              {/* promotions */}
              <div className="w-full bg-white h-[50px] flex rounded-2xl shadow-lg z-20 px-4">
                <div className="flex h-full items-center justify-center">
                  <div className="py-2 px-4 flex gap-2 font-semibold items-center cursor-pointer border text-xs rounded-3xl">
                    <BiSolidTimer className="text-text5" size={20} />
                    TVLKANHTUATUS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow-lg bg-white p-3 grid grid-cols-3 gap-1 rounded-lg">
        <div className="flex select-none items-center text-text7 h-[60px]  flex-col col-span-1 justify-center cursor-pointer hover:rounded-lg hover:bg-bg7 hover:border-2  hover:border-[#0194F3]">
          <h3 className="text-text5">Giá thấp nhất</h3>
          <span className="text-xs ">2.016.000 VND</span>
          <span className="text-xs ">2h 5m</span>
        </div>
        <div className="flex select-none flex-col items-center text-text7 h-[60px]  col-span-1 justify-center cursor-pointer  hover:rounded-lg hover:bg-bg7 hover:border-2  hover:border-[#0194F3]">
          <h3 className="text-text5">Thời gian bay ngắn nhất</h3>
          <span className="text-xs ">3.016.000 VND</span>
          <span className="text-xs ">2h 0m</span>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="flex relative items-center select-none h-[60px]  gap-2 col-span-1 justify-center cursor-pointer  hover:rounded-lg hover:bg-bg7 hover:border-2 hover:border-[#0194F3]"
        >
          <LuListTodo size={24} />
          <div>
            <h3 className="text-text5">{choseItem}</h3>
          </div>

          {!show ? <IoIosArrowDown size={24} /> : <IoIosArrowUp size={24} />}

          {show && (
            <div
              ref={dropdownRef}
              className="absolute top-full right-0 left-0 bg-white translate-y-1 shadow-lg "
            >
              {listOption.map((item: any) => (
                <div
                  onClick={() => setChoseItem(item.label)}
                  key={item.id}
                  className={`p-3 border-b hover:bg-bg7 ${
                    choseItem == item.label && "bg-bg7"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }, (_, idx) => (
          <div key={idx}>
            <ItemSearch />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSearch;
