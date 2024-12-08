import { navBarMobile } from "@/utils/navbar";
import { NextPage } from "next";
import Link from "next/link";
import Slider from "react-slick";

type Props = {
  setActiveNav: any;
  activeNav: any;
};

const NavbarMobile: NextPage<Props> = ({ setActiveNav, activeNav }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div>
      <Slider {...settings}>
        {navBarMobile.map((item: any) => (
          <div
            className="select-none nav-moblie text-text py-2 "
            key={item.key}
          >
            <Link
              href={item.href}
              className={` rounded-[14px] min-w-[50px] min-h-[50px] border shadow-sm flex justify-center text-xl py-3 mobile-icon sale-icon relative cursor-pointer`}
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </Link>
            <div className="text-black text-[8px] text-center">
              {item.label}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavbarMobile;
