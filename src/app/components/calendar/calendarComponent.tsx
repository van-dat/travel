import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Calendar } from "@/utils/icon";
type Props = {
  setValue: (date: any, dateString: any) => void;
  value: any;
  fieldKey: string;
  format?: string;
  css?: string;
  disabled?: boolean;
  handleForcus?: () => void;
  clear?: any;
};

const CalendarComponent = (props: Props) => {
  const {
    value,
    setValue,
    fieldKey,
    format,
    css,
    disabled,
    handleForcus,
    clear,
  } = props;

  const onChange = (date: any, dateString: any) => {
    setValue(date, fieldKey);
  };
  return (
    <DatePicker
      size="large"
      minDate={dayjs(value)}
      onChange={onChange}
      format={format || "dddd, D [thg] M YYYY"}
      defaultValue={dayjs(value)}
      prefix={<Calendar />}
      value={dayjs(value)}
      suffixIcon={null}
      placeholder=" "
      className={`${css} w-full py-2`}
      disabled={disabled || false}
      onFocus={handleForcus}
      allowClear={clear || false}
    />
  );
};

export default CalendarComponent;
