import { Button } from "antd";
import { NextPage } from "next";
import { useState } from "react";
import ButtonComponent from "../button/buttonComponent";
import { ArrowRightOutlined } from "@ant-design/icons";
import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect } from "react";
type Props = {
  dataSlide: any[];
  duration: number;
};

const SlideComponent = (props: Props) => {
  const [numberSlide, setnumberSlide] = useState<number>(0);
  const { dataSlide, duration } = props;

  const [pop, api] = useSpring(
    () => ({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      delay: 200,
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
  //   const durationSlide = () => {
  //     const interval = setInterval(() => {}, duration);

  //     return clearInterval(interval);
  //   };

  return (
    <div
      className="h-[450px] bg-transparent rounded-xl align-bottom"
      style={{
        backgroundImage: `url(https://i.natgeofe.com/n/5a292320-6e6c-4670-8b25-3b7f166262b7/events3.jpg?w=1280&h=853)`,
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
        <ButtonComponent
          iconPosition="end"
          icon={<ArrowRightOutlined />}
          text="Booking Ticket"
        />
      </div>
    </div>
  );
};

export default SlideComponent;
