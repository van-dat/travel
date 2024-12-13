import { NextPage } from "next";
import Image from "next/image";
import sale from "@/image/sale.webp";
import sale1 from "@/image/sale1.webp";
import sale2 from "@/image/sale2.webp";
import { ImFire } from "react-icons/im";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  data?: any[];
  labelColor?: string;
};

const EventCompoent: NextPage<Props> = (props: Props) => {
  const { icon, label, labelColor } = props;

  return (
    <div className="flex gap-2 flex-col ">
      <div className="flex gap-4 px-4 md:px-0  ">
        <div className=" text-white block">{icon}</div>
        <h3 className={`${labelColor} text-2xl`}>{label}</h3>
      </div>
      <div className="w-full ">
        <Image
          src={sale}
          alt="img"
          className="md:rounded-md"
          width={1280}
          height={720}
        />
      </div>
      <div className="inline-flex gap-4 p-2 bg-white shadow-lg mt-5 hidden-scroll">
        <Image
          src={sale1}
          alt="img"
          className="rounded-t-md w-full  min-w-[234px] md:min-w-0  "
          width={640}
          height={360}
        />
        <Image
          src={sale2}
          alt="img"
          className="rounded-t-md w-full min-w-[234px] md:min-w-0  "
          width={640}
          height={360}
        />
      </div>
    </div>
  );
};

export default EventCompoent;
