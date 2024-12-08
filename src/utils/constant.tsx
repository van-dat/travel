import { GuestAndRoom } from "@/app/components/form/formpage";
import { FaChild, FaUserGroup } from "react-icons/fa6";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { CityGuideFill, FlightFill } from "./icon";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const keywordForm = {
  HOTEL: 1,
  FLIGHT: 2,
  CAR: 3,
  AIR_TRANFER: 4,
  RENT_CAR: 5,
  ACTIVITES: 6,
};

export const typeFlight = [
  {
    id: 1,
    label: "Phổ thông",
    value: "Phổ thông",
  },
  {
    id: 2,
    label: "Phổ thông đăc biệt",
    value: "Phổ thông đăc biệt",
  },
  {
    id: 3,
    label: "Thương gia",
    value: "Thương gia",
  },
];

export const data = [
  {
    id: 1,
    label: "Sân bay Tân Sơn Nhất",
    address: "TP HCM, Việt Nam",
    city: "TP HCM",
    summary: "SGN",
    icon: <FlightFill />,
  },
  {
    id: 2,
    label: "Sân bay Nội Bài",
    address: "Hà Nội, Việt Nam",
    city: "Hà Nội",
    summary: "HAN",
    icon: <FlightFill />,
  },
  {
    id: 3,
    label: "Sân bay Đà Nẵng",
    address: "Đà Nẵng, Việt Nam",
    city: "Đà Năng",
    summary: "DAD",
    icon: <FlightFill />,
  },
  {
    id: 4,
    label: "Sân bay quốc tế Abu Dhabi (AUH)",
    address: "Abu Dhabi, Các Tiểu vương quốc Ả Rập Thống nhất",
    city: "Abu Dhabi",
    summary: "AUH",
    icon: <FlightFill />,
  },
  {
    id: 5,
    label: "Bangkok",
    address: "Thái Lan",
    city: "Bangkok",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
  {
    id: 6,
    label: "Sân bay quốc tế Changi",
    address: "Singapore, Singapore",
    city: "Singapore",
    summary: "SIN",
    icon: <FlightFill />,
  },
  {
    id: 7,
    label: "Kuala Lumpur",
    address: "Malaysia",
    city: "Kuala Lumpur",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
  {
    id: 8,
    label: "Seoul",
    address: "Hàn Quốc",
    city: "Seoul",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
  {
    id: 9,
    label: "Sân bay Tân Sơn Nhất",
    address: "TP HCM, Việt Nam",
    city: "TP HCM",
    summary: "SGN",
    icon: <FlightFill />,
  },
  {
    id: 10,
    label: "Sân bay Nội Bài",
    address: "Hà Nội, Việt Nam",
    city: "Hà Nội",
    summary: "HAN",
    icon: <FlightFill />,
  },
  {
    id: 11,
    label: "Sân bay Đà Nẵng",
    address: "Đà Nẵng, Việt Nam",
    city: "Đà Năng",
    summary: "DAD",
    icon: <FlightFill />,
  },
  {
    id: 12,
    label: "Sân bay quốc tế Abu Dhabi (AUH)",
    address: "Abu Dhabi, Các Tiểu vương quốc Ả Rập Thống nhất",
    city: "Abu Dhabi",
    summary: "AUH",
    icon: <FlightFill />,
  },
  {
    id: 13,
    label: "Bangkok",
    address: "Thái Lan",
    city: "Bangkok",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
  {
    id: 14,
    label: "Sân bay quốc tế Changi",
    address: "Singapore, Singapore",
    city: "Singapore",
    summary: "SIN",
    icon: <FlightFill />,
  },
  {
    id: 15,
    label: "Kuala Lumpur",
    address: "Malaysia",
    city: "Kuala Lumpur",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
  {
    id: 16,
    label: "Seoul",
    address: "Hàn Quốc",
    city: "Seoul",
    summary: "Tất cả sân bay",
    icon: <CityGuideFill />,
  },
];
