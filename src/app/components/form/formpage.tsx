import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { BiHotel } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

import dayjs from "dayjs";
import ButtonComponent from "../button/buttonComponent";
import { UserSwitchOutlined } from "@ant-design/icons";
import { FiMinus, FiPlus } from "react-icons/fi";
import { listButton } from "@/utils/constant";
import { Calendar } from "@/utils/icon";

type Props = {};

export interface GuestAndRoom {
  adult: number;
  kids: number;
  room: number;
}

const Formpage: NextPage = (props: Props) => {
  const [choseDate, setChoseDate] = useState<Date | null>(new Date());
  const [duration, setDuration] = useState<number>(1);
  const [option, setOption] = useState<any>(
    Array.from({ length: 50 }, (_, index) => ({ value: index + 1 }))
  );

  const [action, setaction] = useState();

  const [guestAndRoome, setGuestAndRoome] = useState<GuestAndRoom>({
    adult: 2,
    kids: 0,
    room: 1,
  });

  const [form] = Form.useForm();

  const handleChangeCheckIn = (date: any, dateString: any) => {
    if (!date) {
      return setChoseDate(new Date());
    }
    setChoseDate(date);
  };

  const handlePlus = (key: keyof GuestAndRoom) => {
    setGuestAndRoome((prev: any) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const handleMinus = (key: keyof GuestAndRoom) => {
    setGuestAndRoome((prev: any) => ({
      ...prev,
      [key]: Math.max(prev[key] - 1, 1)
    }));
  };

  return (
    <Form
      layout={"vertical"}
      form={form}
      initialValues={{ layout: "horizontal" }}
      style={{ color: "#ddd" }}
    >
      <Form.Item>
        <h4 className="flex gap-2">
          {" "}
          <BiHotel size={22} /> FindHotels{" "}
        </h4>
      </Form.Item>
      <Form.Item label="Cty or Hotel Name">
        <Input size="large" placeholder="" prefix={<CiLocationOn />} />
      </Form.Item>

      <Form.Item
        label="Check-in "
        rules={[{ required: true }]}
        style={{ display: "inline-block", width: "calc(60% - 8px)" }}
      >
        <DatePicker
          size="large"
          minDate={dayjs(choseDate)}
          onChange={handleChangeCheckIn}
          format="dddd, D [thg] M YYYY"
          defaultValue={dayjs(choseDate)}
          prefix={<Calendar />}
          value={dayjs(choseDate)}
          suffixIcon={null}
          placeholder=" "
        />
      </Form.Item>

      {/* select Duration */}
      <Form.Item
        label="Duration"
        rules={[{ required: true }]}
        style={{
          display: "inline-block",
          width: "calc(40% - 8px)",
        }}
      >
        <Select
          size="large"
          prefix={<MdOutlineNightlight className="rotate-[-30deg]" />}
          options={option}
          value={`${duration} đêm`}
          onChange={(value: any) => {
            setDuration(value);
          }}
          popupMatchSelectWidth={false}
          optionRender={(menu) => {
            return (
              <div className="flex h-full gap-4   ">
                <div className="flex h-full justify-center items-center ">
                  <span className="bg-dot h-[6px] w-[6px] flex rounded-full"></span>
                </div>
                <div className="flex flex-col ">
                  <h3 className="m-0 text-sm font-semibold ">{`${menu.data.value} đêm`}</h3>
                  <span className="text-xs capitalize">
                    {dayjs(choseDate)
                      .add(+(menu?.data?.value || 1), "day")
                      .format("dddd, D [thg] M YYYY")}
                  </span>
                </div>
              </div>
            );
          }}
        />
      </Form.Item>
      {/* checkout - room */}
      <div className="flex justify-between ">
        <Form.Item
          label="Guestsand Rooms"
          style={{ display: "inline-block", width: "calc(60% - 8px)" }}
        >
          <Select
            size="large"
            defaultValue={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            value={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
            placeholder="custom dropdown render"
            prefix={<UserSwitchOutlined />}
            dropdownRender={() => {
              return (
                <div className="flex gap-4 flex-col bg-white p-2">
                  {listButton.map((item: any) => (
                    <div key={item.key} className=" flex justify-between">
                      <div className="flex gap-2 justify-center items-center ">
                        {item.icon}
                        <h4 className="m-0 text-sm">{item.lable}</h4>
                      </div>
                      <div className=" flex gap-2">
                        <Button
                          variant="filled"
                          color="default"
                          icon={<FiPlus />}
                          onClick={() => handlePlus(item.key)}
                        />
                        <Input
                          style={{
                            display: "inline-block",
                            maxWidth: "35px",
                            textAlign: "center",
                          }}
                          size="small"
                          defaultValue={
                            guestAndRoome[item.key as keyof GuestAndRoom]
                          }
                          value={guestAndRoome[item.key as keyof GuestAndRoom]}
                        />
                        <Button
                          onClick={() => handleMinus(item.key)}
                          variant="filled"
                          color="default"
                          icon={<FiMinus />}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          />
        </Form.Item>
        {/* checkout */}
        <Form.Item
          label="Check-Out"
          style={{ display: "inline-block", width: "calc(40% - 8px)" }}
        >
          <div className="capitalize">
            {dayjs(choseDate)
              .add(duration, "day")
              .format("dddd, D [thg] M YYYY")}
          </div>
        </Form.Item>
      </div>
      <Form.Item className="flex justify-center items-center -w-ful">
        <ButtonComponent
          text="Search Hotel"
          types="primary"
          background="#000"
        />
      </Form.Item>
    </Form>
  );
};

export default Formpage;
