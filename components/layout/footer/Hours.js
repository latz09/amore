import { AiFillPhone } from 'react-icons/ai';

const Hours = () => {
	return (
		<div className='grid gap-3 place-items-center text-xl text-gray-700'>
			<div className='grid place-items-center text-2xl'>
				<span>Hours</span>
				<span>Every Day: 6:30am - 6:00pm</span>
			</div>
			<div className='flex space-x-2 items-center'>
				<span className='text-black'>
					<AiFillPhone />
				</span>
				<span>651 330-0570</span>
			</div>
			<div className='grid place-items-center gap-1'>
				<span>879 Smith Ave South</span>
				<span>West Saint Paul, MN 55118</span>
			</div>
		</div>
	);
};

export default Hours;
