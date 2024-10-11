"use client"
import { useCallback, useEffect } from 'react'
import { Button } from 'antd'
import Side from './side'
import { animated, useSpring } from '@react-spring/web'
import TimeLine from '../timeLine/timeLine'

type Slide = {
    name: string;
    description: string;
}

type Props = {
    setNumberSlide: (value: number) => void;
    numberSlide: number;
    data: Slide[]
}

const CarouselPage = (props: Props) => {
    const { numberSlide, setNumberSlide, data } = props
    const [pop, api] = useSpring(
        () => ({
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 },
            delay: 200
        }),
        []
    );

    const animation = useCallback(() => {
        api.start({
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 }
        });
    }, [api]);
    useEffect(() => {
        animation()
    }, []);

    return (
        <div className='flex h-full py-4 pl-8 overflow-hidden'>
            <div className='h-4/5 relative flex border-l-2 border-solid border-left'>
                <TimeLine total={data?.length} active={numberSlide + 1} />
                {data && data.length > 0 &&
                    <>
                        <div className='w-[45%] h-full flex flex-col justify-center text-white transition ease-in-out duration-250 '>
                            <animated.div style={pop}>
                                <h1>{data[numberSlide]?.name}</h1>
                            </animated.div>

                            <animated.div style={pop}>
                                <h3>{data[numberSlide]?.description}</h3>
                            </animated.div>

                            <div>
                                <Button className="explore-btn" type="primary">
                                    Explore
                                </Button>
                            </div>
                        </div>
                        <Side animation={animation} data={data} setNumberSlide={setNumberSlide} numberSlide={numberSlide} />
                    </>
                }
            </div>
        </div>
    );
}

export default CarouselPage;



