"use client";
import React, { useState } from "react";
import { TRAVEL_PAGE_LOCATIONS } from "../../data/travel-data"
import CarouselPage from "@/components/carousel/carouselPage";
import { Menu } from "antd";



const HomePage = () => {
    const [numberSlide, setNumberSlide] = useState<number>(0)
    const [data, setData] = useState<any>(TRAVEL_PAGE_LOCATIONS)

    const menuItems = [
        { key: 1, label: 'News' },
        { key: 2, label: 'Destinations' },
        { key: 3, label: 'Blog' },
        { key: 4, label: 'Contact' }
      ];
    return (
        <main  >
            <section style={{ backgroundImage: `url(${data[numberSlide]?.background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="w-full h-screen bg-blur">
                    {/* <header className="bg-transparent h-[60px] flex justify-between">
                            <div className="text-white text-xl w-1/5">LOGO</div>
                            <Menu className="bg-transparent w-[60%] justify-center text-[16px]" theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
                            <div className="profile">
                                <div>Hello, Dat!</div>
                            </div>
                    </header> */}
                    <CarouselPage setNumberSlide={setNumberSlide} numberSlide={numberSlide} data={data} />
                </div>
            </section>
        </main>
    );
};

export default HomePage;