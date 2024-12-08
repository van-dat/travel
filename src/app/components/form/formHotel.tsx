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

type Props = {
  dataHotel: any;
  handleSelectValueHotel: (value: any, key: string) => void;
  optionDurationOption: (menu: any) => ReactNode;
  guestAndRoome: any;
  dropdownRender: (menu: any) => ReactNode;
};

const FormHotel = (props: Props) => {
  const {
    dataHotel,
    handleSelectValueHotel,
    guestAndRoome,
    optionDurationOption,
    dropdownRender,
  } = props;
  const [option, setOption] = useState<any>(
    Array.from({ length: 50 }, (_, index) => ({ value: index + 1 }))
  );
  return (
    <>
      <Form.Item>
        <div className="flex gap-2 justify-center items-center md:justify-start  w-full">
          <BiHotel size={22} /> FindHotels
        </div>
      </Form.Item>
      <Form.Item label="Cty or Hotel Name">
        <InputComponent
          value={""}
          onChangValue={() => {}}
          prefix={<CiLocationOn />}
        />
      </Form.Item>

      <div className="hidden md:block">
        <Form.Item
          label="Check-in "
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(60% - 8px)" }}
        >
          <CalendarComponent
            setValue={handleSelectValueHotel}
            value={dataHotel.dateCheckIn}
            fieldKey="dateCheckIn"
          />
        </Form.Item>
        {/* select Duration */}
        <Form.Item
          label="Duration"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(40% - 8px)",
            marginLeft: 16,
          }}
        >
          <SelectComponent
            value={`${dataHotel.duration} đêm`}
            prefixIcon={<MdOutlineNightlight className="rotate-[-30deg]" />}
            optionRender={optionDurationOption}
            options={option}
            onChange={handleSelectValueHotel}
            fieldKey={"duration"}
          />
        </Form.Item>
      </div>

      <div className="md:hidden block">
        <Form.Item label="Check-in " rules={[{ required: true }]}>
          <CalendarComponent
            setValue={handleSelectValueHotel}
            value={dataHotel.dateCheckIn}
            fieldKey="dateCheckIn"
          />
        </Form.Item>

        <div className="flex justify-between">
          <Form.Item
            label="Duration"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <SelectComponent
              value={`${dataHotel.duration} đêm`}
              prefixIcon={<MdOutlineNightlight className="rotate-[-30deg]" />}
              optionRender={optionDurationOption}
              options={option}
              onChange={handleSelectValueHotel}
              fieldKey={"duration"}
            />
          </Form.Item>
          <Form.Item label="Check-Out">
            <div className="capitalize">
              {dayjs(dataHotel.dateCheckIn)
                .add(dataHotel.duration, "day")
                .format("dddd, D [thg] M YYYY")}
            </div>
          </Form.Item>
        </div>
      </div>

      {/* checkout - room */}
      <div className="md:flex  block">
        <div className="md:block hidden">
          <Form.Item
            label="Guestsand Rooms"
            style={{ display: "inline-block" }}
          >
            <SelectComponent
              value={`${guestAndRoome.adult} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
              defaultValue={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
              prefixIcon={<UserSwitchOutlined />}
              dropdownRender={dropdownRender}
              fieldKey={""}
            />
          </Form.Item>
        </div>

        <div className="md:hidden block">
          <Form.Item label="Guestsand Rooms" style={{ width: "100%" }}>
            <SelectComponent
              value={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
              defaultValue={`${guestAndRoome["adult"]} nguời lớn, ${guestAndRoome["kids"]} Trẻ em , ${guestAndRoome["room"]} phòng `}
              prefixIcon={<UserSwitchOutlined />}
              dropdownRender={dropdownRender}
              fieldKey={""}
            />
          </Form.Item>
        </div>

        {/* checkout */}
        <div className="md:block hidden">
          <Form.Item
            label="Check-Out"
            style={{
              display: "inline-block",
              width: "100%",
              marginLeft: 32,
            }}
          >
            <div className="capitalize">
              {dayjs(dataHotel.dateCheckIn)
                .add(dataHotel.duration, "day")
                .format("dddd, D [thg] M YYYY")}
            </div>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default FormHotel;
