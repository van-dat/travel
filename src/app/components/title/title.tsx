import { NextPage } from "next";

type Props = {
  title: string;
  styleCss?: string;
  text: string;
};

const TitleComponent = (props: Props) => {
  const { title, styleCss, text } = props;

  const style = styleCss ? `${styleCss} text-3xl : ` : "text-3xl";

  return (
    <div className="  grid grid-cols-3  ">
      <div className="col-span-2">
        <h3 className={`${style}`}>{title}</h3>
      </div>
      <div className="col-span-1 px-5 max-w-[350px] text-xs text-[#333]">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default TitleComponent;
