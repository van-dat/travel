import {
  AirportPickUp,
  FlightIcon,
  FunActive,
  HotelIcon,
  RentVehical,
  Transpost,
} from "./icon";
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
