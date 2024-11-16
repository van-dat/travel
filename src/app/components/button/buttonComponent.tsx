import { Button } from "antd";

type IconPosition = "start" | "end";
type Types = "primary" | "dashed" | "link" | "text";
type Variants = "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
type Props = {
  icon?: React.ReactNode;
  styleCss?: string;
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

  return (
    <Button
      variant={variants ? variants : "text"}
      type={types ? types : "default"}
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        borderRadius: `${radius ? radius : "26px"}`,
        display: "flex",
        justifyContent: "space-between",
        background: `${background ? background : "white"}`,
      }}
      iconPosition={iconPosition ? iconPosition : "start"}
      icon={icon}
    >
      {text ? text : null}
    </Button>
  );
};

export default ButtonComponent;
