import { StarFilled } from '@ant-design/icons';

type Props = { rate: number };

const Rating = (props: Props) => {
    const { rate } = props;

    return (
        <div className='flex flex-row gap-1'>
            {Array.from({ length: rate }, (_, idx) => (
                <StarFilled  key={idx} style={{color: "#F9E400"}}   /> 
            ))}
        </div>
    );
};

export default Rating;
