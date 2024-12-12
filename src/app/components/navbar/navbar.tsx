import { setActionNav } from "@/app/redux/slices/localSlide";
import { navBar } from "@/utils/navbar";

type Props = {
  dispatch: any;
  activeNav: number;
};

const Navbar = (props: Props) => {
  const { dispatch, activeNav } = props;
  return (
    <>
      <nav className="">
        <ul className="flex items-center gap-4 ">
          {navBar.map((item: any) => (
            <li
              onClick={() => dispatch(setActionNav(+item.key))}
              className={`${
                activeNav === item.key &&
                "bg-btn-nav md:rounded-full rounded-md border shadow-sm "
              } select-none rounded-md flex justify-center gap-2 py-1 px-2  cursor-pointer md:nav `}
              key={item.key}
            >
              <div
                className={`${
                  item.key === activeNav && "active-icon"
                }  flex gap-2`}
              >
                {item.icon}
                <div
                  className={` text-sm  justify-center items-center md:flex hidden`}
                >
                  {item.label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
