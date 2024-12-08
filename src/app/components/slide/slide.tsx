import { useState } from "react";
import ButtonComponent from "../button/buttonComponent";
import { ArrowRightOutlined } from "@ant-design/icons";
import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect } from "react";
import Slider from "react-slick";
type Props = {
  dataSlide: any[];
};

const SlideComponent = (props: Props) => {
  const { dataSlide } = props;
  const [numberSlide, setnumberSlide] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const [duration, setDuration] = useState<number>(1000);
  const [pop, api] = useSpring(
    () => ({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      config: { duration: duration },
    }),
    []
  );
  const animation = useCallback(() => {
    api.start({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
    });
  }, [api]);

  useEffect(() => {
    animation();
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: duration,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    beforeChange: (current: any, next: any) => {
      api.start({
        opacity: 0,
        y: 50,
        onResolve: () => {
          setSlideIndex(next);
          api.start({ opacity: 1, y: 0 });
        },
      });
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
        },
      },
    ],
  };
  const imageUrl =
    "https://i.natgeofe.com/n/5a292320-6e6c-4670-8b25-3b7f166262b7/events3.jpg?w=1280&h=853";

  return (
    <div className="w-full rounded-xl">
      <Slider {...settings}>
        {Array.from({ length: 4 }, (_, idx) => (
          <div key={idx} className="rounded-xl w-full px-2">
            <div
              className="max-h-[450px] w-full rounded-xl align-bottom  "
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex h-full p-10  max-w-[250px] flex-col justify-end gap-4 text-white  ">
                <div className="p-2 flex flex-col gap-2">
                  <animated.div style={pop}>
                    <h2>Carnevale at Venesia</h2>
                  </animated.div>
                  <animated.div style={pop}>
                    <h4 className="text-xs text-[#f5f5f5]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </h4>
                  </animated.div>
                </div>
                <animated.div style={pop}>
                  <ButtonComponent
                    iconPosition="end"
                    icon={<ArrowRightOutlined />}
                    text="Booking Ticket"
                  />
                </animated.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideComponent;
