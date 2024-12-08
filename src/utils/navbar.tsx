import { BsShop } from "react-icons/bs";
import {
  AirportPickUp,
  AirportTranfer,
  BookingIcon,
  FlightIcon,
  FunActive,
  HotelIcon,
  RentVehical,
  Transpost,
  VietNam,
} from "./icon";
import { LuUser2 } from "react-icons/lu";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { RiHotelLine, RiMobileDownloadLine } from "react-icons/ri";
import { PiSealPercent } from "react-icons/pi";
import { FaBusAlt } from "react-icons/fa";
import {
  MdCarRental,
  MdOutlineFlight,
  MdOutlineNetworkPing,
} from "react-icons/md";

const country = [
  {
    id: 1,
    label: "Việt Nam",
    summary: "",
    ensign: <VietNam />,
  },
];

export const navBar = [
  { key: 1, label: "Khách sạn", href: "/hotel", icon: <HotelIcon /> },
  { key: 2, label: "Vé máy bay", href: "/flight", icon: <FlightIcon /> },
  {
    key: 3,
    label: "Vé xe khách",
    href: "/bus-and-shuttle",
    icon: <Transpost />,
  },
  {
    key: 4,
    label: "Đưa đón sân bay",
    href: "/airport-transfer",
    icon: <AirportPickUp />,
  },
  { key: 5, label: "Cho thuê xe ", href: "/car-rental", icon: <RentVehical /> },
  {
    key: 6,
    label: "Hoạt động & vui chơi",
    href: "/activites",
    icon: <FunActive />,
  },
];

export const navBarMobile = [
  {
    key: 1,
    label: "Khách sạn",
    color: "#1AC3F3",
    href: "/hotel",
    icon: <HotelIcon />,
  },
  {
    key: 2,
    label: "Vé máy bay",
    color: "#115EA0",
    href: "/flight",
    icon: <FlightIcon />,
  },
  {
    key: 3,
    label: "Vé xe khách",
    color: "#FF6064",
    href: "/bus-and-shuttle",
    icon: <Transpost />,
  },
  {
    key: 4,
    label: "Đưa đón sân bay",
    color: "#4BD4CF",
    href: "/airport-transfer",
    icon: <AirportPickUp />,
  },
  {
    key: 5,
    label: "Cho thuê xe ",
    color: "#00657F",
    href: "/car-rental",
    icon: <RentVehical />,
  },
  {
    key: 6,
    label: "Hoạt động & vui chơi",
    color: "#fefefe",
    href: "/activites",
    icon: <FunActive />,
  },
];

export const MenuMobile = [
  {
    id: 1,
    label: "SALE",
    icon: <BsShop size={18} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 2,
    label: "Đăng nhập",
    icon: <LuUser2 size={20} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 3,
    label: "Đặt chỗ của tôi",
    icon: <BookingIcon />,
    href: "#",
  },
  {
    id: 4,
    label: "Hỗ trợ Khách hàng",
    icon: (
      <LiaPhoneSolid className="scale-x-[-1]" size={20} color={"#115EA0"} />
    ),
    href: "#",
  },
  {
    id: 5,
    label: "Trợ giúp",
    icon: <IoHelpCircleOutline size={22} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 6,
    label: "Quốc gia & Ngôn ngữ",
    icon: <VietNam />,
    href: "#",
  },
  {
    id: 7,
    label: "Ngoại tệ",
    icon: <FaMoneyBills size={20} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 8,
    label: "Tải Ứng dụng",
    icon: <RiMobileDownloadLine size={20} color={"#115EA0"} />,
    href: "#",
  },
];

export const navBarMobile2 = [
  {
    key: 1,
    label: "Khuyến mãi",
    href: "/sale",
    icon: <PiSealPercent size={20} color={"#FF6064"} />,
  },
  {
    key: 2,
    label: "Khách sạn",
    color: "#1AC3F3",
    href: "/hotel",
    icon: <RiHotelLine size={20} color={"#1AC3F3"} />,
  },
  {
    key: 3,
    label: "Vé máy bay",
    color: "#115EA0",
    href: "/flight",
    icon: <MdOutlineFlight size={20} color={"#FF6064"} />,
  },
  {
    key: 4,
    label: "Vé xe khách",
    color: "#FF6064",
    href: "/bus-and-shuttle",
    icon: <FaBusAlt size={18} color={"#20BF55"} />,
  },
  {
    key: 5,
    label: "Đưa đón sân bay",
    color: "#4BD4CF",
    href: "/airport-transfer",
    icon: <AirportTranfer height={20} width={20} />,
  },
  {
    key: 6,
    label: "Cho thuê xe ",
    color: "#00657F",
    href: "/car-rental",
    icon: <MdCarRental size={20} color={"#00657F"} />,
  },
  {
    key: 7,
    label: "Hoạt động & vui chơi",
    color: "#fefefe",
    href: "/activites",
    icon: <MdOutlineNetworkPing size={20} color={"#FF6D6A"} />,
  },
];
export const dataMenu = [[...MenuMobile], [...navBarMobile2]];
