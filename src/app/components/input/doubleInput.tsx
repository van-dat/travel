import { Input, Space } from "antd";
import { NextPage } from "next";

interface typeInput {}
type Props = {
  valueInput: any;
};

const DoubleInput = (props: Props) => {
  const { valueInput } = props;
  return (
    <Space.Compact>
      <Input style={{ width: "50%" }} defaultValue="0571" />
      <Input style={{ width: "50%" }} defaultValue="26888888" />
    </Space.Compact>
  );
};

export default DoubleInput;
