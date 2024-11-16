import { GuestAndRoom } from "@/app/components/form/formpage";
import { FaChild, FaUserGroup } from "react-icons/fa6";
import { MdOutlineMeetingRoom } from "react-icons/md";

export const menuItems = [
  { key: 1, label: "Deals" },
  { key: 2, label: "Suports" },
  { key: 3, label: "Prtnership" },
  { key: 4, label: "Bookings" },
];

export interface ButtonList {
  key: keyof GuestAndRoom;
  icon: React.ReactNode;
  lable: string;
}
export const listButton: ButtonList[] = [
  {
    key: "adult",
    lable: "Người Lớn",
    icon: <FaUserGroup size={20} />,
  },
  {
    key: "kids",
    lable: "Trẻ em",
    icon: <FaChild size={20} />,
  },
  {
    key: "room",
    lable: "Phòng",
    icon: <MdOutlineMeetingRoom size={20} />,
  },
];
