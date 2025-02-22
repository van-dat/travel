import { Button, Form, Input } from "antd";
import dayjs from "dayjs";
import SelectComponent from "../selection/selectComponent";
import { BiHotel } from "react-icons/bi";
import InputComponent from "../input/inputComponent";
import { CiLocationOn } from "react-icons/ci";
import CalendarComponent from "../calendar/calendarComponent";
import { MdOutlineNightlight } from "react-icons/md";
import { ReactNode, useState } from "react";
import { UserSwitchOutlined } from "@ant-design/icons";
import ButtonComponent from "../button/buttonComponent";
import { listButton } from "@/utils/constant";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
  value: any;
  setValue: any;
  label?: boolean;
  handleClick?: () => void;
};
export interface GuestAndRoom {
  adult: number;
  kids: number;
  room: number;
}

const FormHotel = (props: Props) => {
  const { value, setValue, label, handleClick } = props;
  const [form] = Form.useForm();

  const [option, setOption] = useState<any>(
    Array.from({ length: 50 }, (_, index) => ({ value: index + 1 }))
  );

  const handlePlus = (key: keyof GuestAndRoom) => {
    console.log(key);
    setValue((prev: any) => ({
      ...prev,
      guestAndRoome: {
        ...prev.guestAndRoome,
        [key]: prev.guestAndRoome[key] + 1,
      },
    }));
  };

  const handleMinus = (key: keyof GuestAndRoom) => {
    setValue((prev: any) => ({
      ...prev,
      guestAndRoome: {
        ...prev.guestAndRoome,
        [key]: prev.guestAndRoome[key] - 1,
      },
    }));
  };
  const handleSelectValueHotel = (value: any, key: string) => {
    setValue((prev: any) => ({
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
                defaultValue={
                  value?.guestAndRoome[item.key as keyof GuestAndRoom]
                }
                value={value?.guestAndRoome[item.key as keyof GuestAndRoom]}
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
        <h3 className="m-0 text-sm font-semibold ">{`${menu?.data?.value} đêm`}</h3>
        <span className="text-xs capitalize">
          {dayjs(value?.dateCheckIn)
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
      <div className=" flex flex-wrap w-full   ">
        {label && (
          <Form.Item>
            <div className="flex gap-2 justify-center items-center md:justify-start  w-full">
              <BiHotel size={22} /> FindHotels
            </div>
          </Form.Item>
        )}
        {/* address */}
        <Form.Item style={{ width: "100%" }} label="Cty or Hotel Name">
          <InputComponent
            value={""}
            onChangValue={() => {}}
            prefix={<CiLocationOn />}
          />
        </Form.Item>

        <div className="flex flex-wrap gap-x-4">
          {/* Check-in */}
          <div className="flex flex-col flex-1 min-w-[300px] calendar-hotel">
            <Form.Item
              label="Check-in "
              style={{ width: "100%" }}
              rules={[{ required: true }]}
            >
              <CalendarComponent
                setValue={handleSelectValueHotel}
                value={value?.dateCheckIn}
                fieldKey="dateCheckIn"
                css="min-w-[210px]"
              />
            </Form.Item>
            <div className="capitalize gap-1 flex md:hidden pl-3 ">
              <span>Check out:</span>
              {dayjs(value?.dateCheckIn)
                .add(value?.duration, "day")
                .format("dddd, D [thg] M YYYY")}
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-1 min-w-[300px]">
            <Form.Item
              label="Duration"
              style={{ width: "100%" }}
              rules={[{ required: true }]}
            >
              <SelectComponent
                value={`${value?.duration} đêm`}
                prefixIcon={<MdOutlineNightlight className="rotate-[45deg]" />}
                optionRender={optionDurationOption}
                options={option}
                onChange={handleSelectValueHotel}
                fieldKey={"duration"}
              />
            </Form.Item>
          </div>

          {/* Check-Out */}
          <div className="md:flex hidden flex-1 ">
            <Form.Item label="Check-Out">
              <div className="capitalize">
                {dayjs(value?.dateCheckIn)
                  .add(value?.duration, "day")
                  .format("dddd, D [thg] M YYYY")}
              </div>
            </Form.Item>
          </div>

          {/* Mobile Guests and Rooms */}
          <div className="flex md:hidden w-full">
            <Form.Item label="Guests and Rooms" style={{ width: "100%" }}>
              <SelectComponent
                value={`${value?.guestAndRoome?.adult} người lớn, ${value?.guestAndRoome?.kids} Trẻ em, ${value?.guestAndRoome?.room} phòng`}
                defaultValue={`${value?.guestAndRoome?.adult} người lớn, ${value?.guestAndRoome?.kids} Trẻ em, ${value?.guestAndRoome?.room} phòng`}
                prefixIcon={<UserSwitchOutlined />}
                dropdownRender={dropdownRender}
                fieldKey=""
              />
            </Form.Item>
          </div>

          {/* Mobile duration and Search */}
          <div className="flex items-center justify-between gap-8  w-full">
            <div className="md:block hidden w-full ">
              <Form.Item style={{ width: "100%" }} label="Guests and Rooms">
                <SelectComponent
                  value={`${value?.guestAndRoome?.adult} người lớn, ${value?.guestAndRoome?.kids} Trẻ em, ${value?.guestAndRoome?.room} phòng`}
                  defaultValue={`${value?.guestAndRoome?.adult} người lớn, ${value?.guestAndRoome?.kids} Trẻ em, ${value?.guestAndRoome?.room} phòng`}
                  prefixIcon={<UserSwitchOutlined />}
                  dropdownRender={dropdownRender}
                  fieldKey=""
                />
              </Form.Item>
            </div>
            <div className="md:max-w-[280px] w-full max-w-full md:mt-[15px]">
              <ButtonComponent
                text="Search"
                handleClick={handleClick}
                background="#ff5e1f"
                radius={6}
                size="large"
                styleCss={{ width: "100%", color: "white", fontWeight: 600 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormHotel;
