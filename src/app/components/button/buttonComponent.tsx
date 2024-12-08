import { Button } from "antd";

type IconPosition = "start" | "end";
type Types = "primary" | "dashed" | "link" | "text";
type Variants = "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
type Props = {
  icon?: React.ReactNode;
  styleCss?: React.CSSProperties;
  text?: string;
  iconPosition?: IconPosition;
  types?: Types;
  variants?: Variants;
  background?: string;
  radius?: string;
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
  } = props;

  const combinedStyle: React.CSSProperties = {
    ...styleCss,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: radius || 26,
    display: "flex",
    backgroundColor: background || "white",
  };

  return (
    <Button
      variant={variants ? variants : "text"}
      type={types ? types : "default"}
      style={combinedStyle}
      iconPosition={iconPosition ? iconPosition : "start"}
      icon={icon}
    >
      {text ? text : null}
    </Button>
  );
};

export default ButtonComponent;
