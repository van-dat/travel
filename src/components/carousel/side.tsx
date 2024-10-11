"use client"
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Prop = {
    data: any[];
    setNumberSlide: any;
    numberSlide: number;
    animation: any
};

const Side = (props: Prop) => {
    const { data, setNumberSlide, numberSlide, animation } = props;
    const [dataSlides, setDataSlides] = useState(data.map((item: any, idx: number) => ({
        id: item.id,
        thumbnail: item.thumbnail,
        rate: item.rating,
        name: item.name,
        order: idx
    })))


    let slideInterval: any;

    const startSlides = () => {
        slideInterval = setInterval(() => {
            next();
        }, 3000);


    }
    useEffect(() => {
        startSlides()
        return () => {
            clearInterval(slideInterval);
        };
    }, [numberSlide]);







    const stopSlides = () => {
        clearInterval(slideInterval);
    }

    const previous = () => {
        setNumberSlide((prev: number) => {
            return prev === 0 ? data.length - 1 : prev - 1;
        });


        const newSlides = dataSlides.map((slide) => ({
            ...slide,
            order: slide.order === dataSlides.length - 1 ? 0 : slide.order + 1
        }));
        setDataSlides(newSlides)
        animation()
    }

    const next = () => {
        setNumberSlide((prev: number) => {
            return prev === data.length - 1 ? 0 : prev + 1;
        });
        const newSlides = dataSlides.map((slide) => ({
            ...slide,
            order: slide.order === 0 ? dataSlides.length - 1 : slide.order - 1

        }));
        setDataSlides(newSlides)
        animation()

    }

    console.log("first")

    return (
        <>
            <div className='w-[55%] flex relative justify-center items-center'>

                {dataSlides.map((item: any) => (
                    <div 
                        key={item.id}
                        style={{
                            zIndex: dataSlides.length - item.order, opacity: item.order === 0 ? 0 : 1, left: `${(item.order - 1) * (100 / 3)}%`
                        }}
                        className={`${item.order == 1 ? "active" : ""} absolute text-white custom-transition flex gap-[6px] translate-x-2/4 flex-col`}

                    >

                        <h3>{item.name}</h3>
                        <Rating rate={item?.rate} />
                        <div className='cursor-pointer'  >
                            <img onMouseEnter={stopSlides} onMouseLeave={startSlides} className='object-cover w-[250px] h-[350px] rounded-[10px] shadow-img' src={item?.thumbnail} alt="image" />
                            
                        </div>
                    </div>
                ))}
                <div className = "flex gap-[5px] absolute bottom-0 left-[200px]">
                    {/* onMouseEnter={stopSlides} onMouseLeave={startSlides}  */}
                    <Button onMouseEnter={stopSlides} onMouseLeave={startSlides} className='bg-btn border-0 text-white'
                        onClick={previous} shape="circle" icon={<LeftOutlined />} />
                    <Button onMouseEnter={stopSlides} onMouseLeave={startSlides} className='bg-btn border-0 text-white' onClick={next} shape="circle" icon={<RightOutlined />} />
                </div>

            </div>


        </>

    );
};

export default Side;

