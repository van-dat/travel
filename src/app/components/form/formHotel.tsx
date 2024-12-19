import { Form } from "antd";
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

type Props = {
  dataHotel: any;
  handleSelectValueHotel: (value: any, key: string) => void;
  optionDurationOption: (menu: any) => ReactNode;
  guestAndRoome: any;
  dropdownRender: (menu: any) => ReactNode;
  label?: boolean;
};

const FormHotel = (props: Props) => {
  const {
    dataHotel,
    handleSelectValueHotel,
    guestAndRoome,
    optionDurationOption,
    dropdownRender,
    label,
  } = props;
  const [option, setOption] = useState<any>(
    Array.from({ length: 50 }, (_, index) => ({ value: index + 1 }))
  );

  return (
    <>
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

        <div className="flex flex-wrap md:gap-4 gap-x-4 md:gap-x-0">
          {/* Check-in */}
          <div className="flex flex-1 min-w-[210px]">
            <Form.Item
              label="Check-in "
              style={{ width: "100%" }}
              rules={[{ required: true }]}
            >
              <CalendarComponent
                setValue={handleSelectValueHotel}
                value={dataHotel.dateCheckIn}
                fieldKey="dateCheckIn"
                css="min-w-[210px]"
              />
            </Form.Item>
          </div>

          {/* Guests and Rooms */}
          <div className=" md:flex hidden min-w-[280px] flex-1">
            <Form.Item style={{ width: "100%" }} label="Guests and Rooms">
              <SelectComponent
                value={`${guestAndRoome.adult} người lớn, ${guestAndRoome.kids} Trẻ em, ${guestAndRoome.room} phòng`}
                defaultValue={`${guestAndRoome.adult} người lớn, ${guestAndRoome.kids} Trẻ em, ${guestAndRoome.room} phòng`}
                prefixIcon={<UserSwitchOutlined />}
                dropdownRender={dropdownRender}
                fieldKey=""
              />
            </Form.Item>
          </div>

          {/* Duration */}
          <div className="flex flex-1 min-w-[200px]">
            <Form.Item
              label="Duration"
              style={{ width: "100%" }}
              rules={[{ required: true }]}
            >
              <SelectComponent
                value={`${dataHotel.duration} đêm`}
                prefixIcon={<MdOutlineNightlight className="rotate-[45deg]" />}
                optionRender={optionDurationOption}
                options={option}
                onChange={handleSelectValueHotel}
                fieldKey={"duration"}
              />
            </Form.Item>
          </div>

          {/* Check-Out */}
          <div className="hidden md:flex flex-1 min-w-[150px]">
            <Form.Item label="Check-Out">
              <div className="capitalize">
                {dayjs(dataHotel.dateCheckIn)
                  .add(dataHotel.duration, "day")
                  .format("dddd, D [thg] M YYYY")}
              </div>
            </Form.Item>
          </div>

          {/* Mobile Guests and Rooms */}
          <div className="flex md:hidden w-full">
            <Form.Item label="Guests and Rooms" style={{ width: "100%" }}>
              <SelectComponent
                value={`${guestAndRoome.adult} người lớn, ${guestAndRoome.kids} Trẻ em, ${guestAndRoome.room} phòng`}
                defaultValue={`${guestAndRoome.adult} người lớn, ${guestAndRoome.kids} Trẻ em, ${guestAndRoome.room} phòng`}
                prefixIcon={<UserSwitchOutlined />}
                dropdownRender={dropdownRender}
                fieldKey=""
              />
            </Form.Item>
          </div>

          {/* Mobile Check-Out and Search */}
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="md:hidden flex-1">
              <Form.Item label="Check-Out" style={{ width: "100%" }}>
                <div className="capitalize">
                  {dayjs(dataHotel.dateCheckIn)
                    .add(dataHotel.duration, "day")
                    .format("dddd, D [thg] M YYYY")}
                </div>
              </Form.Item>
            </div>
            <div className="flex justify-center items-center">
              <Form.Item>
                <ButtonComponent
                  size="large"
                  text="Search"
                  types="primary"
                  radius={8}
                  background="#000"
                  styleCss={{
                    minWidth: "150px",
                    height: 38,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHotel;
