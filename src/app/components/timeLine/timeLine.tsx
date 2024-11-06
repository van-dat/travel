"use client";
import styled from 'styled-components';

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
          <ItemLine
            key={item}
            active={active === item}
            style={{ top: (item) * (100 / (total + 1)) + '%' }}
          >
            {item === active && active}
          </ItemLine>
        ))}
      </div>
    </>
  );
};

export default TimeLine;



type ItemLineProps = {
  active: boolean;
};

const ItemLine = styled.div<ItemLineProps>`
  color: ${(props) => (props.active ? 'red' : 'white')};
  font-weight: bold;
  left: 0;
  width: ${(props) => (props.active ? '30px' : '10px')};
  height: ${(props) => (props.active ? '30px' : '10px')};
  font-size: 16px;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.35s;
  transform: translate(-55%, -50%);

  &:active {
    width: 30px;
    height: 30px;
    color: red;
  }
`;
