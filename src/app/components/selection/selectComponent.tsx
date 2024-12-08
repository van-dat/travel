import { Select } from "antd";
import { ReactNode } from "react";

type Props = {
  defaultValue?: string;
  value: string;
  fieldKey?: string;
  prefixIcon?: ReactNode;
  dropdownRender?: any | null;
  size?: "large" | "middle" | "small";
  placeholder?: string;
  optionRender?: (menu: any) => ReactNode;
  options?: any;
  onChange?: (value: any, key: string) => void;
  styleCss?: any;
};

const SelectComponent = (props: Props) => {
  const {
    defaultValue,
    value,
    prefixIcon,
    dropdownRender,
    size,
    fieldKey,
    placeholder,
    optionRender,
    options,
    onChange,
    styleCss,
  } = props;

  const handleOnChange = (value: string) => {
    if (onChange && fieldKey) onChange(value, fieldKey);
  };
  return (
    <Select
      size={size || "large"}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      prefix={prefixIcon}
      dropdownRender={dropdownRender}
      optionRender={optionRender}
      options={options}
      onChange={handleOnChange}
      style={{ ...styleCss }}
    />
  );
};

export default SelectComponent;
