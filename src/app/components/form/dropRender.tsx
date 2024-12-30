import { listButton } from "@/utils/constant";
import { Button, Input } from "antd";
import { NextPage } from "next";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
  value: any;
  setValue: any;
};

export interface GuestAndRoom {
  adult: number;
  kids: number;
  room: number;
}

const DropRender: NextPage<Props> = (props: Props) => {
  const { value, setValue } = props;

  const handlePlus = (key: keyof GuestAndRoom) => {
    setValue((prev: any) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const handleMinus = (key: keyof GuestAndRoom) => {
    setValue((prev: any) => ({
      ...prev,
      [key]: Math.max(prev[key] - 1, 1),
    }));
  };
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
              defaultValue={value.guestAndRoome[item.key as keyof GuestAndRoom]}
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

export default DropRender;
