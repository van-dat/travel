import { Tabs, TabsProps } from "antd";
import { NextPage } from "next";
import ChildrenTaps from "./childrenTaps";
import Slider from "react-slick";
import { data } from "@/utils/constant";
import Link from "next/link";

interface Props {}

const TabComponent: NextPage<Props> = ({}) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Các chặng bay hàng đầu",
      children: <ChildrenTaps />,
    },
    {
      key: "2",
      label: "Các khách sạn hàng đầu ",
      children: <ChildrenTaps />,
    },
    {
      key: "3",
      label: "Hoạt động Tham quan Giải trí",
      children: <ChildrenTaps />,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div className="w-full ">
      {/* tablet - computer */}
      <div className="hidden md:block w-full">
        <Tabs
          size="large"
          tabBarStyle={{ fontWeight: "600", fontSize: 18 }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
      {/* mobile */}
      <div className="p-4 md:hidden special relative  ">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.key}>
              <div className="p-4 flex gap-6 flex-col">
                <div className="flex justify-center items-center ">
                  <h3 className="text-base font-semibold">{item.label}</h3>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {data.map((item: any) => (
                    <Link
                      href="#"
                      key={item.id}
                      className="border-b py-1 px-2 text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TabComponent;
