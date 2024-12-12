import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dayjs from "dayjs";
import ButtonComponent from "../button/buttonComponent";
import { FiMinus, FiPlus } from "react-icons/fi";
import { keywordForm, listButton } from "@/utils/constant";
import FormHotel from "./formHotel";
import FormFlight from "./formFlight";
import FormCar from "./formCar";

type Props = {
  activeNav: number;
};

export interface GuestAndRoom {
  adult: number;
  kids: number;
  room: number;
}

const Formpage = (props: Props) => {
  const { activeNav } = props;

  const [duration, setDuration] = useState<number>(1);
  const [option, setOption] = useState<any>(
    Array.from({ length: 50 }, (_, index) => ({ value: index + 1 }))
  );

  const [dataFlight, setDataFlight] = useState({
    from: "",
    to: "",
    people: {
      adut: 1,
      kids: 0,
    },
    typeFlight: "Phổ thông",
    departureDate: dayjs(new Date()),
    returnDate: dayjs(new Date()).add(2, "day"),
  });

  const [dataHotel, setDataHotel] = useState({
    address: "",
    dateCheckIn: dayjs(new Date()),
    dateCheckout: dayjs(new Date())
      .add(duration, "day")
      .format("dddd, D [thg] M YYYY"),
    duration: duration,
  });

  const [guestAndRoome, setGuestAndRoome] = useState<GuestAndRoom>({
    adult: 2,
    kids: 0,
    room: 1,
  });

  const [form] = Form.useForm();

  const handlePlus = (key: keyof GuestAndRoom) => {
    setGuestAndRoome((prev: any) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const handleMinus = (key: keyof GuestAndRoom) => {
    setGuestAndRoome((prev: any) => ({
      ...prev,
      [key]: Math.max(prev[key] - 1, 1),
    }));
  };

  const handleSelectValueFligt = (value: any, key: string) => {
    setDataFlight((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSelectValueHotel = (value: any, key: string) => {
    setDataHotel((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const dropdownRender = () => {
    return (
      <div className="flex gap-4 flex-col bg-white p-2">
        {listButton.map((item: any) => (
          <div key={item.key} className=" flex justify-between">
            <div className="flex gap-2 justify-center items-center ">
              {item.icon}
              <h3 className="m-0 text-sm">{item.lable}</h3>
            </div>
            <div className=" flex gap-2">
              <Button
                onClick={() => handleMinus(item.key)}
                variant="filled"
                color="default"
                icon={<FiMinus />}
              />

              <Input
                style={{
                  display: "inline-block",
                  maxWidth: "35px",
                  textAlign: "center",
                }}
                size="small"
                defaultValue={guestAndRoome[item.key as keyof GuestAndRoom]}
                value={guestAndRoome[item.key as keyof GuestAndRoom]}
              />
              <Button
                variant="filled"
                color="default"
                icon={<FiPlus />}
                onClick={() => handlePlus(item.key)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const optionDurationOption = (menu: any) => {
    return (
      <div className="flex flex-col ">
        <h3 className="m-0 text-sm font-semibold ">{`${menu.data.value} đêm`}</h3>
        <span className="text-xs capitalize">
          {dayjs(dataHotel.dateCheckIn)
            .add(+(menu?.data?.value || 1), "day")
            .format("dddd, D [thg] M YYYY")}
        </span>
      </div>
    );
  };

  return (
    <Form
      layout={"vertical"}
      form={form}
      initialValues={{ layout: "horizontal" }}
      style={{ color: "#ddd" }}
    >
      {activeNav === keywordForm.HOTEL && (
        <FormHotel
          dataHotel={dataHotel}
          handleSelectValueHotel={handleSelectValueHotel}
          optionDurationOption={optionDurationOption}
          guestAndRoome={guestAndRoome}
          dropdownRender={dropdownRender}
        />
      )}

      {activeNav === keywordForm.FLIGHT && (
        <FormFlight
          guestAndRoome={guestAndRoome}
          dropdownRender={dropdownRender}
          value={dataFlight}
          setValue={handleSelectValueFligt}
        />
      )}
      {activeNav === keywordForm.CAR && (
        <FormCar
          guestAndRoome={guestAndRoome}
          dropdownRender={dropdownRender}
          value={dataFlight}
          setValue={handleSelectValueFligt}
        />
      )}

      <Form.Item className="flex justify-center items-center -w-ful">
        <ButtonComponent
          text="Search"
          types="primary"
          background="#000"
          styleCss={{ minWidth: "200px" }}
        />
      </Form.Item>
    </Form>
  );
};

export default Formpage;
