import { BottomNavbar } from "@/utils/navbar";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface Props {}

const NavbarBottom: NextPage<Props> = ({}) => {
  const [chose, setChose] = useState<number>(1);

  return (
    <div className="w-full h-full">
      <ul className="flex justify-around items-center w-full h-full">
        {BottomNavbar.map((item: any) => (
          <li key={item.id}>
            <Link
              onClick={() => setChose(item.id)}
              href={item.link}
              className={`flex flex-col items-center justify-center gap-1 ${
                chose === item.id && "text-[#219FE3]"
              }`}
            >
              {item.icon}
              <div className="text-xs">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarBottom;
