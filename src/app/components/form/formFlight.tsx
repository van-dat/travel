import { Button, Form, Input } from "antd";
import SelectComponent from "../selection/selectComponent";
import { BiHotel } from "react-icons/bi";
import CompleteComponent from "../selection/completeComponent";
import { UserSwitchOutlined } from "@ant-design/icons";
import { listButton, typeFlight } from "@/utils/constant";
import { FlightPlaning, FlightTakeOff, SeatIcon } from "@/utils/icon";
import DoubleCalendar from "../calendar/doubleCalendar";
import ButtonComponent from "../button/buttonComponent";
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

const FormFlight = (props: Props) => {
  const { value, setValue, label, handleClick } = props;
  const [form] = Form.useForm();
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
                  value.guestAndRoome[item.key as keyof GuestAndRoom]
                }
                value={value.guestAndRoome[item.key as keyof GuestAndRoom]}
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


  return (
    <Form
      layout={"vertical"}
      form={form}
      initialValues={{ layout: "horizontal" }}
      style={{ color: "#ddd" }}
    >
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
            value={`${value.guestAndRoome.adult} nguời lớn, ${value.guestAndRoome.kids} Trẻ em , ${value.guestAndRoome.room} phòng `}
            defaultValue={`${value.guestAndRoome.adult} nguời lớn, ${value.guestAndRoome.kids} Trẻ em , ${value.guestAndRoome.room} phòng `}
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
            handleClick={handleClick}
            background="#ff5e1f"
            radius={6}
            size="large"
            styleCss={{ width: "100%", color: "white", fontWeight: 600 }}
          />
        </div>
      </div>
    </Form>
  );
};

export default FormFlight;
