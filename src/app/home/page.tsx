"use client";
import React, { useState } from "react";
import { TRAVEL_PAGE_LOCATIONS } from "../../data/travel-data"
import CarouselPage from "@/components/carousel/carouselPage";
import { Menu } from "antd";
import Header from "@/components/header/header";



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
            <section>
                section 2
            </section>
        </main>
    );
};

export default HomePage;