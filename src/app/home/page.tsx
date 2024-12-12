"use client";
import React, { useState } from "react";
import { TRAVEL_PAGE_LOCATIONS } from "../../data/travel-data";
import CarouselPage from "@/app/components/carousel/carouselPage";
import Formpage from "@/app/components/form/formpage";
import TitleComponent from "@/app/components/title/title";
import SlideComponent from "@/app/components/slide/slide";
import ButtonComponent from "../components/button/buttonComponent";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Bed, FunActive } from "@/utils/icon";
import FooterComponent from "../components/footer/footerComponent";
import { FaLocationDot } from "react-icons/fa6";
import TabComponent from "../components/tabs/tabComponent";
import EventCompoent from "../components/event/eventCompoent";
import { ImFire } from "react-icons/im";
import { useAppSelector } from "../redux/store";

const HomePage = () => {
  const [numberSlide, setNumberSlide] = useState<number>(0);
  const [data] = useState<any>(TRAVEL_PAGE_LOCATIONS);

  const { actionNav } = useAppSelector((state: any) => state?.localSlice);

  return (
    <div className="bg-container w-full flex-col flex md:mt-0">
      <div
        className="transition-bg md:block hidden "
        style={{
          backgroundImage: `url(${data[numberSlide]?.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full md:h-screen bg-blur  flex items-center justify-center">
          <CarouselPage
            setNumberSlide={setNumberSlide}
            numberSlide={numberSlide}
            data={data}
          />
        </div>
      </div>

      {/* event */}

      <section className="max-w-7xl w-full mx-auto flex gap-4 flex-col mt-7 ">
        <EventCompoent
          icon={<ImFire color="#F7630C" size={24} />}
          label={"Sale 12.12"}
          labelColor="text-[#E7090E]"
        />
      </section>

      <section className="hidden md:block">
        <div className="  grid grid-cols-4 max-w-7xl mx-auto  py-[50px]">
          <div className="md:flex col-span-2 hidden  ">
            <div className="grid-cols-4 grid  ">
              <div className="flex col-span-1 flex-col  ">
                <h3 className="text-2xl">Big</h3>
                <h3 className="text-2xl">Promo</h3>
              </div>
              <div className="col-span-2 py-8 ">
                <div className="w-full flex justify-center flex-col gap-4">
                  <h3 className="text-3xl ">Exclusive Limited Time Offer</h3>
                  <h4 className="text-lg ">
                    Don&apos;t miss out on this incredible opportunity! Book
                    your dream vacation now and enjoy significant savings on
                    your booking. Act fast to secure the best deals and start
                    planning the getaway you&apos;ve always wanted !
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-4  flex justify-center items-center  ">
            <div className="w-[90%] border bg-white rounded-xl px-4 py-6 ">
              <Formpage activeNav={actionNav} />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl w-full mx-auto flex gap-8 flex-col p-2 md:p-0  mt-7 md:mt-0">
        <TitleComponent
          title="Best event for 2024 "
          text="Cultural festivals celebrate the diversity of 
            different cultures through music, dance, food and art."
          icon={<FunActive />}
        />
        <div className="w-full overflow-hidden  px-4 xl:px-0">
          <SlideComponent dataSlide={[]} />
        </div>
      </section>
      {/* recommend */}

      <section className="max-w-7xl w-full hidden mx-auto md:flex gap-8 flex-col min-h-[400px] mt-7 ">
        <TitleComponent
          title="Top Favorite Destinations"
          text="I hope you find these recommendations enjoyable !"
          icon={<FaLocationDot size={24} color="#219FE3" />}
        />
        <div className="grid  transition-all items-end duration-300 grid-flow-row  container-grid gap-4 flex-wrap  ">
          {Array.from({ length: 4 }, (_, idx) => (
            <div
              key={idx}
              className={`h-[400px]  rounded-xl  recomment-${idx + 1}  `}
              style={{
                backgroundImage: `url(https://i.natgeofe.com/n/5a292320-6e6c-4670-8b25-3b7f166262b7/events3.jpg?w=1280&h=853)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex  h-full p-4 items-start justify-between flex-col">
                <div className=" flex p-2 justify-end  w-full  ">
                  <div className="bg-white py-1 px-3 rounded-full">$125.00</div>
                </div>
                <div className="flex flex-col">
                  <div className="p-2 flex flex-col gap-2">
                    <div className="drop-shadow-sm">
                      <h2 className="text-white ">Carnevale at Venesia</h2>
                    </div>
                    <div className="drop-shadow-sm">
                      <h4 className="text-xs text-[#f5f5f5] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </h4>
                    </div>
                  </div>
                  <ButtonComponent
                    text="Booking Trip"
                    iconPosition="end"
                    icon={<ArrowRightOutlined />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl w-full mx-auto flex gap-8 flex-col my-7 ">
        <div className="hidden md:block">
          <TitleComponent title="What do you want to explore ?" text={""} />
        </div>
        <TabComponent />
      </section>
      <section className="image-background w-full mx-auto flex gap-8 flex-col">
        <div className="bg-boxImage flex justify-center items-center h-[500px] flex-col ">
          <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
            <h2 className="max-w-4xl  text-center leading-[60px]">
              Ready to embark on your next adventure? Connect with TripTrap
              today to start planning your dream trip
            </h2>
            <Button
              className="inline-flex justify-between max-w-[300px] "
              style={{
                marginTop: "40px",
                background: "black",
                paddingTop: "25px",
                paddingBottom: "25px",
                borderRadius: "26px",
              }}
            >
              <div className="p-[6px] rounded-full border bg-white">
                <Bed />
              </div>
              <h3 className="text-primary"> Booking Now</h3>
            </Button>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
