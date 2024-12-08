import { data } from "@/utils/constant";
import { NextPage } from "next";
import Link from "next/link";

type Props = {
  data?: any[];
};

const ChildrenTaps: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item: any) => (
        <Link
          key={item.id}
          className="hover:text-hover text-text1 "
          href={"#"}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default ChildrenTaps;
