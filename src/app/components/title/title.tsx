import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  title: string;
  styleCss?: string;
  text: string;
  icon?: ReactNode;
};

const TitleComponent = (props: Props) => {
  const { title, styleCss, text, icon } = props;

  const style = styleCss ? `${styleCss} text-3xl : ` : "text-3xl";

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col grid-cols-none gap-4 md:gap-0 ">
      <div className="md:col-span-2 md:block flex justify-center items-center">
        <div className="flex items-center gap-4">
          {icon && <div className="bg-header text-white p-2 rounded-full">{icon}</div>}
          <h3 className={`${style}`}>{title}</h3>
        </div>
      </div>
      <div className="md:col-span-1 px-5 max-w-full md:max-w-[350px] text-xs text-[#333] text-center w-full ">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default TitleComponent;
