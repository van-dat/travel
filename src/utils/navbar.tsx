import { BsFillBookmarkCheckFill, BsShop } from "react-icons/bs";
import {
  AirportPickUp,
  AirportTranfer,
  BookingIcon,
  FlightIcon,
  FunActive,
  HotelIcon,
  RentVehical,
  SaleIcon,
  Transpost,
  VietNam,
} from "./icon";
import { LuUser2 } from "react-icons/lu";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaBloggerB, FaMoneyBills } from "react-icons/fa6";
import { RiHotelLine, RiMobileDownloadLine } from "react-icons/ri";
import { PiSealPercent } from "react-icons/pi";
import { FaBusAlt } from "react-icons/fa";
import {
  MdCarRental,
  MdOutlineEventNote,
  MdOutlineFlight,
  MdOutlineNetworkPing,
} from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { TbCalendarQuestion } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi2";

export const navBar = [
  { id: 1, label: "Khách sạn", href: "/hotel", icon: <HotelIcon /> },
  { id: 2, label: "Vé máy bay", href: "/flight", icon: <FlightIcon /> },
  {
    id: 3,
    label: "Vé xe khách",
    href: "/bus-and-shuttle",
    icon: <Transpost />,
  },
  {
    id: 4,
    label: "Đưa đón sân bay",
    href: "/airport-transfer",
    icon: <AirportPickUp />,
  },
  { id: 5, label: "Cho thuê xe ", href: "/car-rental", icon: <RentVehical /> },
  {
    id: 6,
    label: "Hoạt động & vui chơi",
    href: "/activites",
    icon: <FunActive />,
  },
];

export const navBarMobile = [
  {
    id: 1,
    label: "Khách sạn",
    color: "#1AC3F3",
    href: "/hotel",
    icon: <HotelIcon />,
  },
  {
    id: 2,
    label: "Vé máy bay",
    color: "#115EA0",
    href: "/flight",
    icon: <FlightIcon />,
  },
  {
    id: 3,
    label: "Vé xe khách",
    color: "#FF6064",
    href: "/bus-and-shuttle",
    icon: <Transpost />,
  },
  {
    id: 4,
    label: "Đưa đón sân bay",
    color: "#4BD4CF",
    href: "/airport-transfer",
    icon: <AirportPickUp />,
  },
  {
    id: 5,
    label: "Cho thuê xe ",
    color: "#00657F",
    href: "/car-rental",
    icon: <RentVehical />,
  },
  {
    id: 6,
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
    icon: <BsShop size={24} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 2,
    label: "Đăng nhập",
    icon: <LuUser2 size={24} color={"#115EA0"} />,
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
      <LiaPhoneSolid className="scale-x-[-1]" size={24} color={"#115EA0"} />
    ),
    href: "#",
  },
  {
    id: 5,
    label: "Trợ giúp",
    icon: <IoHelpCircleOutline size={24} color={"#115EA0"} />,
    href: "#",
  },
  {
    id: 6,
    label: "Quốc gia & Ngôn ngữ",
    icon: <VietNam />,
    language: "VI-VN",
    href: "#",
  },
  {
    id: 7,
    label: "Ngoại tệ",
    icon: <FaMoneyBills size={24} color={"#115EA0"} />,
    language: "VND",
    href: "#",
  },
  {
    id: 8,
    label: "Tải Ứng dụng",
    icon: <RiMobileDownloadLine size={24} color={"#115EA0"} />,
    href: "#",
  },
];

export const navBarMobile2 = [
  {
    id: 1,
    label: "Khuyến mãi",
    href: "/sale",
    icon: <PiSealPercent size={24} color={"#FF6064"} />,
  },
  {
    id: 2,
    label: "Khách sạn",
    color: "#1AC3F3",
    href: "/hotel",
    icon: <RiHotelLine size={24} color={"#1AC3F3"} />,
  },
  {
    id: 3,
    label: "Vé máy bay",
    color: "#115EA0",
    href: "/flight",
    icon: <MdOutlineFlight size={24} color={"#FF6064"} />,
  },
  {
    id: 4,
    label: "Vé xe khách",
    color: "#FF6064",
    href: "/bus-and-shuttle",
    icon: <FaBusAlt size={24} color={"#24BF55"} />,
  },
  {
    id: 5,
    label: "Đưa đón sân bay",
    color: "#4BD4CF",
    href: "/airport-transfer",
    icon: <AirportTranfer height={24} width={24} />,
  },
  {
    id: 6,
    label: "Cho thuê xe ",
    color: "#00657F",
    href: "/car-rental",
    icon: <MdCarRental size={24} color={"#00657F"} />,
  },
  {
    id: 7,
    label: "Hoạt động & vui chơi",
    color: "#fefefe",
    href: "/activites",
    icon: <MdOutlineNetworkPing size={24} color={"#FF6D6A"} />,
  },
];

const withTravle = [
  {
    id: 1,
    label: "Về Travel",
    href: "/",
    icon: <PiSealPercent size={24} color={"#115EA0"} />,
  },
  {
    id: 2,
    label: "Blog",
    color: "#1AC3F3",
    href: "/blog",
    icon: <FaBloggerB size={24} color={"#115EA0"} />,
  },
  {
    id: 3,
    label: "Cách đặt chỗ",
    color: "#115EA0",
    href: "/how-to",
    icon: <TbCalendarQuestion size={24} color={"#115EA0"} />,
  },
  {
    id: 4,
    label: "Chính sách Quyền riêng",
    color: "#FF6064",
    href: "/policy",
    icon: <CgFileDocument size={24} color={"#115EA0"} />,
  },
  {
    id: 5,
    label: "Điều khoản & Điều kiện",
    color: "#4BD4CF",
    href: "/terms",
    icon: <CgFileDocument size={24} color={"#115EA0"} />,
  },
];

export const dataMenu = [[...MenuMobile], [...navBarMobile2], [...withTravle]];

export const BottomNavbar = [
  {
    id: 1,
    label: "Trang chủ",
    link: "/",
    icon: <HiOutlineHome size={24} />,
  },
  {
    id: 2,
    label: "Đã lưu",
    link: "/save",
    icon: <BsFillBookmarkCheckFill size={24} />,
  },
  {
    id: 3,
    label: "Đặt chỗ của tôi",
    link: "/booking",
    icon: <MdOutlineEventNote size={24} />,
  },
  {
    id: 4,
    label: "Tài khoản",
    link: "/user",
    icon: <LuUser2 size={24} />,
  },
];
