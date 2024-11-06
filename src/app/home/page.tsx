"use client";
import React, { useState } from "react";

import { TRAVEL_PAGE_LOCATIONS } from "../../data/travel-data";
import CarouselPage from "@/app/components/carousel/carouselPage";
import Header from "@/app/components/header/header";
import Formpage from "@/app/components/form/formpage";
import TitleComponent from "@/app/components/title/title";
import SlideComponent from "@/app/components/slide/slide";
import { Card } from "antd";
import ButtonComponent from "../components/button/buttonComponent";
import { ArrowRightOutlined } from "@ant-design/icons";


const HomePage = () => {
  const [numberSlide, setNumberSlide] = useState<number>(0);
  const [data, setData] = useState<any>(TRAVEL_PAGE_LOCATIONS);

  const [dataArray, setdataArray] = useState(
    Array.from({ length: 4 }, (_, idx) => idx + 1)
  );

  return (
    <main className="bg-container ">
      <section
        className="transition-bg"
        style={{
          backgroundImage: `url(${data[numberSlide]?.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-screen bg-blur">
          <Header />
          <CarouselPage
            setNumberSlide={setNumberSlide}
            numberSlide={numberSlide}
            data={data}
          />
        </div>
      </section>
      <section className="">
        <div className="  grid grid-cols-3 max-w-7xl mx-auto  py-[50px]">
          <div className="flex col-span-2  ">
            <div className="grid-cols-3 grid  ">
              <div className="flex col-span-1 flex-col  ">
                <h3 className="text-xl">Big</h3>
                <h3 className="text-xl">Promo</h3>
              </div>
              <div className="col-span-2 py-8 ">
                <div className="w-[80%] flex justify-center   flex-col gap-4">
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
          <div className="col-span-1  flex justify-center items-center  ">
            <div className="w-[90%] border bg-white rounded-xl px-4 py-6">
              <Formpage />
            </div>
          </div>
        </div>
      </section>
      <section className=" max-w-7xl mx-auto flex gap-8 flex-col">
        <TitleComponent
          title="Best event for 2024 "
          text="Cultural festivals celebrate the diversity of 
            different cultures through music, dance, food and art."
        />
        <SlideComponent dataSlide={[]} duration={0} />
      </section>
      <section className="max-w-7xl mx-auto flex gap-8 flex-col min-h-[400px] mt-7 ">
        <TitleComponent
          title="Recommended For You"
          text="I hope you find these recommendations enjoyable !"
        />
        <div className="grid h-[400px] transition-all items-end duration-300  container-grid gap-4  ">
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
      <section className="max-w-7xl mx-auto flex gap-8 flex-col min-h-[400px] mt-7"></section>
    </main>
  );
};

export default HomePage;
