import { Button } from "antd";

type IconPosition = "start" | "end";
type Types = "primary" | "dashed" | "link" | "text";
type Variants = "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
type Sizes = "large" | "middle" | "small";
type Props = {
  icon?: React.ReactNode;
  styleCss?: React.CSSProperties;
  text?: string;
  iconPosition?: IconPosition;
  types?: Types;
  variants?: Variants;
  background?: string;
  radius?: number;
  size?: Sizes;
  handleClick?: () => void;
};

const ButtonComponent = (props: Props) => {
  const {
    icon,
    styleCss,
    text,
    iconPosition,
    types,
    variants,
    background,
    radius,
    size,
    handleClick,
  } = props;

  const combinedStyle: React.CSSProperties = {
    ...styleCss,
    borderRadius: radius || 26,
    display: "flex",
    backgroundColor: background || "white",
  };

  return (
    <Button
      onClick={handleClick}
      variant={variants ? variants : "text"}
      type={types ? types : "default"}
      style={combinedStyle}
      iconPosition={iconPosition ? iconPosition : "start"}
      icon={icon}
      size={size || "middle"}
    >
      {text ? text : null}
    </Button>
  );
};

export default ButtonComponent;
