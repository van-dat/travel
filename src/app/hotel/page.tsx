"use client";
import { NextPage } from "next";
import saleHotel from "@/image/saleHotel.webp";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Formpage from "../components/form/formpage";
import { keywordForm } from "@/utils/constant";
import { CgSearch } from "react-icons/cg";
import { RiInformation2Fill } from "react-icons/ri";
import { MdOutlineFlight } from "react-icons/md";
import ButtonComponent from "../components/button/buttonComponent";
import { FaCopy } from "react-icons/fa6";
import EventHotel from "@/image/eventHotel.webp";
import Slider from "react-slick";
import Hotel from "@/image/hotel.webp";
import Rating from "../components/Rating";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
import { toastError, toastSuccess } from "@/utils/toast";
import dayjs from "dayjs";
import FormHotel from "../components/form/formHotel";
interface Props {}

const HotelPage: NextPage<Props> = ({}) => {
  const [indexSlide, setIndexSlide] = useState<number>(1);
  const [indexCoupon, setindexCoupon] = useState<number>(0);
  const [dataHotel, setDataHotel] = useState({
    address: "",
    dateCheckIn: dayjs(new Date()),
    dateCheckout: dayjs(new Date())
      .add(1, "day")
      .format("dddd, D [thg] M YYYY"),
    duration: 1,
    guestAndRoome: {
      adult: 2,
      kids: 0,
      room: 1,
    },
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("TRAVELOKALANNGOC");
      toastSuccess("Coupon copied!");
    } catch (error) {
      console.error("Copy failed: ", error);
      toastError(`error :${JSON.stringify(error)}`);
    }
  };

  const handlePrev = (keySlide: string) => {
    if (keySlide === "slide" && indexSlide < 1) setIndexSlide(indexSlide + 1);
    if (keySlide === "coupon") setindexCoupon(indexCoupon + 1);
  };
  const handleNext = (keySlide: string) => {
    if (keySlide === "slide" && indexSlide > -2) setIndexSlide(indexSlide - 1);
    if (keySlide === "coupon") setindexCoupon(indexCoupon - 1);
  };
  const CustomPrev = (props: any) => {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        onClick={onClick}
        className={` absolute z-10 cursor-pointer flex items-center justify-center top-1/2 right-0 h-[40px] w-[40px] bg-white shadow-lg rounded-full translate-x-[35%]  translate-y-[-50%]  ${
          currentSlide === 0 && "hidden"
        } `}
      >
        <IoIosArrowForward size={20} className="text-hover" />
      </div>
    );
  };

  const CustomNext = (props: any) => {
    const { onClick, slideCount, currentSlide } = props;

    const maxSlide = slideCount - 3;
    return (
      <div
        onClick={onClick}
        className={`absolute cursor-pointer flex items-center justify-center top-1/2 left-0 h-[40px] w-[40px] bg-white shadow-lg rounded-full translate-x-[-35%]  translate-y-[-50%] ${
          currentSlide >= maxSlide && "hidden"
        } `}
      >
        <IoIosArrowBack size={20} className="text-hover" />
      </div>
    );
  };

  const SliderNav = () => {
    return (
      <div className="w-full">
        {Array.from({ length: 4 }, (_, idx) => (
          <Image key={idx} src={saleHotel} className="object-50" alt="sale" />
        ))}
      </div>
    );
  };

  const navSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
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
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "-100px",
        }}
      >
        <ul style={{ margin: "0px", paddingBottom: 25 }}> {dots} </ul>
      </div>
    ),
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
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
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" md:mt-[98px]">
      <div className="md:min-h-[320px]  h-full w-full md:bg-hotel overflow-hidden">
        <div className=" max-w-5xl mx-auto ">
          <div
            style={{
              transform: `translateX(${
                472 * indexSlide
              }px) perspective(1000px)`,
            }}
            className=" w-full relative  mt-4 gap-4 md:flex hidden transition-all duration-500  "
          >
            {Array.from({ length: 4 }, (_, idx) => (
              <Image
                key={idx + 1}
                src={saleHotel}
                width={472}
                className="min-h-[230px] rounded-lg"
                height={230}
                alt={"sale"}
              />
            ))}

            <div
              className={` absolute  top-0 text-primary justify-center transition-all duration-500 pl-6 lg:pl-0  flex flex-col gap-6 h-[230px] w-[472px] bg-transparent ${
                indexSlide === 1 ? "sale-hotel" : "sale-hotel-hidden"
              }`}
            >
              <h3 className="text-2xl text-white">
                Tìm & đặt phòng khách sạn giá rẻ chỉ với 3 bước đơn giản
              </h3>

              <span className="text-xl">
                Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Travel!
              </span>
            </div>
          </div>

          <div className="md:hidden flex flex-col pb-4">
            <div className="slider-container ">
              <Slider {...navSettings}>
                {Array.from({ length: 4 }, (_, idx) => (
                  <Image
                    key={idx}
                    src={saleHotel}
                    className=" object-50 "
                    alt={"sale"}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-center mt-[6px] items-center gap-16 ">
          <div className="cursor-pointer " onClick={() => handlePrev("slide")}>
            <IoIosArrowBack
              size={20}
              className={` ${
                indexSlide === 1 ? "text-[#d3d2d2]" : "text-white"
              }`}
            />
          </div>
          <a
            className="text-sm text-primary hover:text-white hover:underline hover:underline-offset-1 "
            href="/#"
          >
            Xem thêm khuyến mãi
          </a>
          <div className="cursor-pointer " onClick={() => handleNext("slide")}>
            <IoIosArrowForward
              size={20}
              className={` ${
                indexSlide === -2 ? "text-[#d3d2d2]" : "text-white"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[960px] mx-auto  md:top-[-42px] top-[-25px]  px-4 md:px-0 relative ">
        <div className="flex flex-col gap-2 bg-white rounded-lg  shadow-form">
          <div className="border-b bg-[#F7F9FA] h-[42px] flex gap-2 items-center rounded-t-lg  px-4">
            <CgSearch size={24} className="md:block hidden" />
            <h3 className="text-sm font-semibold md:block hidden ">
              Tìm kiếm & Đặt phòng Khách sạn online dễ dàng tại Travel
            </h3>
            <h3 className="text-sm font-semibold md:hidden block">
              Đặt phòng khách sạn online dễ dàng
            </h3>
          </div>
          <div className="w-full  p-4">
            <FormHotel value={dataHotel} setValue={setDataHotel} />
          </div>
        </div>
      </div>
      {/* coupont */}
      <div className="max-w-5xl mx-auto ">
        <div className="p-4 ">
          <h3 className="font-semibold text-2xl text-[#073e68]  ">
            Đăng ký để sử dụng coupon
          </h3>
          <div className="w-full relative ">
            <div className="slider-container">
              <Slider {...settings}>
                {Array.from({ length: 4 }, (_, idx) => (
                  <div key={idx} className="block px-1  py-2 ">
                    <div className="flex flex-col shadow-md">
                      <div className="flex gap-2  p-4 rounded-lg  ">
                        <div className=" h-[50px] min-w-[50px] flex justify-center items-center rounded-full bg-[#37C1F0]">
                          <MdOutlineFlight
                            className="text-white rotate-[45deg] translate-x-[1px] "
                            size={24}
                          />
                        </div>
                        <div>
                          <div>
                            <h3 className="text-base font-semibold">
                              Giảm ngay 50K
                            </h3>
                            <span className="text-xs text-[#687176]">
                              Áp dụng cho lần đặt đầu tiên trên Travel
                            </span>
                          </div>
                        </div>
                        <div className="inline-block rounded-full">
                          <div className=" inline-block object-none">
                            <RiInformation2Fill
                              size={22}
                              className="rounded-full object-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="coupon flex">
                          <div className="flex justify-center items-center w-full px-3">
                            <div className="border-t w-full border-dashed border-[#d1f0ff]   "></div>
                          </div>
                        </div>
                        <div className="flex gap-2 p-4">
                          <div className="bg-[#F7F9FA] text-[#687176] text-sm font-medium  flex items-center gap-2 flex-1 w-full rounded-md px-4">
                            <FaCopy size={22} />
                            TRAVELOKALANNGOC
                          </div>
                          <div>
                            <ButtonComponent
                              handleClick={handleCopy}
                              radius={20}
                              size="small"
                              styleCss={{
                                color: "#158AE1",
                                fontWeight: 600,
                                padding: 16,
                              }}
                              text="Copy"
                              background="#91D6FD"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* button slide  */}
          </div>
        </div>
      </div>
      {/* event */}
      <div className="max-w-5xl mx-auto mt-6">
        <Image
          src={EventHotel}
          alt="event"
          className="object-cover md:rounded-lg"
        />
      </div>

      {/* recomment */}
      <div className="max-w-5xl mx-auto h-[300px] my-6 p-4 md:p-0">
        <h3 className="ont-semibold text-2xl">
          Deal nội địa tiết kiệm cuối năm
        </h3>
        <div className="slider-container ">
          <Slider {...settings1}>
            {Array.from({ length: 5 }, (_, idx) => (
              <div className="!flex w-full flex-col gap-2 p-1" key={idx}>
                <div className=" shadow-md rounded-lg relative">
                  <Image
                    src={Hotel}
                    alt="Hotel"
                    className="max-h-[155px] object-cover w-full object-50 rounded-t-lg"
                  />
                  <div className="px-2 flex flex-col gap-1">
                    <h3 className="text-sm">Le House Boutique Hotel</h3>
                    <Rating rate={3} size={16} />
                    <div className="flex flex-col mb-5">
                      <span className="text-[#8f8f8f] line-through text-xs">
                        1.512.269 VND
                      </span>
                      <span className="text-[#f96d01] font-semibold text-sm">
                        562.869 VND
                      </span>
                    </div>
                  </div>
                  <div className="absolute text-white top-0 flex gap-2 left-0 w-2/3 p-1 bg-[#235d9f] rounded-ee-lg rounded-ss-lg">
                    <IoLocation size={20} color="white" />
                    <h3 className="text-white">Suan Luang</h3>
                  </div>
                  <div className="absolute  text-white top-[40%] w-2/3 flex  left-0 text-xs h-6  ">
                    <div className="bg-[#f96d01] flex items-center text-xs pl-2">
                      Tiết kiệm 46%
                    </div>
                    <div className="discount"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="h-[400px]"></div>
    </div>
  );
};

export default HotelPage;
