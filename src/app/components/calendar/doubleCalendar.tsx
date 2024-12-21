import { Checkbox, Form, Switch } from "antd";
import { NextPage } from "next";
import CalendarComponent from "./calendarComponent";
import { useState } from "react";

type Props = {
  setValue: (value: any, key: string) => void;
  value: any;
};

const DoubleCalendar: NextPage<Props> = (props: Props) => {
  const { setValue, value } = props;

  const [checked, setchecked] = useState<boolean>(false);

  const handleCheckded = () => {
    setchecked(!checked);
    if (checked)
      setValue(
        value.departureDate.add(2, "day"),
        "returnDate"
      );
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
    <div className="flex  w-full gap-4 flex-col md:flex-row">
      <div className="w-full relative ">
        <Form.Item label="Departure Date" style={{ width: "100%" }}>
          <CalendarComponent
            css="departure-date"
            setValue={setValue}
            value={value.departureDate}
            fieldKey={"departureDate"}
            format="D [thg] M YYYY"
          />
        </Form.Item>
        <div className="absolute gap-1 md:right-1/2 right-[21px] flex flex-col md:hidden  translate-x-[48%] md:z-10 md:top-1/2 top-[38%] translate-y-[-42%] cursor-pointer select-none">
          <span className="text-[10px] text-[#687176]">Khứ hồi?</span>
          <Switch size="small" onChange={handleCheckded} />
        </div>
      </div>

      <div className="w-full hidden md:flex">
        <Form.Item label={<LableReturnDate />} style={{ width: "100%" }}>
          {checked && (
            <CalendarComponent
              setValue={setValue}
              value={value.returnDate}
              fieldKey={"returnDate"}
              css={`
                ${!checked && "disabled  "} return-date
              `}
              format="D [thg] M YYYY"
              handleForcus={handleForcus}
            />
          )}
        </Form.Item>
      </div>
      {checked && (
        <div className="w-full flex md:hidden">
          <Form.Item label={"Return Date"} style={{ width: "100%" }}>
            <CalendarComponent
              setValue={setValue}
              value={value.returnDate}
              fieldKey={"returnDate"}
              css={`
                ${!checked && "disabled  "} return-date
              `}
              format="D [thg] M YYYY"
              handleForcus={handleForcus}
            />
          </Form.Item>
        </div>
      )}
    </div>
  );
};

export default DoubleCalendar;
