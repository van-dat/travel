import { NextPage } from "next";

interface Props {}

const FooterComponent: NextPage<Props> = ({}) => {
  return (
    <footer>
      <div className=" hidden md:flex gap-6 justify-between p-10 text-primary ">
        <div className="flex flex-col gap-4 max-w-[200px]">
          <h3>Travel.</h3>
          <h5 className="text-sm ">
            At Travel, we believe that every journey is an opportunity for
            excitement, discovery and unforgettable experiences.
          </h5>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Navigation</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="">Service</a>
            <a href="">Products</a>
            <a href="">About</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Address</h3>
          <div className="flex  gap-2 flex-col text-[#333] text-sm">
            <p>8899</p>
            <p>Võ Chí Công</p>
            <p>Ngũ Hành Sơn</p>
            <p>TP Đà Nẵng</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Contact</h3>
          <div className="flex gap-2 flex-col text-[#333] text-sm">
            <p>vandat2409.it@gmail.com</p>
            <p>+84 352-804-545 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
