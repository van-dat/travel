"use client";
import React, { useState } from "react";
import { TRAVEL_PAGE_LOCATIONS } from "../../data/travel-data"
import CarouselPage from "@/components/carousel/carouselPage";
import Header from "@/components/header/header";
import Formpage from "@/components/form/formpage";



const HomePage = () => {
    const [numberSlide, setNumberSlide] = useState<number>(0)
    const [data, setData] = useState<any>(TRAVEL_PAGE_LOCATIONS)


    return (
        <main  >
            <section className="transition-bg" style={{ backgroundImage: `url(${data[numberSlide]?.background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="w-full h-screen bg-blur">
                    <Header />
                    <CarouselPage setNumberSlide={setNumberSlide} numberSlide={numberSlide} data={data} />
                </div>
            </section>
            <section className="bg-input" >
                <div className="  grid grid-cols-3 max-w-7xl m-auto  py-[50px]">
                    <div className="flex col-span-2  ">
                        <div className="grid-cols-3 grid  ">
                            <div className="flex col-span-1 flex-col  ">
                                <h3 className="text-xl">Big</h3>
                                <h3 className="text-xl">Promo</h3>
                            </div>
                            <div className="col-span-2 py-8 ">
                                <div className="w-[80%] flex justify-center   flex-col gap-4">
                                    <h3 className="text-3xl ">
                                        Exclusive Limited Time Offer
                                    </h3>
                                    <h4 className="text-lg ">
                                        Don't miss out on this incredible opportunity! Book your dream vacation now and enjoy significant savings on your booking. Act fast to secure the best deals and start planning the getaway you've always wanted!"
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-1  flex justify-center items-center  ">
                        <div className="w-[90%] border bg-white rounded-xl px-4 py-6">
                            <Formpage  />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;