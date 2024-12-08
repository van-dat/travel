import { Input } from "antd";
import { ReactNode } from "react";

type Props = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  value: any;
  onChangValue: () => void;
  placeholder?: string;
  sizes?: "large" | "middle" | "small";
  defautValue?: any;
};

const InputComponent = (props: Props) => {
  const {
    suffix,
    prefix,
    value,
    onChangValue,
    placeholder,
    sizes,
    defautValue,
  } = props;
  return (
    <Input
      size={sizes || "large"}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
      value={value}
      onChange={onChangValue}
      defaultValue={defautValue}
    />
  );
};

export default InputComponent;
