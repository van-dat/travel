import {
  AirportPickUp,
  FlightIcon,
  FunActive,
  HotelIcon,
  RentVehical,
  Transpost,
} from "./icon";
export const navBar = [
  { key: 1, icon: <HotelIcon />, label: "Khách sạn" },
  { key: 2, label: "Vé máy bay", icon: <FlightIcon /> },
  { key: 3, label: "Vé xe khách", icon: <Transpost /> },
  { key: 4, label: "Đưa đón sân bay", icon: <AirportPickUp /> },
  { key: 5, label: "Cho thuê xe ", icon: <RentVehical /> },
  { key: 6, label: "Hoạt động & vui chơi", icon: <FunActive /> },
];

export const navBarMobile = [
  { key: 1, label: "Khách sạn", color : "",icon: <HotelIcon /> },
  { key: 2, label: "Vé máy bay", color : "",icon: <FlightIcon /> },
  { key: 3, label: "Vé xe khách", color : "",icon: <Transpost /> },
  { key: 4, label: "Đưa đón sân bay", color : "",icon: <AirportPickUp /> },
  { key: 5, label: "Cho thuê xe ", color : "",icon: <RentVehical /> },
  { key: 6, label: "Hoạt động & vui chơi", color : "",icon: <FunActive /> },
];
