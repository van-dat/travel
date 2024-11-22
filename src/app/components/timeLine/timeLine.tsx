"use client";

type Props = {
  total: number;
  active: number;
};

const TimeLine = (props: Props) => {
  const { total, active } = props;

  const totalArray = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <>
      <div className='w-[50px]'>
        {totalArray.map((item: number) => (
          <div
            key={item}
            className={`${active === item ? " text-red-600 w-[30px] h-[30px] " : "text-white w-[10px] h-[10px]" } time-line`}
            style={{ top: (item) * (100 / (total + 1)) + '%' }}
          >
            {item === active && active} 
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeLine;



