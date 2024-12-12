import { VietNam } from "./icon";

export const country = [
  {
    id: 1,
    label: "Việt Nam",
    text: "Tiếng Việt",
    language: "vi",
    currency: "VND",

    description: "Việt Nam Đồng",
    ensign: <VietNam />,
  },
  {
    id: 2,
    label: "Việt Nam",
    text: "English",
    language: "en",
    currency: "VND",
    description: "Việt Nam Đồng",
    ensign: <VietNam />,
  },
];
export const deffaultLanguage = () => {
  const languages = navigator.languages;
  const data = country.filter((item: any) => item.language === languages[0]);
  console.log(data);
  return data[0];
};
