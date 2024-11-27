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
    <div className="md:grid md:grid-cols-3 flex flex-col grid-cols-none ">
      <div className="md:col-span-2 md:block flex justify-center items-center">
        <h3 className={`${style}`}>{title}</h3>
      </div>
      <div className="md:col-span-1 px-5 max-w-[350px] text-xs text-[#333] text-center ">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default TitleComponent;
