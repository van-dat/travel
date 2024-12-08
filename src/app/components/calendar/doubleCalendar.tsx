import { Checkbox, Form } from "antd";
import { NextPage } from "next";
import { MdOutlineSwapHoriz } from "react-icons/md";
import CalendarComponent from "./calendarComponent";
import { useState } from "react";

type Props = {
  setValue: (value: any, key: string) => void;
  value: any;
};

const DoubleCalendar: NextPage<Props> = (props: Props) => {
  const { setValue, value } = props;

  const [checked, setchecked] = useState<boolean>(false);
  const handleReplace = () => {};

  const handleCheckded = () => {
    setchecked(!checked);
  };

  const LableReturnDate = () => {
    return (
      <Checkbox
        className="select-none"
        checked={checked}
        onChange={handleCheckded}
      >
        Return Date
      </Checkbox>
    );
  };

  const handleForcus = () => {
    setchecked(true);
  };
  return (
    <div className="flex relative w-full">
      <Form.Item label="Departure Date" style={{ width: "100%" }}>
        <CalendarComponent
          css="departure-date"
          setValue={setValue}
          value={value.departureDate}
          fieldKey={"departureDate"}
          format="D [thg] M YYYY"
        />
      </Form.Item>
      <div className="absolute left-1/2 translate-x-[-50%] z-30 top-1/2 translate-y-[-40%] cursor-pointer select-none">
        <div
          onClick={handleReplace}
          className="w-6 h-6 rounded-full flex items-center justify-center border border-[#d9d9d9]"
        >
          <MdOutlineSwapHoriz size={18} color="#0194f3" />
        </div>
      </div>
      <Form.Item label={<LableReturnDate />} style={{ width: "100%" }}>
        <CalendarComponent
          setValue={setValue}
          value={value.returnDate}
          fieldKey={"returnDate"}
          css={`
            ${!checked && "disabled"} return-date
          `}
          format="D [thg] M YYYY"
          handleForcus={handleForcus}
        />
      </Form.Item>
    </div>
  );
};

export default DoubleCalendar;
