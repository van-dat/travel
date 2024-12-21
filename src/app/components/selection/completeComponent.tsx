import { data } from "@/utils/constant";
import { AutoComplete, Form } from "antd";
import { ReactNode, useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const removeDiacritics = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

type Props = {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  value?: any;
  setValue?: any;
};

const CompleteComponent = (props: Props) => {
  const { prefixIcon, suffixIcon, value, setValue } = props;
  const [fromInputValue, setFromInputValue] = useState<string>("TP HCM (SGN)");
  const [toInputValue, setToInputValue] = useState<string>("Hà Nội (HAN)");
  const [optionSelectTo, setOptionSelectTo] = useState<number | null>(2);
  const [optionSelectFrom, setOptionSelectFrom] = useState<number | null>(1);
  const [tempFromValue, setTempFromValue] = useState<string>("");
  const [tempToValue, setTempToValue] = useState<string>("");

  const handleChangeFrom = (value: any) => {
    setFromInputValue(value);
  };
  const handleChangeTo = (value: any) => {
    setToInputValue(value);
  };

  const handleSelect = (item: any, key: string) => {
    if (item) {
      if (key === "to") {
        const value = `${item.city} (${item.summary})`;
        setToInputValue(value);
        setOptionSelectTo(item.id);
      }
      if (key === "from") {
        const value = `${item.city} (${item.summary})`;
        setFromInputValue(value);
        setOptionSelectFrom(item.id);
      }
    }
  };
  const handleReplace = () => {
    setFromInputValue(toInputValue);
    setToInputValue(fromInputValue);
    setOptionSelectFrom(optionSelectTo);
    setOptionSelectTo(optionSelectFrom);
  };

  const dropdownRender = (value: string, key: string) => {
    const normalizedInput = removeDiacritics(value).toUpperCase();
    const dataFilter = data.filter((item) =>
      removeDiacritics(item?.label || "")
        .toUpperCase()
        .includes(normalizedInput)
    );

    return (
      <div className="max-h-[400px] overflow-y-auto w-full">
        <h3 className="p-2">Thành phố hoặc sân bay phổ biến</h3>
        <div className="flex flex-col gap-2">
          {dataFilter?.map((item: any) => (
            <div
              key={item.id}
              className={`flex gap-2 items-center hover:bg-[#d9d9d9] hover:rounded-lg py-1 ${
                (key === "from" && optionSelectFrom === item.id) ||
                (key === "to" && optionSelectTo === item.id && "bg-[#d9d9d9]")
              }`}
              onClick={() => handleSelect(item, key)}
            >
              <div className="w-6 flex justify-end">{item.icon}</div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <h3 className="font-bold text-sm">{item.label}</h3>
                  <span className="text-sm">{item.summary}</span>
                </div>
                <span className="text-xs">{item.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex relative w-full flex-col md:flex-row">
      <Form.Item label="Từ" style={{ width: "100%", marginBottom: 8 }}>
        <AutoComplete
          popupClassName="input-popup"
          prefix={prefixIcon}
          className="flight-takeoff"
          style={{ border: 0, borderRadius: 0 }}
          size="large"
          value={fromInputValue}
          onChange={handleChangeFrom}
          options={data}
          filterOption={(inputValue, option) => {
            const normalizedInput = removeDiacritics(inputValue).toUpperCase();
            const normalizedLabel = removeDiacritics(
              option?.label || ""
            ).toUpperCase();
            return normalizedLabel.indexOf(normalizedInput) !== -1;
          }}
          dropdownRender={() => dropdownRender(fromInputValue, "from")}
          onFocus={() => {
            setTempFromValue(fromInputValue);
            setFromInputValue("");
          }}
          // onBlur={() => {
          //   const matchedItem = data.find(
          //     (item) => `${item.city} (${item.summary})` === fromInputValue
          //   );

          //   console.log(matchedItem)
          //   if (
          //     !data.some(
          //       (item) => `${item.city} (${item.summary})` === fromInputValue
          //     ) &&
          //     fromInputValue === ""
          //   ) {
          //     console.log("first");
          //     setFromInputValue(tempFromValue);
          //   }
          // }}
        />
      </Form.Item>
      <div className="absolute md:right-1/2 right-[12px]  translate-x-[48%] md:z-10 md:top-[43%] top-[37%] translate-y-[-16%] cursor-pointer select-none">
        <div
          onClick={handleReplace}
          className=" w-8 bg-white h-8 rounded-full flex items-center justify-center border border-[#d9d9d9]"
        >
          <FaArrowsRotate
            className="rotate-[90deg]"
            size={18}
            color="#0194f3"
          />
        </div>
      </div>
      <Form.Item label="Đến" style={{ width: "100%", marginBottom: 8 }}>
        <AutoComplete
          prefix={suffixIcon}
          className="flight-planing md:pl-5"
          size="large"
          options={data}
          filterOption={(inputValue, option) => {
            const normalizedInput = removeDiacritics(inputValue).toUpperCase();
            const normalizedLabel = removeDiacritics(
              option?.label || ""
            ).toUpperCase();
            return normalizedLabel.indexOf(normalizedInput) !== -1;
          }}
          value={toInputValue}
          onChange={handleChangeTo}
          dropdownRender={() => dropdownRender(toInputValue, "to")}
          onFocus={() => {
            setTempToValue(toInputValue);
            setToInputValue("");
          }}
          // onBlur={() => {
          //   console.log("first");
          //   if (
          //     !data.some(
          //       (item) => `${item.city} (${item.summary})` === toInputValue
          //     )
          //   ) {
          //     setToInputValue(tempToValue);
          //   }
          // }}
        />
      </Form.Item>

      
    </div>
  );
};

export default CompleteComponent;
