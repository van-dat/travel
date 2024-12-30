import { Checkbox } from "antd";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ButtonComponent from "../button/buttonComponent";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  label: string;
  setValue: any;
  items: any[];
  showItems?: boolean;
};

const CheckedComponent: NextPage<Props> = (props: Props) => {
  const { label, items, setValue, showItems } = props;
  const [showItem, setShowItem] = useState<boolean>(false);

  // const handleChecked = (value: string) => {
  //   setValue((prev: any) => ({
  //     ...prev,
  //     [fieldKey]: value,
  //   }));
  //   setChecked(!checked);
  // };s

  useEffect(() => {
    setShowItem(showItems ? showItems : false);
  }, []);

  const handleChangeChecked = (value: any) => {
    console.log(value);
  };
  return (
    <div className="flex  flex-col py-2 border-b   ">
      <div className=" flex items-center justify-between">
        <h4>{label}</h4>
        <ButtonComponent
          icon={
            showItem ? (
              <IoIosArrowUp size={20} color="black" />
            ) : (
              <IoIosArrowDown size={20} color="black" />
            )
          }
          styleCss={{
            color: "#0194f3",
            fontWeight: 600,
            border: 0,
            boxShadow: "0 0 0 0 transparent",
          }}
          background="transparent"
          handleClick={() => setShowItem(!showItem)}
        />
      </div>
      <div
        className={`flex flex-col gap-1  ${
          showItem ? "show-item" : "hidden-item"
        }`}
      >
        {items.map((item: any, idx) => (
          <div
            key={idx}
            onClick={() => handleChangeChecked(item)}
            className="flex cursor-pointer gap-1 justify-between text-xs "
          >
            <Checkbox
              disabled={item.disable || false}
              className="text-base"
              onChange={() => handleChangeChecked(item)}
            >
              {item.name}
            </Checkbox>
            {item.price && <span className="text-[#949C9F]">{item.price}</span>}
            {item.icon && <span className="mr-[6px]">{item?.icon}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckedComponent;
