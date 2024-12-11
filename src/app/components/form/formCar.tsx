import { Form } from "antd";
import dayjs from "dayjs";
import { NextPage } from "next";
import SelectComponent from "../selection/selectComponent";
import { BiHotel } from "react-icons/bi";
import InputComponent from "../input/inputComponent";
import { CiLocationOn } from "react-icons/ci";
import CalendarComponent from "../calendar/calendarComponent";
import { MdOutlineNightlight } from "react-icons/md";
import { ReactNode, useState } from "react";
import CompleteComponent from "../selection/completeComponent";
import { UserSwitchOutlined } from "@ant-design/icons";
import { typeFlight } from "@/app/utils/constant";
import { SeatIcon } from "@/app/utils/icon";
import DoubleCalendar from "../calendar/doubleCalendar";
import { TbBus } from "react-icons/tb";

type Props = {
  guestAndRoome: any;
  dropdownRender: (value: any) => ReactNode;
  value: any;
  setValue: (value: any, key: string) => void;
};

const FormCar = (props: Props) => {
  const { guestAndRoome, dropdownRender, value, setValue } = props;

  return (
    <>
      <Form.Item>
        <div className="flex gap-2 justify-center items-center md:justify-start  w-full">
          <BiHotel size={22} /> Find Car
        </div>
      </Form.Item>

      <CompleteComponent
        suffixIcon={<TbBus size={20} />}
        prefixIcon={<TbBus size={20} className=" scale-x-[-1]  " />}
      />

      <div className=" flex md:gap-4 flex-col md:flex-row ">
        <Form.Item label="Guests ">
          <SelectComponent
            value={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            defaultValue={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            prefixIcon={<UserSwitchOutlined />}
            dropdownRender={dropdownRender}
          />
        </Form.Item>
        <div className="flex flex-1 ">
          <Form.Item label="Seat Number" style={{ width: "100%" }}>
            <SelectComponent
              value={value.typeFlight}
              defaultValue={value.typeFlight}
              onChange={setValue}
              prefixIcon={<SeatIcon />}
              options={Array.from({ length: 4 }, (_, idx) => ({
                lable: idx + 1,
                value: idx + 1,
              }))}
              fieldKey="seatNumber"
            />
          </Form.Item>
        </div>
      </div>
      <DoubleCalendar setValue={setValue} value={value} />
    </>
  );
};

export default FormCar;
