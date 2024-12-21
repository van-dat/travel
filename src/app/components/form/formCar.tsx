import { Form } from "antd";
import SelectComponent from "../selection/selectComponent";
import { BiHotel } from "react-icons/bi";
import { ReactNode, useState } from "react";
import CompleteComponent from "../selection/completeComponent";
import { UserSwitchOutlined } from "@ant-design/icons";
import { SeatIcon } from "@/utils/icon";
import DoubleCalendar from "../calendar/doubleCalendar";
import { TbBus } from "react-icons/tb";

type Props = {
  value: any;
  setValue: (value: any, key: string) => void;
  label?: boolean;
};

const FormCar = (props: Props) => {
  const {  value, setValue, label } = props;

  return (
    <>
      {label && (
        <Form.Item>
          <div className="flex gap-2 justify-center items-center md:justify-start  w-full">
            <BiHotel size={22} /> Find Car
          </div>
        </Form.Item>
      )}

      <CompleteComponent
        suffixIcon={<TbBus size={20} />}
        prefixIcon={<TbBus size={20} className=" scale-x-[-1]  " />}
      />

      <div className=" flex md:gap-4 flex-col md:flex-row ">
        <div className="flex flex-1 ">
          <Form.Item label="Seat Number" style={{ width: "100%" }}>
            <SelectComponent
              value={value.numberSeat}
              defaultValue={value.numberSeat}
              onChange={setValue}
              prefixIcon={<SeatIcon />}
              options={Array.from({ length: 4 }, (_, idx) => ({
                lable: idx + 1,
                value: idx + 1,
              }))}
              fieldKey="numberSeat"
            />
          </Form.Item>
        </div>
      </div>
      <DoubleCalendar setValue={setValue} value={value} />
    </>
  );
};

export default FormCar;
