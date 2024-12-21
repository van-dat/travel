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
import { typeFlight } from "@/utils/constant";
import { FlightPlaning, FlightTakeOff, SeatIcon } from "@/utils/icon";
import DoubleCalendar from "../calendar/doubleCalendar";
import ButtonComponent from "../button/buttonComponent";

type Props = {
  guestAndRoome: any;
  dropdownRender: (value: any) => ReactNode;
  value: any;
  setValue: (value: any, key: string) => void;
  label?: boolean;
};

const FormFlight = (props: Props) => {
  const { guestAndRoome, dropdownRender, value, setValue, label } = props;

  const handleSearch = () => {};

  return (
    <>
      {label && (
        <Form.Item>
          <div className="flex gap-2 justify-center items-center md:justify-start  w-full">
            <BiHotel size={22} /> Find Flight
          </div>
        </Form.Item>
      )}

      <div className="flex gap-2 flex-col md:flex-row">
        <CompleteComponent
          suffixIcon={<FlightPlaning />}
          prefixIcon={<FlightTakeOff />}
        />
        <Form.Item label="Guests ">
          <SelectComponent
            value={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            defaultValue={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            prefixIcon={<UserSwitchOutlined />}
            dropdownRender={dropdownRender}
          />
        </Form.Item>
      </div>

      <div className=" flex md:gap-4 flex-col md:flex-row ">
        <DoubleCalendar setValue={setValue} value={value} />
        <div className="flex flex-1 min-w-[280px] ">
          <Form.Item label="Chair Style" style={{ width: "100%" }}>
            <SelectComponent
              value={value.typeFlight}
              defaultValue={value.typeFlight}
              onChange={setValue}
              prefixIcon={<SeatIcon />}
              // dropdownRender={dropdownRender}
              options={typeFlight}
              fieldKey="typeFlight"
            />
          </Form.Item>
        </div>
      </div>
      <div className="w-full flex md:justify-end items-center justify-center">
        <div className="md:max-w-[280px] w-full max-w-full">
          <ButtonComponent
            text="Search"
            handleClick={handleSearch}
            background="#ff5e1f"
            radius={6}
            size="large"
            styleCss={{ width: "100%", color: "white", fontWeight: 600 }}
          />
        </div>
      </div>
    </>
  );
};

export default FormFlight;
