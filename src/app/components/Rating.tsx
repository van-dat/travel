import { AiFillStar } from "react-icons/ai";

type Props = { rate: number; size?: number };

const Rating = (props: Props) => {
  const { rate, size } = props;

  return (
    <div className="flex flex-row gap-1">
      {Array.from({ length: rate }, (_, idx) => (
        <AiFillStar key={idx} size={size} color="#F9E400" />
      ))}
    </div>
  );
};

export default Rating;
