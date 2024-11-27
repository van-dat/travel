import { navBar } from "@/utils/navbar";
import { NextPage } from "next";
import Slider from "react-slick";

type Props = {
  setActiveNav: any;
  activeNav: any;
};

const NavbarMobile: NextPage<Props> = ({ setActiveNav, activeNav }) => {
  const settings = {
    dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div >
      <Slider {...settings}>
        {navBar.map((item: any) => (
          <div
            className="select-none  flex px-[18px] text-text "
            key={item.key}
          >
            <div
              className="rounded-xl border shadow-sm flex justify-center text-xl py-3 fill-red-500"
            >
              {item.icon}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavbarMobile;
